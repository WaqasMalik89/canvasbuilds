import Link from 'next/link';
import { LuArrowRight } from 'react-icons/lu';
import Section from '@/components/ui/Section';
import SectionHeading from '@/components/ui/SectionHeading';
import ServiceIcon from '@/components/ui/ServiceIcon';
import { serviceHref, services as allServices } from '@/content/services';
import type { Service } from '@/content/types';

interface Props {
  services?: Service[];
  eyebrow?: string;
  title?: string;
  intro?: string;
  /** Adds "in <area>" to each card's link text for local pages. */
  areaName?: string;
  tone?: 'default' | 'white';
  id?: string;
}

export default function ServiceCards({
  services = allServices,
  eyebrow = 'What we do',
  title = 'Renovation services',
  intro,
  areaName,
  tone = 'white',
  id = 'services',
}: Props) {
  return (
    <Section id={id} tone={tone}>
      <SectionHeading eyebrow={eyebrow} title={title} intro={intro} />
      <ul className="grid gap-3 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4">
        {services.map((s) => (
          <li key={s.slug}>
            <Link
              href={serviceHref(s.slug)}
              className="group flex h-full gap-4 rounded-[var(--radius-card)] border border-ink-200/80 bg-white p-5 shadow-[var(--shadow-card)] transition hover:-translate-y-1 hover:border-gold-300 hover:shadow-[var(--shadow-card-hover)] sm:flex-col sm:gap-0 sm:p-7"
            >
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-ink-950 sm:size-12 text-gold-400 transition-colors group-hover:bg-gold-500 group-hover:text-ink-950">
                <ServiceIcon name={s.icon} className="size-6" />
              </span>
              <span className="flex flex-1 flex-col">
              <h3 className="text-lg sm:mt-5 sm:text-xl">{areaName ? `${s.name} in ${areaName}` : s.name}</h3>
              <p className="mt-1.5 line-clamp-3 flex-1 text-[0.95rem] leading-relaxed text-ink-600 sm:mt-2 sm:line-clamp-none sm:text-base">{s.summary}</p>
              <span className="mt-3 inline-flex sm:mt-5 items-center gap-1.5 text-sm font-semibold text-gold-700">
                Learn more <LuArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  );
}
