import Image from 'next/image';
import Section from '@/components/ui/Section';
import SectionHeading from '@/components/ui/SectionHeading';
import type { Photo } from '@/content/types';
import { cn } from '@/lib/utils';

export default function PhotoGrid({ photos, title, tone = 'white' }: { photos: Photo[]; title: string; tone?: 'default' | 'white' }) {
  if (!photos.length) return null;
  return (
    <Section tone={tone}>
      <SectionHeading eyebrow="Our work" title={title} />
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {photos.map((p) => (
          <li key={p.src}>
            <figure>
              <div className={cn('relative w-full overflow-hidden rounded-[var(--radius-card)] bg-ink-200', p.portrait ? 'aspect-[3/4]' : 'aspect-[4/3]')}>
                <Image src={p.src} alt={p.alt} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover" />
                {p.badge && (
                  <span className="absolute left-3 top-3 rounded-full bg-ink-950/75 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                    {p.badge}
                  </span>
                )}
              </div>
              <figcaption className="mt-2 text-sm text-ink-500">{p.alt}</figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </Section>
  );
}
