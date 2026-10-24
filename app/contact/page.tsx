import Breadcrumbs from '@/components/ui/Breadcrumbs';
import Container from '@/components/ui/Container';
import ContactSection from '@/components/sections/ContactSection';
import { site } from '@/content/site';
import { buildMetadata } from '@/lib/seo/metadata';

export const metadata = buildMetadata({
  title: 'Contact Us — Free Renovation Estimate',
  description: `Get a free renovation estimate from Canvas Builds. Call ${site.phone.display} or send a message. Offices in Waterloo, Woodbridge and Bradford.`,
  path: '/contact',
});

export default function ContactPage() {
  return (
    <>
      <div className="bg-white pt-8">
        <Container>
          <Breadcrumbs items={[{ name: 'Contact', path: '/contact' }]} />
        </Container>
      </div>
      <ContactSection asPageTitle title="Get your free renovation estimate" />
    </>
  );
}
