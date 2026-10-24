import AreaCards from '@/components/sections/AreaCards';
import ContactSection from '@/components/sections/ContactSection';
import PageHero from '@/components/sections/PageHero';
import ProcessSteps from '@/components/sections/ProcessSteps';
import ServiceCards from '@/components/sections/ServiceCards';
import { buildMetadata } from '@/lib/seo/metadata';

export const metadata = buildMetadata({
  title: 'Renovation Services — Kitchens, Bathrooms, Basements & More',
  description:
    'Home renovation services in Kitchener-Waterloo, Bradford, Toronto and the GTA: kitchens, bathrooms, basements and legal suites, load-bearing wall removal, flooring and painting.',
  path: '/services',
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our services"
        title="Renovation services, managed by one team"
        intro={[
          'From a single bathroom to a whole-home remodel, we handle design, permits, licensed trades and finishing as one project — in Kitchener-Waterloo, Bradford, Toronto and the GTA.',
        ]}
        breadcrumbs={[{ name: 'Services', path: '/services' }]}
        secondaryCta={{ label: 'View projects', href: '/projects' }}
      />
      <ServiceCards eyebrow="Choose a service" title="What can we help you build?" />
      <ProcessSteps />
      <AreaCards />
      <ContactSection />
    </>
  );
}
