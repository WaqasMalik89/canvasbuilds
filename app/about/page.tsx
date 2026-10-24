import Image from 'next/image';
import { LuClipboardCheck, LuFileCheck, LuHandshake, LuShieldCheck } from 'react-icons/lu';
import AreaCards from '@/components/sections/AreaCards';
import CtaBanner from '@/components/sections/CtaBanner';
import PageHero from '@/components/sections/PageHero';
import ProcessSteps from '@/components/sections/ProcessSteps';
import ReviewsSection from '@/components/sections/ReviewsSection';
import Section from '@/components/ui/Section';
import SectionHeading from '@/components/ui/SectionHeading';
import { site } from '@/content/site';
import { buildMetadata } from '@/lib/seo/metadata';

export const metadata = buildMetadata({
  title: 'About Us — Renovation Contractors in Waterloo, Woodbridge & Bradford',
  description:
    'Canvas Builds Inc. is a home renovation contractor with offices in Waterloo, Woodbridge and Bradford, serving Kitchener-Waterloo, Bradford, Toronto and the GTA.',
  path: '/about',
});

export const revalidate = 86400;

const values = [
  { Icon: LuClipboardCheck, title: 'Clear, written quotes', text: 'Every estimate is itemized, so you know exactly what is included before work starts.' },
  { Icon: LuFileCheck, title: 'Permits done properly', text: 'We prepare drawings, apply for permits and book inspections — no shortcuts.' },
  { Icon: LuShieldCheck, title: 'Built to code', text: 'Structural, plumbing and electrical work follows the Ontario Building Code, using licensed trades.' },
  { Icon: LuHandshake, title: 'One point of contact', text: 'One team manages your whole project, with regular updates from start to finish.' },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title={`About ${site.name}`}
        intro={[
          'We are a home renovation and remodeling contractor with offices in Waterloo, Woodbridge and Bradford. Our crews renovate kitchens, bathrooms and basements, build legal secondary suites, remove load-bearing walls and finish homes with new flooring and paint.',
        ]}
        breadcrumbs={[{ name: 'About', path: '/about' }]}
        secondaryCta={{ label: 'View projects', href: '/projects' }}
      />

      <Section tone="white">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="relative mx-auto aspect-square w-full max-w-md">
            <Image src={site.logo} alt={`${site.name} logo — ${site.tagline}`} fill sizes="(max-width: 1024px) 80vw, 28rem" className="object-contain" />
          </div>
          <div>
            <SectionHeading eyebrow="Our approach" title={`“${site.tagline}”`} spacing="tight" />
            <p className="text-lg leading-relaxed text-ink-600">
              Our goal is simple: a renovation that is built properly, finished on schedule and easy to live with for years. Every
              project starts with a site visit and a written, itemized estimate, and every project is managed by one team — so you
              always know who to call.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink-600 sm:mt-5 sm:text-lg">
              We work on detached homes, semis and townhouses — from older homes that need structural updates to new builds with
              unfinished basements ready for a family room or a legal rental suite.
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="What we stand for" title="How we work" align="center" />
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map(({ Icon, title, text }) => (
            <li key={title} className="rounded-[var(--radius-card)] bg-white p-7 shadow-[var(--shadow-card)]">
              <Icon className="size-8 text-gold-600" aria-hidden="true" />
              <h3 className="mt-4 text-xl">{title}</h3>
              <p className="mt-2 leading-relaxed text-ink-600">{text}</p>
            </li>
          ))}
        </ul>
      </Section>

      <ProcessSteps />
      <AreaCards tone="white" />
      <ReviewsSection />
      <CtaBanner />
    </>
  );
}
