import Breadcrumbs from '@/components/ui/Breadcrumbs';
import Container from '@/components/ui/Container';
import { offices, officeAddress, site } from '@/content/site';
import { buildMetadata } from '@/lib/seo/metadata';

export const metadata = buildMetadata({
  title: 'Privacy Policy',
  description: 'How Canvas Builds Inc. collects, uses and protects the personal information you share with us.',
  path: '/privacy-policy',
});

const mainOffice = offices.find((o) => o.id === 'bradford') ?? offices[0];

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white py-16">
      <Container size="narrow">
        <Breadcrumbs items={[{ name: 'Privacy policy', path: '/privacy-policy' }]} className="mb-8" />
        <h1 className="text-4xl">Privacy Policy</h1>
        <p className="mt-3 text-ink-500">Last updated: March 2026</p>

        <div className="prose-content mt-8">
          <h2>1. Information we collect</h2>
          <p>
            We collect information you provide directly to us, such as your name, email address, phone number, project location and
            project details when you fill out our contact form or contact us by phone or email.
          </p>

          <h2>2. How we use your information</h2>
          <p>
            We use this information to respond to your inquiries, prepare estimates, provide our renovation services and communicate
            with you about your project.
          </p>

          <h2>3. Information sharing</h2>
          <p>
            We do not sell, trade or otherwise transfer your personal information to third parties without your consent, except as
            required by law.
          </p>

          <h2>4. Data retention</h2>
          <p>
            We keep your personal information only as long as necessary to fulfil the purposes described in this policy or as required
            by law.
          </p>

          <h2>5. Your rights</h2>
          <p>
            You can ask to access, correct or delete your personal information at any time by emailing{' '}
            <a href={`mailto:${site.email}`}>{site.email}</a>.
          </p>

          <h2>6. Contact us</h2>
          <p>
            {site.name}
            <br />
            {officeAddress(mainOffice)}
            <br />
            Email: <a href={`mailto:${site.email}`}>{site.email}</a>
            <br />
            Phone: <a href={site.phone.href}>{site.phone.display}</a>
          </p>
        </div>
      </Container>
    </div>
  );
}
