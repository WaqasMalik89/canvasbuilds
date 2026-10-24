// lib/google-reviews.ts
// ---------------------------------------------------------------------------
// Live Google reviews (server-side only), via the Google Places API (New).
// Rendered on the server so Google can read them; cached for 24 hours.
//
// Setup: enable "Places API (New)" in Google Cloud, create a key restricted
// to that API, then set GOOGLE_PLACES_API_KEY in .env.local and in Vercel.
// Optional: pin Place IDs with GOOGLE_PLACE_ID_WATERLOO / _WOODBRIDGE / _BRADFORD.
// Without a key, the reviews section shows "Read our reviews" links instead.
// ---------------------------------------------------------------------------

import { offices, officeAddress, officeMapsUrl, site } from '@/content/site';
import type { Office } from '@/content/types';

const API = 'https://places.googleapis.com/v1';
const DAY = 60 * 60 * 24;

export interface GoogleReview {
  id: string;
  officeId: Office['id'];
  officeLabel: string;
  authorName: string;
  authorUrl?: string;
  authorPhoto?: string;
  rating: number;
  text: string;
  relativeTime: string;
  publishTime?: string;
  googleMapsUri?: string;
}

export interface OfficeRating {
  id: Office['id'];
  label: string;
  rating?: number;
  reviewCount?: number;
  mapsUrl: string;
  writeReviewUrl?: string;
}

export interface ReviewsFeed {
  live: boolean;
  offices: OfficeRating[];
  reviews: GoogleReview[];
  totalReviews: number;
  averageRating?: number;
  /** Why live reviews are unavailable (shown only in development). */
  debug?: string[];
}

const debugLog: string[] = [];
async function apiError(res: Response, what: string) {
  let detail = '';
  try {
    const body = (await res.json()) as { error?: { message?: string; status?: string } };
    detail = body.error?.message || body.error?.status || '';
  } catch {}
  const msg = `${what}: HTTP ${res.status}${detail ? ` — ${detail}` : ''}`;
  console.error(`[reviews] ${msg}`);
  debugLog.push(msg);
}

interface PlacesReview {
  name?: string;
  rating?: number;
  text?: { text?: string };
  originalText?: { text?: string };
  relativePublishTimeDescription?: string;
  publishTime?: string;
  googleMapsUri?: string;
  authorAttribution?: { displayName?: string; uri?: string; photoUri?: string };
}

interface PlaceDetails {
  rating?: number;
  userRatingCount?: number;
  googleMapsUri?: string;
  reviews?: PlacesReview[];
}

async function findPlaceId(o: Office, key: string): Promise<string | null> {
  const fromEnv = process.env[`GOOGLE_PLACE_ID_${o.id.toUpperCase()}`] || o.placeId;
  if (fromEnv) return fromEnv;

  const res = await fetch(`${API}/places:searchText`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'X-Goog-Api-Key': key, 'X-Goog-FieldMask': 'places.id' },
    body: JSON.stringify({ textQuery: `${site.name}, ${officeAddress(o)}` }),
    next: { revalidate: DAY * 30 },
  });
  if (!res.ok) {
    await apiError(res, `place lookup (${o.id})`);
    return null;
  }
  const data = (await res.json()) as { places?: { id: string }[] };
  if (!data.places?.length) debugLog.push(`place lookup (${o.id}): no Google listing found for "${site.name}, ${officeAddress(o)}"`);
  return data.places?.[0]?.id ?? null;
}

async function getPlaceDetails(placeId: string, key: string): Promise<PlaceDetails | null> {
  const res = await fetch(`${API}/places/${encodeURIComponent(placeId)}?languageCode=en&regionCode=CA`, {
    headers: { 'X-Goog-Api-Key': key, 'X-Goog-FieldMask': 'rating,userRatingCount,googleMapsUri,reviews' },
    next: { revalidate: DAY },
  });
  if (!res.ok) {
    await apiError(res, `place details (${placeId})`);
    return null;
  }
  return (await res.json()) as PlaceDetails;
}

/** @param officeIds limit to some offices (e.g. a location page); default: all. */
export async function getReviewsFeed(officeIds?: Office['id'][]): Promise<ReviewsFeed> {
  const list = officeIds ? offices.filter((o) => officeIds.includes(o.id)) : offices;
  const fallback: ReviewsFeed = {
    live: false,
    offices: list.map((o) => ({ id: o.id, label: o.label, mapsUrl: officeMapsUrl(o) })),
    reviews: [],
    totalReviews: 0,
  };

  const key = process.env.GOOGLE_PLACES_API_KEY;
  if (!key) return { ...fallback, debug: ['GOOGLE_PLACES_API_KEY is not set — add it to .env.local and restart npm run dev'] };
  debugLog.length = 0;

  const results = await Promise.all(
    list.map(async (o) => {
      try {
        const placeId = await findPlaceId(o, key);
        const details = placeId ? await getPlaceDetails(placeId, key) : null;
        return { o, placeId, details };
      } catch (err) {
        console.error(`[reviews] failed (${o.id})`, err);
        return { o, placeId: null, details: null };
      }
    }),
  );

  if (!results.some((r) => r.details)) return { ...fallback, debug: debugLog.length ? [...debugLog] : ['No review data returned'] };

  const officeRatings: OfficeRating[] = results.map(({ o, placeId, details }) => ({
    id: o.id,
    label: o.label,
    rating: details?.rating,
    reviewCount: details?.userRatingCount,
    mapsUrl: details?.googleMapsUri || officeMapsUrl(o),
    writeReviewUrl: placeId ? `https://search.google.com/local/writereview?placeid=${placeId}` : undefined,
  }));

  const seen = new Set<string>();
  const reviews: GoogleReview[] = [];
  for (const { o, details } of results) {
    for (const r of details?.reviews ?? []) {
      const text = (r.text?.text || r.originalText?.text || '').trim();
      const authorName = r.authorAttribution?.displayName || 'Google user';
      const dedupe = `${authorName}|${text.slice(0, 60)}`;
      if (!text || seen.has(dedupe)) continue;
      seen.add(dedupe);
      reviews.push({
        id: r.name || dedupe,
        officeId: o.id,
        officeLabel: o.label,
        authorName,
        authorUrl: r.authorAttribution?.uri,
        authorPhoto: r.authorAttribution?.photoUri,
        rating: r.rating ?? 0,
        text,
        relativeTime: r.relativePublishTimeDescription || '',
        publishTime: r.publishTime,
        googleMapsUri: r.googleMapsUri,
      });
    }
  }
  reviews.sort((a, b) => (b.publishTime || '').localeCompare(a.publishTime || ''));

  const rated = officeRatings.filter((o) => o.rating && o.reviewCount);
  const totalReviews = rated.reduce((n, o) => n + (o.reviewCount || 0), 0);
  const averageRating = totalReviews
    ? rated.reduce((n, o) => n + (o.rating || 0) * (o.reviewCount || 0), 0) / totalReviews
    : undefined;

  return { live: true, offices: officeRatings, reviews, totalReviews, averageRating };
}
