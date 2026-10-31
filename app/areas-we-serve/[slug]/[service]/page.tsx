import Link from 'next/link';
import { notFound } from 'next/navigation';
import { LuArrowRight, LuArrowUpRight, LuMapPin } from 'react-icons/lu';
import RichText from '@/components/blog/RichText';
import JsonLd from '@/components/seo/JsonLd';
import ContactSection from '@/components/sections/ContactSection';
import FaqSection from '@/components/sections/FaqSection';
import FeaturedProject from '@/components/sections/FeaturedProject';
import PageHero from '@/components/sections/PageHero';
import ReviewsSection from '@/components/sections/ReviewsSection';
import { ButtonLink } from '@/components/ui/Button';
import CheckList from '@/components/ui/CheckList';
import Section from '@/components/ui/Section';
import SectionHeading from '@/components/ui/SectionHeading';
import { areaHref, getArea } from '@/content/areas';
import { getPost, postHref, postsForArea } from '@/content/blog';
import { getLocalServicePage, localServiceHref, localServicePages } from '@/content/local-services';
import { getFeaturedProject } from '@/content/projects';
import { getService, serviceHref } from '@/content/services';
import { getOffice, officeAddress, officeMapsUrl, site } from '@/content/site';
import { buildMetadata } from '@/lib/seo/metadata';
import { localServiceSchema, videoSchema } from '@/lib/seo/schema';

type Props = { params: Promise<{ slug: string; service: string }> };

export const dynamicParams = false;
export const revalidate = 86400;

export function generateStaticParams() {
  return localServicePages.map((p) => ({ slug: p.area, service: p.service }));
}

export async function generateMetadata({ params }: Props) {
  const { slug, service } = await params;
  const page = getLocalServicePage(slug, service);
  if (!page) return {};
  return buildMetadata({ ...page.seo, path: localServiceHref(page.area, page.service), image: page.heroPhoto.src, absoluteTitle: true });
}

