import { LuPlus } from 'react-icons/lu';
import JsonLd from '@/components/seo/JsonLd';
import Section from '@/components/ui/Section';
import SectionHeading from '@/components/ui/SectionHeading';
import type { Faq } from '@/content/types';
import { faqSchema } from '@/lib/seo/schema';

/** FAQ accordion + FAQPage structured data. Use once per page. */
export default function FaqSection({ faqs, title = 'Frequently asked questions', tone = 'white' }: { faqs: Faq[]; title?: string; tone?: 'default' | 'white' }) {
  if (!faqs.length) return null;
  return (
    <Section tone={tone}>
      <JsonLd data={faqSchema(faqs)} />
      <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
        <SectionHeading eyebrow="FAQ" title={title} intro="Can’t find your answer? Call or send us a message — we’re happy to help." spacing="none" />
        <div className="divide-y divide-ink-200 border-y border-ink-200">
          {faqs.map((f) => (
            <details key={f.q} className="group py-5 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-lg font-semibold text-ink-900">
                {f.q}
                <LuPlus className="mt-1 size-5 shrink-0 text-gold-600 transition-transform group-open:rotate-45" aria-hidden="true" />
              </summary>
              <p className="mt-3 leading-relaxed text-ink-600">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </Section>
  );
}
