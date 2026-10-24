// lib/seo/schema.ts — structured data (JSON-LD) for Google, generated from
// /content so it always matches what is on the page.
//
// No AggregateRating/Review markup on purpose: Google ignores self-hosted
// ratings for local businesses, and invented ones break its guidelines.

import { absoluteUrl, offices, officeMapsUrl, site } from '@/content/site';
import { areas } from '@/content/areas';
import type { Faq, Office, Service, ServiceArea } from '@/content/types';

const ORG_ID = `${site.url}/#organization`;
const officeId = (o: Office) => `${site.url}/#office-${o.id}`;
const sameAs = Object.values(site.social);
const allCities = Array.from(new Set(areas.flatMap((a) => a.cities)));
const cityList = (cities: string[]) => cities.map((name) => ({ '@type': 'City', name }));

function officeSchema(o: Office) {
  return {
    '@context': 'https://schema.org',
    '@type': 'GeneralContractor',
    '@id': officeId(o),
    name: site.name,
    url: site.url,
    image: absoluteUrl(site.defaultImage),
    logo: absoluteUrl(site.logo),
    telephone: site.phone.schema,
    email: site.email,
    priceRange: site.priceRange,
    parentOrganization: { '@id': ORG_ID },
    address: {
      '@type': 'PostalAddress',
      streetAddress: o.streetAddress,
      addressLocality: o.city,
      addressRegion: o.region,
      postalCode: o.postalCode,
      addressCountry: 'CA',
    },
    ...(o.geo ? { geo: { '@type': 'GeoCoordinates', ...o.geo } } : {}),
    hasMap: officeMapsUrl(o),
    areaServed: cityList(allCities),
    openingHoursSpecification: [
      { '@type': 'OpeningHoursSpecification', dayOfWeek: site.hours.days, opens: site.hours.opens, closes: site.hours.closes },
    ],
    sameAs,
  };
}

/** Rendered once in the root layout. */
export function siteSchema() {
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      '@id': ORG_ID,
      name: site.name,
      alternateName: site.shortName,
      url: site.url,
      logo: absoluteUrl(site.logo),
      email: site.email,
      telephone: site.phone.schema,
      sameAs,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': `${site.url}/#website`,
      url: site.url,
      name: site.shortName,
      publisher: { '@id': ORG_ID },
      inLanguage: 'en-CA',
    },
    ...offices.map(officeSchema),
  ];
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({ '@type': 'ListItem', position: i + 1, name: item.name, item: absoluteUrl(item.path) })),
  };
}

export function serviceSchema(service: Service) {
  const url = absoluteUrl(`/services/${service.slug}`);
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${url}#service`,
    name: service.name,
    serviceType: service.name,
    description: service.seo.description,
    url,
    provider: { '@id': ORG_ID },
    areaServed: cityList(allCities),
  };
}

/** Service-area page: the business, scoped to that area's cities. */
export function areaSchema(area: ServiceArea) {
  const url = absoluteUrl(`/areas-we-serve/${area.slug}`);
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${url}#service`,
    name: `Home renovation in ${area.name}`,
    serviceType: 'Home renovation',
    url,
    provider: { '@id': ORG_ID },
    areaServed: cityList(area.cities),
  };
}

export function faqSchema(faqs: Faq[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };
}