export default async function LocalServicePage({ params }: Props) {
  const { slug, service: serviceSlug } = await params;
  const page = getLocalServicePage(slug, serviceSlug);
  const area = getArea(slug);
  const service = getService(serviceSlug);
  if (!page || !area || !service) notFound();

  const path = localServiceHref(page.area, page.service);
  const office = area.officeId ? getOffice(area.officeId) : undefined;
  const project = getFeaturedProject(page.featuredProjectId);
  // Alternate section backgrounds (the highlights bar above is white).
  let toneIndex = 0;
  const nextTone = () => (toneIndex++ % 2 === 0 ? 'default' : 'white') as 'default' | 'white';
  const moreProjects = (page.moreProjectIds ?? []).map((id) => getFeaturedProject(id)).filter((p): p is NonNullable<typeof p> => !!p);
  const priceGuide = page.prices ? getPost(page.prices.guideSlug) : undefined;
  const guides = postsForArea(area.slug).filter((g) => g.relatedServices.includes(page.service));

  return (
    <>
      <JsonLd data={localServiceSchema({ name: page.h1, serviceType: service.name, description: page.seo.description, path, cities: area.cities })} />
      {[project, ...moreProjects]
        .flatMap((p) => (p ? [p.video, ...(p.videos ?? [])] : []))
        .filter((v): v is NonNullable<typeof v> & { uploadDate: string } => !!v?.uploadDate)
        .map((v) => (
          <JsonLd key={v.src} data={videoSchema(v, path)} />
        ))}
      <PageHero
        eyebrow={page.eyebrow}
        title={page.h1}
        intro={page.intro}
        photo={page.heroPhoto}
        breadcrumbs={[
          { name: 'Areas we serve', path: '/areas-we-serve' },
          { name: area.name, path: areaHref(area.slug) },
          { name: service.name, path },
        ]}
        secondaryCta={project ? { label: 'See before & after', href: '#before-after' } : undefined}
      />

      <section className="border-b border-ink-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-px bg-ink-200 sm:grid-cols-3">
          {page.highlights.map((h) => (
            <div key={h.title} className="bg-white px-8 py-8">
              <h2 className="font-sans text-base font-semibold text-ink-950">{h.title}</h2>
              <p className="mt-1.5 text-ink-600">{h.text}</p>
            </div>
          ))}
        </div>
      </section>

      {page.prices && (
        <Section tone={nextTone()}>
          <SectionHeading eyebrow="2026 prices" title={page.prices.heading} intro={page.prices.intro} />
          <ul className="grid gap-5 md:grid-cols-3">
            {page.prices.items.map((t) => (
              <li key={t.name} className="rounded-[var(--radius-card)] bg-white p-6 shadow-[var(--shadow-card)] ring-1 ring-ink-200/70 sm:p-7">
                <h3 className="font-display text-xl text-ink-950">{t.name}</h3>
                <p className="mt-2 text-2xl font-bold text-gold-700">{t.range}</p>
                <p className="mt-3 text-ink-600">{t.text}</p>
              </li>
            ))}
          </ul>
          {priceGuide && (
            <Link href={postHref(priceGuide.slug)} className="group mt-8 inline-flex items-center gap-2 font-semibold text-gold-700 hover:text-gold-800">
              Read the full {area.name} {service.name.toLowerCase()} cost guide
              <LuArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          )}
        </Section>
      )}

      {project && <FeaturedProject project={project} serviceSlug={page.service} eyebrow={`Recent project in ${area.name}`} tone={nextTone()} />}
      {moreProjects.map((p) => (
        <FeaturedProject key={p.id} id={p.id} project={p} serviceSlug={page.service} eyebrow={`Another ${area.name} project`} tone={nextTone()} />
      ))}

      <Section tone={nextTone()}>
        <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr] lg:gap-16">
          <div>
            <h2 className="text-[1.75rem] sm:text-3xl">{page.popular.heading}</h2>
            <CheckList items={page.popular.items} columns={2} className="mt-8" />
            {page.sections.map((sec) => (
              <div key={sec.heading} className="mt-10 sm:mt-14">
                <h2 className="text-2xl sm:text-3xl">{sec.heading}</h2>
                {sec.paragraphs.map((p) => (
                  <p key={p.slice(0, 32)} className="mt-4 text-base leading-relaxed text-ink-600 sm:text-lg">
                    <RichText text={p} />
                  </p>
                ))}
              </div>
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

          <aside className="space-y-6 lg:sticky lg:top-36 lg:self-start">
            <div className="rounded-[var(--radius-card)] bg-ink-950 p-8 text-ink-300">
              <h2 className="text-2xl text-white">Free {service.name.toLowerCase()} estimate in {area.name}</h2>
              <p className="mt-3">We’ll visit, measure and send a written, itemized quote — no obligation.</p>
              <div className="mt-6 grid gap-3">
                <ButtonLink href="#contact">Request an estimate</ButtonLink>
                <ButtonLink href={site.phone.href} variant="outlineLight">
                  Call {site.phone.display}
                </ButtonLink>
              </div>
            </div>
            {office && (
              <div className="rounded-[var(--radius-card)] border border-ink-200 bg-white p-8">
                <h2 className="font-sans text-sm font-semibold uppercase tracking-[0.16em] text-gold-700">Our {office.label} office</h2>
                <p className="mt-3 flex items-start gap-2 text-lg text-ink-900">
                  <LuMapPin className="mt-1 size-5 shrink-0 text-gold-600" aria-hidden="true" />
                  {officeAddress(office)}
                </p>
                <a href={officeMapsUrl(office)} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block font-semibold text-gold-700 hover:text-gold-800">
                  Directions &amp; Google reviews →
                </a>
              </div>
            )}
            <div className="rounded-[var(--radius-card)] bg-gold-50 p-8 ring-1 ring-gold-200">
              <h2 className="font-sans text-sm font-semibold uppercase tracking-[0.16em] text-gold-800">Keep exploring</h2>
              <ul className="mt-4 space-y-3">
                {guides.map((g) => (
                  <li key={g.slug}>
                    <Link href={postHref(g.slug)} className="font-semibold text-ink-900 underline-offset-4 hover:text-gold-700 hover:underline">
                      {g.title}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href={serviceHref(service.slug)} className="font-semibold text-ink-900 underline-offset-4 hover:text-gold-700 hover:underline">
                    {service.name}: options, process and more projects
                  </Link>
                </li>
                <li>
                  <Link href={areaHref(area.slug)} className="font-semibold text-ink-900 underline-offset-4 hover:text-gold-700 hover:underline">
                    All renovation services in {area.name}
                  </Link>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </Section>

      <ReviewsSection title={`Reviews from ${area.name} homeowners`} officeIds={office ? [office.id] : undefined} testimonials={page.testimonials} tone={nextTone()} />
      <FaqSection faqs={page.faqs} title={`${service.name} in ${area.name}: FAQs`} tone={nextTone()} />
      <ContactSection
        title={`Get a free ${service.name.toLowerCase()} estimate in ${area.name}`}
        defaultService={service.name}
        defaultLocation={area.cities[0]}
        officeId={office?.id}
        tone={nextTone()}
      />
    </>
  );
}
