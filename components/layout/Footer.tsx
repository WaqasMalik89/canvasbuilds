import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa6';
import { LuMail, LuPhone } from 'react-icons/lu';
import Container from '@/components/ui/Container';
import Logo from '@/components/ui/Logo';
import { footerNav } from '@/content/navigation';
import { officeMapsUrl, offices, site } from '@/content/site';

const socials = [
  { label: 'Instagram', href: site.social.instagram, Icon: FaInstagram },
  { label: 'Facebook', href: site.social.facebook, Icon: FaFacebookF },
  { label: 'TikTok', href: site.social.tiktok, Icon: FaTiktok },
];

function LinkColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h2 className="font-sans text-sm font-semibold uppercase tracking-[0.16em] text-gold-300">{title}</h2>
      <ul className="mt-4 space-y-2.5">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="text-ink-300 transition-colors hover:text-white">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-ink-950 text-ink-300">
      <Container className="grid gap-10 py-12 sm:py-16 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-4">
          <Logo dark />
          <p className="mt-5 max-w-sm leading-relaxed">{site.description}</p>
          <div className="mt-6 space-y-2">
            <a href={site.phone.href} className="flex items-center gap-3 font-semibold text-white hover:text-gold-300">
              <LuPhone className="size-4 text-gold-400" aria-hidden="true" /> {site.phone.display}
            </a>
            <a href={site.altPhone.href} className="flex items-center gap-3 hover:text-white">
              <LuPhone className="size-4 text-gold-400" aria-hidden="true" /> {site.altPhone.display}
            </a>
            <a href={`mailto:${site.email}`} className="flex items-center gap-3 hover:text-white">
              <LuMail className="size-4 text-gold-400" aria-hidden="true" /> {site.email}
            </a>
          </div>
          <ul className="mt-6 flex gap-3">
            {socials.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex size-10 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:border-gold-400 hover:text-gold-300"
                >
                  <Icon className="size-4" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-10 lg:col-span-5">
          <LinkColumn title="Services" links={footerNav.services} />
          <LinkColumn title="Service areas" links={footerNav.areas} />
          <LinkColumn title="Company" links={footerNav.company} />
        </div>

        <div className="lg:col-span-3">
          <h2 className="font-sans text-sm font-semibold uppercase tracking-[0.16em] text-gold-300">Offices</h2>
          <ul className="mt-4 space-y-5">
            {offices.map((o) => (
              <li key={o.id}>
                <address className="not-italic leading-relaxed">
                  <span className="font-semibold text-white">{o.label}</span>
                  <br />
                  {o.streetAddress}
                  <br />
                  {o.city}, {o.region} {o.postalCode}
                </address>
                <a href={officeMapsUrl(o)} target="_blank" rel="noopener noreferrer" className="text-sm text-gold-300 hover:text-gold-200">
                  Directions &amp; reviews<span className="sr-only"> for {o.label}</span> →
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm">Hours: {site.hours.label}</p>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-2 py-6 pb-24 text-sm sm:flex-row sm:justify-between lg:pb-6">
          <p>
            © {new Date().getFullYear()} {site.name} All rights reserved.
          </p>
          <Link href="/privacy-policy" className="hover:text-white">
            Privacy policy
          </Link>
        </Container>
      </div>
    </footer>
  );
}
