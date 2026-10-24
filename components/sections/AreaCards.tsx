import Image from 'next/image';
import Link from 'next/link';
import { LuArrowRight, LuMapPin } from 'react-icons/lu';
import Section from '@/components/ui/Section';
import SectionHeading from '@/components/ui/SectionHeading';
import { areaHref, areas as allAreas } from '@/content/areas';
import type { ServiceArea } from '@/content/types';

interface Props {
  areas?: ServiceArea[];
  title?: string;
  intro?: string;
  tone?: 'default' | 'white';
}

export default function AreaCards({
  areas = allAreas,
  title = 'Where we work',
  intro = 'Local crews serving three regions — with the permits, neighbourhoods and housing stock we know well.',
  tone = 'default',
}: Props) {
  return (
    <Section tone={tone}>
      <SectionHeading eyebrow="Service areas" title={title} intro={intro} />
      <ul className="grid gap-6 md:grid-cols-3">
        {areas.map((a) => (
          <li key={a.slug}>
            <Link href={areaHref(a.slug)} className="group block h-full overflow-hidden rounded-[var(--radius-card)] bg-white shadow-[var(--shadow-card)] transition hover:shadow-[var(--shadow-card-hover)]">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image src={a.heroPhoto.src} alt={a.heroPhoto.alt} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-ink-950/10 to-transparent" />
                <h3 className="absolute bottom-4 left-5 text-2xl text-white">{a.name}</h3>
              </div>
              <div className="p-6">
                <p className="flex items-start gap-2 text-ink-600">
                  <LuMapPin className="mt-1 size-4 shrink-0 text-gold-600" aria-hidden="true" />
                  {a.cities.slice(0, 5).join(' · ')}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-700">
                  Renovations in {a.name}
                  <LuArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  );
}
