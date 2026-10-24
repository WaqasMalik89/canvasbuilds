import Image from 'next/image';
import BeforeAfterSlider from '@/components/features/BeforeAfterSlider';
import { ButtonLink } from '@/components/ui/Button';
import CheckList from '@/components/ui/CheckList';
import Section from '@/components/ui/Section';
import type { FeaturedProject as Project, ServiceSlug } from '@/content/types';
import { cn } from '@/lib/utils';

interface Props {
  project: Project;
  eyebrow?: string;
  showSteps?: boolean;
  /** Link to more work, e.g. "/projects". */
  moreHref?: string;
  /** Text for the moreHref button. */
  moreLabel?: string;
  tone?: 'default' | 'white';
  /** Service page showing the project — hides steps tagged for other services. */
  serviceSlug?: ServiceSlug;
  /** Anchor id (default "before-after"); must be unique on the page. */
  id?: string;
}

/** Before/after case study: slider, summary, highlights and optional build steps. */
export default function FeaturedProject({ project, eyebrow = 'Featured project', showSteps = true, moreHref, moreLabel = 'See more projects', tone = 'default', id = 'before-after', serviceSlug }: Props) {
  const steps = (project.steps ?? []).filter((s) => !serviceSlug || !s.services || s.services.includes(serviceSlug));
  return (
    <Section id={id} tone={tone}>
      <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,480px)_1fr] lg:gap-16">
        <BeforeAfterSlider before={project.before} after={project.after} beforeLabel={project.beforeLabel} afterLabel={project.afterLabel} />
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-gold-700">{eyebrow}</p>
          <h2 className="text-[1.75rem] leading-tight sm:text-4xl">{project.title}</h2>
          {project.area && <p className="mt-3 font-medium text-ink-500">{project.area}</p>}
          {project.summary.map((p) => (
            <p key={p.slice(0, 32)} className="mt-4 text-base leading-relaxed text-ink-600 sm:text-lg">
              {p}
            </p>
          ))}
          <CheckList items={project.highlights} columns={2} className="mt-8" />
          {moreHref && (
            <ButtonLink href={moreHref} variant="outline" className="mt-8">
              {moreLabel}
            </ButtonLink>
          )}
        </div>
      </div>

      {showSteps && steps.length > 0 && (
        <div className="mt-20">
          <h3 className="text-2xl">{project.stepsTitle ?? 'How we built it'}</h3>
          <ol className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {steps.map((step, i) => (
              <li key={step.src} className="overflow-hidden rounded-[var(--radius-card)] bg-white shadow-[var(--shadow-card)]">
                <div className={cn('relative w-full', (project.stepsAspect ? project.stepsAspect === 'portrait' : step.portrait) ? 'aspect-[4/5]' : 'aspect-[4/3]')}>
                  <Image src={step.src} alt={step.alt} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover" />
                  <span className="absolute left-4 top-4 flex size-9 items-center justify-center rounded-full bg-gold-500 font-bold text-ink-950">
                    {i + 1}
                  </span>
                </div>
                <div className="p-5">
                  <h4 className="font-display text-lg text-ink-950">{step.title}</h4>
                  <p className="mt-1.5 text-ink-600">{step.caption}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      )}

      {showSteps && project.video && (
        <figure className={cn('mx-auto mt-16', project.video.portrait ? 'max-w-sm' : 'max-w-3xl')}>
          <h3 className="text-2xl">{project.video.title}</h3>
          <video
            className={cn(
              'mt-6 w-full rounded-[var(--radius-card)] bg-ink-950 object-cover shadow-[var(--shadow-card)]',
              project.video.portrait ? 'aspect-[9/16]' : 'aspect-video',
            )}
            src={project.video.src}
            poster={project.video.poster}
            controls
            muted
            playsInline
            preload="none"
          />
          <figcaption className="mt-3 text-ink-600">{project.video.caption}</figcaption>
        </figure>
      )}
    </Section>
  );
}
