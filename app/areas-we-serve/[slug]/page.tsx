import Link from 'next/link';
import { notFound } from 'next/navigation';
import { LuArrowUpRight, LuMapPin } from 'react-icons/lu';
import JsonLd from '@/components/seo/JsonLd';
import ContactSection from '@/components/sections/ContactSection';
import FaqSection from '@/components/sections/FaqSection';
import FeaturedProject from '@/components/sections/FeaturedProject';
import PageHero from '@/components/sections/PageHero';
import ReviewsSection from '@/components/sections/ReviewsSection';
import ServiceCards from '@/components/sections/ServiceCards';
import Section from '@/components/ui/Section';
import SectionHeading from '@/components/ui/SectionHeading';
import { areaHref, areas, getArea } from '@/content/areas';
import { getFeaturedProject } from '@/content/projects';
import { getOffice, officeAddress, officeMapsUrl } from '@/content/site';
import { buildMetadata } from '@/lib/seo/metadata';
import { areaSchema } from '@/lib/seo/schema';
import { listJoin } from '@/lib/utils';

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export const revalidate = 86400;

export function generateStaticParams() {
  return areas.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props) {
  const area = getArea((await params).slug);
  if (!area) return {};
  return buildMetadata({ ...area.seo, path: areaHref(area.slug), image: area.heroPhoto.src, absoluteTitle: true });
}

export default async function AreaPage({ params }: Props) {
  const area = getArea((await params).slug);
  if (!area) notFound();

  const office = area.officeId ? getOffice(area.officeId) : undefined;
  const project = getFeaturedProject(area.featuredProjectId);
  const otherAreas = areas.filter((a) => a.slug !== area.slug);

  return (
    <>
      <JsonLd data={areaSchema(area)} />
      <PageHero
        eyebrow={area.region}
        title={area.h1}
        intro={area.intro}
        photo={area.heroPhoto}
        breadcrumbs={[
          { name: 'Areas we serve', path: '/areas-we-serve' },
          { name: area.name, path: areaHref(area.slug) },
        ]}
      />

      {/* Local highlights */}
      <section className="border-b border-ink-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-px bg-ink-200 sm:grid-cols-3">
          {area.highlights.map((h) => (
            <div key={h.title} className="bg-white px-8 py-8">
              <h2 className="font-sans text-base font-semibold text-ink-950">{h.title}</h2>
              <p className="mt-1.5 text-ink-600">{h.text}</p>
            </div>
          ))}
        </div>
      </section>

      <ServiceCards
        tone="default"
        eyebrow={`Services in ${area.name}`}
        title={`Renovation services in ${area.name}`}
        intro={`Every service below is available in ${listJoin(area.cities.slice(0, 4))} and nearby communities.`}
      />

      {project && <FeaturedProject project={project} eyebrow={`Recent project in ${area.name}`} tone="white" />}

      <Section tone={project ? 'default' : 'white'}>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading eyebrow="Local knowledge" title={area.permits.heading} spacing="tight" />
            {area.permits.paragraphs.map((p) => (
              <p key={p.slice(0, 32)} className="mt-4 text-base leading-relaxed text-ink-600 sm:text-lg">
                {p}
              </p>
            ))}
            <ul className="mt-6 space-y-2">
              {area.permits.links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 font-medium text-gold-700 hover:underline">
                    {l.label} <LuArrowUpRight className="size-4" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-8">
            {office && (
              <div className="rounded-[var(--radius-card)] bg-ink-950 p-8 text-ink-300">
                <h2 className="font-sans text-sm font-semibold uppercase tracking-[0.16em] text-gold-300">Our {office.label} office</h2>
                <p className="mt-3 flex items-start gap-2 text-lg text-white">
                  <LuMapPin className="mt-1 size-5 shrink-0 text-gold-400" aria-hidden="true" />
                  {officeAddress(office)}
                </p>
                <a href={officeMapsUrl(office)} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block font-semibold text-gold-300 hover:text-gold-200">
                  Directions &amp; Google reviews →
                </a>
              </div>
            )}
            <div>
              <h2 className="text-2xl">Communities we serve</h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {area.cities.map((c) => (
                  <li key={c} className="rounded-full bg-white px-3 py-1.5 text-sm font-medium text-ink-800 ring-1 ring-ink-200">
                    {c}
                  </li>
                ))}
              </ul>
            </div>
            {area.neighbourhoods.length > 0 && (
              <div>
                <h2 className="text-2xl">Neighbourhoods</h2>
                <p className="mt-3 leading-relaxed text-ink-600">{listJoin(area.neighbourhoods)}.</p>
              </div>
            )}
          </div>
        </div>
      </Section>

      <ReviewsSection title={`Reviews from ${area.name} homeowners`} officeIds={office ? [office.id] : undefined} testimonials={area.testimonials} tone={project ? 'white' : 'default'} />
      <FaqSection faqs={area.faqs} title={`Renovating in ${area.name}: FAQs`} tone={project ? 'default' : 'white'} />

      <Section tone={project ? 'white' : 'default'} spacing="compact">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-gold-700">Other service areas</p>
        <ul className="mt-4 flex flex-wrap gap-3">
          {otherAreas.map((a) => (
            <li key={a.slug}>
              <Link href={areaHref(a.slug)} className="inline-flex rounded-full border border-ink-300 px-5 py-2 font-semibold text-ink-900 hover:border-ink-900">
                Renovations in {a.name}
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <ContactSection
        title={`Get a free estimate in ${area.name}`}
        defaultLocation={area.cities[0]}
        officeId={office?.id}
        tone={project ? 'default' : 'white'}
      />
    </>
  );
}
