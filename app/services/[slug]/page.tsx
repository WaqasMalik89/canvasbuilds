import Link from 'next/link';
import { notFound } from 'next/navigation';
import { LuArrowRight, LuMapPin } from 'react-icons/lu';
import JsonLd from '@/components/seo/JsonLd';
import ContactSection from '@/components/sections/ContactSection';
import FaqSection from '@/components/sections/FaqSection';
import FeaturedProject from '@/components/sections/FeaturedProject';
import PageHero from '@/components/sections/PageHero';
import PhotoGrid from '@/components/sections/PhotoGrid';
import ReviewsSection from '@/components/sections/ReviewsSection';
import ServiceCards from '@/components/sections/ServiceCards';
import { ButtonLink } from '@/components/ui/Button';
import CheckList from '@/components/ui/CheckList';
import Section from '@/components/ui/Section';
import { areaHref, areas } from '@/content/areas';
import { getFeaturedProject } from '@/content/projects';
import { getService, getServices, services } from '@/content/services';
import { site } from '@/content/site';
import { buildMetadata } from '@/lib/seo/metadata';
import { serviceSchema } from '@/lib/seo/schema';

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export const revalidate = 86400;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props) {
  const service = getService((await params).slug);
  if (!service) return {};
  return buildMetadata({ ...service.seo, path: `/services/${service.slug}`, image: service.photos[0]?.src });
}

export default async function ServicePage({ params }: Props) {
  const service = getService((await params).slug);
  if (!service) notFound();

  const project = getFeaturedProject(service.featuredProjectId);
  const [heroPhoto, ...morePhotos] = service.photos;
  const projectPhotos = new Set([project?.before.src, project?.after.src, ...(project?.steps ?? []).map((s) => s.src)]);
  const gallery = morePhotos.filter((p) => !projectPhotos.has(p.src));

  // Alternate section backgrounds so neighbouring sections never match.
  let sectionIndex = 0;
  const nextTone = () => (sectionIndex++ % 2 === 0 ? 'default' : 'white') as 'default' | 'white';

  return (
    <>
      <JsonLd data={serviceSchema(service)} />
      <PageHero
        eyebrow="Kitchener-Waterloo · Bradford · Toronto & GTA"
        title={service.h1}
        intro={service.intro}
        photo={heroPhoto}
        breadcrumbs={[
          { name: 'Services', path: '/services' },
          { name: service.name, path: `/services/${service.slug}` },
        ]}
        secondaryCta={project ? { label: 'See before & after', href: '#before-after' } : undefined}
      />

      <Section tone="white">
        <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr] lg:gap-16">
          <div>
            <h2 className="text-[1.75rem] sm:text-3xl">What’s included</h2>
            <CheckList items={service.included} columns={2} className="mt-8" />
            {service.sections.map((sec) => (
              <div key={sec.heading} className="mt-10 sm:mt-14">
                <h2 className="text-2xl sm:text-3xl">{sec.heading}</h2>
                {sec.paragraphs.map((p) => (
                  <p key={p.slice(0, 32)} className="mt-4 text-base leading-relaxed text-ink-600 sm:text-lg">
                    {p}
                  </p>
                ))}
                {sec.options && (
                  <ul className="mt-6 grid gap-4 sm:grid-cols-3">
                    {sec.options.map((o) => (
                      <li key={o.name} className="rounded-[var(--radius-card)] bg-white p-5 shadow-[var(--shadow-card)] ring-1 ring-ink-200/70">
                        <h3 className="font-display text-lg text-ink-950">{o.name}</h3>
                        <p className="mt-1 text-sm font-semibold text-gold-700">{o.bestFor}</p>
                        <p className="mt-3 text-ink-600">{o.text}</p>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          <aside className="lg:sticky lg:top-36 lg:self-start">
            <div className="rounded-[var(--radius-card)] bg-ink-950 p-8 text-ink-300">
              <h2 className="text-2xl text-white">Free {service.name.toLowerCase()} estimate</h2>
              <p className="mt-3">We’ll visit, measure and send a written, itemized quote — no obligation.</p>
              <div className="mt-6 grid gap-3">
                <ButtonLink href="#contact">Request an estimate</ButtonLink>
                <ButtonLink href={site.phone.href} variant="outlineLight">
                  Call {site.phone.display}
                </ButtonLink>
              </div>
            </div>
            <div className="mt-6 rounded-[var(--radius-card)] border border-ink-200 p-8">
              <h2 className="font-sans text-sm font-semibold uppercase tracking-[0.16em] text-gold-700">Available in</h2>
              <ul className="mt-4 space-y-3">
                {areas.map((a) => (
                  <li key={a.slug}>
                    <Link href={areaHref(a.slug)} className="group flex items-center justify-between gap-3 font-medium text-ink-900 hover:text-gold-700">
                      <span className="flex items-center gap-2">
                        <LuMapPin className="size-4 text-gold-600" aria-hidden="true" />
                        {service.name} in {a.name}
                      </span>
                      <LuArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </Section>

      {project && <FeaturedProject project={project} serviceSlug={service.slug} tone={nextTone()} />}
      {gallery.length > 0 && <PhotoGrid photos={gallery} title={`More ${service.name.toLowerCase()} projects`} tone={nextTone()} />}
      <FaqSection faqs={service.faqs} title={`${service.name} FAQs`} tone={nextTone()} />
      <ServiceCards services={getServices(service.related)} eyebrow="Related services" title="You might also need" tone={nextTone()} />
      <ReviewsSection tone={nextTone()} />
      <ContactSection title={`Get a free ${service.name.toLowerCase()} estimate`} defaultService={service.name} tone={nextTone()} />
    </>
  );
}
