import { FaGoogle } from 'react-icons/fa6';
import { LuQuote, LuStar } from 'react-icons/lu';
import { site } from '@/content/site';
import Section from '@/components/ui/Section';
import SectionHeading from '@/components/ui/SectionHeading';
import StarRating from '@/components/ui/StarRating';
import type { Office, Testimonial } from '@/content/types';
import { getReviewsFeed } from '@/lib/google-reviews';

interface Props {
  title?: string;
  /** Only show reviews for these offices (e.g. a location page). */
  officeIds?: Office['id'][];
  limit?: number;
  tone?: 'default' | 'white';
  /** Hand-picked reviews shown first (e.g. on a location page). */
  testimonials?: Testimonial[];
}

/** Live Google reviews (server-rendered, refreshed daily). */
export default async function ReviewsSection({ title = 'What our clients say', officeIds, limit = 6, tone = 'default', testimonials = [] }: Props) {
  const feed = await getReviewsFeed(officeIds);
  // Hand-picked reviews first; live Google reviews fill the remaining spots.
  const picked = new Set(testimonials.map((t) => t.quote.slice(0, 60)));
  const reviews = feed.reviews.filter((r) => !picked.has(r.text.slice(0, 60))).slice(0, Math.max(0, limit - testimonials.length));

  return (
    <Section id="reviews" tone={tone}>
      <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
        <SectionHeading eyebrow="Reviews" title={title} spacing="none" />
        {feed.live && feed.averageRating && (
          <div className="flex items-center gap-4 rounded-2xl bg-white px-6 py-4 shadow-[var(--shadow-card)]">
            <FaGoogle className="size-7 text-ink-900" aria-hidden="true" />
            <div>
              <p className="flex items-center gap-2">
                <span className="text-2xl font-bold text-ink-950">{feed.averageRating.toFixed(1)}</span>
                <StarRating rating={feed.averageRating} />
              </p>
              <p className="text-sm text-ink-500">{feed.totalReviews} Google reviews</p>
            </div>
          </div>
        )}
      </div>

      {process.env.NODE_ENV !== 'production' && !feed.live && feed.debug && (
        <div className="mt-8 rounded-xl border border-red-300 bg-red-50 p-4 text-sm text-red-800" data-reviews-debug>
          <p className="font-semibold">Live reviews not loading (only visible in development):</p>
          <ul className="mt-1 list-disc pl-5">
            {feed.debug.map((m) => (
              <li key={m}>{m}</li>
            ))}
          </ul>
        </div>
      )}

      {testimonials.length > 0 && (
        <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <li key={t.quote.slice(0, 40)} className="flex flex-col rounded-[var(--radius-card)] bg-white p-7 shadow-[var(--shadow-card)]">
              <LuQuote className="size-7 text-gold-400" aria-hidden="true" />
              {t.rating && <StarRating rating={t.rating} className="mt-4" />}
              <blockquote className="mt-3 flex-1 leading-relaxed text-ink-700">{t.quote}</blockquote>
              <div className="mt-6 flex items-center gap-3 border-t border-ink-100 pt-5">
                <span className="flex size-10 items-center justify-center rounded-full bg-ink-950 font-semibold text-gold-300" aria-hidden="true">
                  {t.name.charAt(0)}
                </span>
                <div className="text-sm">
                  <p className="font-semibold text-ink-900">{t.name}</p>
                  <p className="text-ink-500">{[t.detail, t.source && `via ${t.source}`].filter(Boolean).join(' · ')}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}

      {reviews.length > 0 && (
        <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r) => (
            <li key={r.id} className="flex flex-col rounded-[var(--radius-card)] bg-white p-7 shadow-[var(--shadow-card)]">
              <LuQuote className="size-7 text-gold-400" aria-hidden="true" />
              <StarRating rating={r.rating} className="mt-4" />
              <blockquote className="mt-3 line-clamp-8 flex-1 leading-relaxed text-ink-700">{r.text}</blockquote>
              <div className="mt-6 flex items-center gap-3 border-t border-ink-100 pt-5">
                {r.authorPhoto ? (
                  // eslint-disable-next-line @next/next/no-img-element -- Google-hosted avatar
                  <img src={r.authorPhoto} alt="" width={40} height={40} loading="lazy" referrerPolicy="no-referrer" className="size-10 rounded-full" />
                ) : (
                  <span className="flex size-10 items-center justify-center rounded-full bg-ink-950 font-semibold text-gold-300" aria-hidden="true">
                    {r.authorName.charAt(0)}
                  </span>
                )}
                <div className="text-sm">
                  <p className="font-semibold text-ink-900">
                    {r.authorUrl ? (
                      <a href={r.authorUrl} target="_blank" rel="noopener noreferrer nofollow" className="hover:text-gold-700">
                        {r.authorName}
                      </a>
                    ) : (
                      r.authorName
                    )}
                  </p>
                  <p className="text-ink-500">
                    {r.relativeTime}
                    {r.relativeTime && ' · '}
                    {r.officeLabel}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}

      <ul className="mt-10 flex flex-wrap gap-3">
        {feed.offices.map((o) => (
          <li key={o.id}>
            <a
              href={o.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-ink-300 bg-white px-4 py-2 text-sm font-semibold text-ink-800 hover:border-ink-900"
            >
              <FaGoogle className="size-3.5" aria-hidden="true" />
              {o.label} reviews
              {o.rating && o.reviewCount ? ` · ${o.rating.toFixed(1)}★ (${o.reviewCount})` : ''}
            </a>
          </li>
        ))}
        {site.social.homestars && (
          <li>
            <a
              href={site.social.homestars}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-ink-300 bg-white px-4 py-2 text-sm font-semibold text-ink-800 hover:border-ink-900"
            >
              <LuStar className="size-3.5" aria-hidden="true" />
              Our reviews on HomeStars
            </a>
          </li>
        )}
        {feed.offices[0]?.writeReviewUrl && (
          <li>
            <a href={feed.offices[0].writeReviewUrl} target="_blank" rel="noopener noreferrer" className="inline-flex px-4 py-2 text-sm font-semibold text-gold-700 hover:underline">
              Leave a review
            </a>
          </li>
        )}
      </ul>
      {feed.live && <p className="mt-4 text-xs text-ink-400">Reviews powered by Google</p>}
    </Section>
  );
}
