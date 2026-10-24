import Link from 'next/link';
import ServiceAreaMapLoader from '@/components/features/ServiceAreaMapLoader';
import AreaCards from '@/components/sections/AreaCards';
import ContactSection from '@/components/sections/ContactSection';
import PageHero from '@/components/sections/PageHero';
import Section from '@/components/ui/Section';
import SectionHeading from '@/components/ui/SectionHeading';
import { areaHref, areas } from '@/content/areas';
import { buildMetadata } from '@/lib/seo/metadata';

export const metadata = buildMetadata({
  title: 'Areas We Serve — Kitchener-Waterloo, Bradford, Toronto & GTA',
  description:
    'Canvas Builds renovates homes in Kitchener, Waterloo, Cambridge, Guelph, Bradford, Newmarket, Aurora, Innisfil, Toronto, Vaughan, Mississauga, Brampton and Markham.',
  path: '/areas-we-serve',
});

export default function AreasPage() {
  return (
    <>
      <PageHero
        eyebrow="Service areas"
        title="Renovation contractors across Kitchener-Waterloo, Bradford & the GTA"
        intro={[
          'With offices in Waterloo, Woodbridge and Bradford, our crews serve homeowners across Waterloo Region, Bradford and South Simcoe, and the Greater Toronto Area.',
        ]}
        breadcrumbs={[{ name: 'Areas we serve', path: '/areas-we-serve' }]}
      />
      <AreaCards title="Choose your area" intro="Each area page covers local permits, neighbourhoods and projects." tone="white" />

      <Section>
        <SectionHeading eyebrow="Map" title="Cities we serve" />
        <ServiceAreaMapLoader />
        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {areas.map((a) => (
            <div key={a.slug}>
              <h3 className="text-xl">
                <Link href={areaHref(a.slug)} className="hover:text-gold-700">
                  {a.name}
                </Link>
              </h3>
              <p className="mt-1 text-sm text-ink-500">{a.region}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {a.cities.map((c) => (
                  <li key={c} className="rounded-full bg-white px-3 py-1 text-sm text-ink-700 ring-1 ring-ink-200">
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <ContactSection intro="Not sure if we cover your street? Send us a message or call — we’ll let you know right away." />
    </>
  );
}
