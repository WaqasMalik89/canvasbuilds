import Image from 'next/image';
import { LuPhone } from 'react-icons/lu';
import Breadcrumbs, { type Crumb } from '@/components/ui/Breadcrumbs';
import { ButtonLink } from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import { site } from '@/content/site';
import type { Photo } from '@/content/types';
import { cn } from '@/lib/utils';

interface Props {
  title: string;
  eyebrow?: string;
  intro?: string[];
  breadcrumbs?: Crumb[];
  photo?: Photo;
  /** Extra call-to-action shown next to the estimate button. */
  secondaryCta?: { label: string; href: string };
  children?: React.ReactNode;
}

/** Dark heading band used at the top of every inner page. */
export default function PageHero({ title, eyebrow, intro = [], breadcrumbs, photo, secondaryCta, children }: Props) {
  return (
    <section className="relative overflow-hidden bg-ink-950 text-ink-200">
      <div aria-hidden="true" className="pointer-events-none absolute -right-40 -top-40 size-[520px] rounded-full bg-gold-500/10 blur-3xl" />
      <Container className={cn('relative grid items-center gap-10 py-10 sm:py-16 lg:gap-12 lg:py-20', photo && 'lg:grid-cols-[1.15fr_1fr]')}>
        <div>
          {breadcrumbs && <Breadcrumbs items={breadcrumbs} dark className="mb-6 sm:mb-8" />}
          {eyebrow && <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-gold-300 sm:mb-4 sm:text-sm">{eyebrow}</p>}
          <h1 className="text-[2.1rem] leading-[1.1] text-white sm:text-5xl">{title}</h1>
          {intro.map((p) => (
            <p key={p.slice(0, 32)} className="mt-4 max-w-2xl text-base leading-relaxed text-ink-300 sm:mt-5 sm:text-lg">
              {p}
            </p>
          ))}
          <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
            <ButtonLink href="/contact" size="lg">
              Get a free estimate
            </ButtonLink>
            {secondaryCta ? (
              <ButtonLink href={secondaryCta.href} variant="outlineLight" size="lg">
                {secondaryCta.label}
              </ButtonLink>
            ) : (
              <ButtonLink href={site.phone.href} variant="outlineLight" size="lg">
                <LuPhone className="size-4" aria-hidden="true" /> {site.phone.display}
              </ButtonLink>
            )}
          </div>
          {children}
        </div>
        {photo && (
          <div
            className={cn(
              'relative w-full overflow-hidden rounded-[var(--radius-card)] shadow-2xl ring-1 ring-white/10',
              photo.portrait ? 'mx-auto aspect-[4/5] max-w-sm sm:max-w-md' : 'aspect-[4/3]',
            )}
          >
            <Image src={photo.src} alt={photo.alt} fill priority sizes="(max-width: 1024px) 100vw, 45vw" className="object-cover" />
          </div>
        )}
      </Container>
    </section>
  );
}
