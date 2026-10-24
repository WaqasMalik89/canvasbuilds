import { LuClock, LuMail, LuMapPin, LuPhone } from 'react-icons/lu';
import ContactForm from '@/components/features/ContactForm';
import Section from '@/components/ui/Section';
import { services } from '@/content/services';
import { getOffice, officeAddress, officeMapsUrl, offices as allOffices, site } from '@/content/site';
import type { Office } from '@/content/types';

interface Props {
  title?: string;
  intro?: string;
  defaultService?: string;
  defaultLocation?: string;
  /** Show only one office (e.g. on a location page). */
  officeId?: Office['id'];
  /** Render the title as the page's h1 (contact page). */
  asPageTitle?: boolean;
  tone?: 'default' | 'white';
}

export default function ContactSection({
  title = 'Get your free estimate',
  intro = 'Tell us a little about your project. We’ll reply within one business day to book a free site visit.',
  defaultService,
  defaultLocation,
  officeId,
  asPageTitle,
  tone = 'white',
}: Props) {
  const office = officeId ? getOffice(officeId) : undefined;
  const officeList = office ? [office] : allOffices;
  const Title = asPageTitle ? 'h1' : 'h2';

  return (
    <Section id="contact" tone={tone}>
      <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-gold-700">Contact</p>
          <Title className="text-[1.75rem] leading-tight sm:text-4xl">{title}</Title>
          <p className="mt-4 text-base leading-relaxed text-ink-600 sm:text-lg">{intro}</p>

          <ul className="mt-8 space-y-5">
            <li className="flex gap-4">
              <LuPhone className="mt-1 size-5 text-gold-600" aria-hidden="true" />
              <div>
                <a href={site.phone.href} className="text-lg font-semibold text-ink-950 hover:text-gold-700">
                  {site.phone.display}
                </a>
                <p className="text-sm text-ink-500">
                  or <a href={site.altPhone.href} className="hover:text-gold-700">{site.altPhone.display}</a>
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <LuMail className="mt-1 size-5 text-gold-600" aria-hidden="true" />
              <a href={`mailto:${site.email}`} className="text-ink-800 hover:text-gold-700">
                {site.email}
              </a>
            </li>
            <li className="flex gap-4">
              <LuClock className="mt-1 size-5 text-gold-600" aria-hidden="true" />
              <span className="text-ink-800">{site.hours.label}</span>
            </li>
            {officeList.map((o) => (
              <li key={o.id} className="flex gap-4">
                <LuMapPin className="mt-1 size-5 text-gold-600" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-ink-900">{o.label}</p>
                  <address className="not-italic text-ink-600">{officeAddress(o)}</address>
                  <a href={officeMapsUrl(o)} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-gold-700 hover:underline">
                    Directions &amp; Google reviews<span className="sr-only"> for {o.label}</span>
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div
          className={
            tone === 'white'
              ? 'rounded-[1.5rem] bg-ink-50 p-6 ring-1 ring-ink-200/70 sm:p-10'
              : 'rounded-[1.5rem] bg-white p-6 shadow-[var(--shadow-card)] sm:p-10'
          }
        >
          <ContactForm serviceOptions={services.map((s) => s.name)} defaultService={defaultService} defaultLocation={defaultLocation} />
        </div>
      </div>
    </Section>
  );
}
