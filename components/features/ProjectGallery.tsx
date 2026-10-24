'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { LuX } from 'react-icons/lu';
import type { ProjectCategory, ProjectPhoto } from '@/content/types';
import { cn } from '@/lib/utils';

interface Props {
  photos: ProjectPhoto[];
  categories: { id: ProjectCategory; label: string }[];
}

/** Filterable photo grid with a simple lightbox. */
export default function ProjectGallery({ photos, categories }: Props) {
  const [filter, setFilter] = useState<ProjectCategory | 'all'>('all');
  const [open, setOpen] = useState<ProjectPhoto | null>(null);
  const visible = filter === 'all' ? photos : photos.filter((p) => p.category === filter);
  const used = categories.filter((c) => photos.some((p) => p.category === c.id));

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(null);
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  const chip = (active: boolean) =>
    cn(
      'rounded-full border px-4 py-2 text-sm font-semibold transition-colors',
      active ? 'border-ink-950 bg-ink-950 text-white' : 'border-ink-300 bg-white text-ink-700 hover:border-ink-900',
    );

  return (
    <>
      <div className="mb-8 flex flex-wrap gap-2" role="group" aria-label="Filter projects">
        <button type="button" className={chip(filter === 'all')} aria-pressed={filter === 'all'} onClick={() => setFilter('all')}>
          All projects
        </button>
        {used.map((c) => (
          <button key={c.id} type="button" className={chip(filter === c.id)} aria-pressed={filter === c.id} onClick={() => setFilter(c.id)}>
            {c.label}
          </button>
        ))}
      </div>

      <ul className="columns-1 gap-5 sm:columns-2 lg:columns-3">
        {visible.map((p) => (
          <li key={p.src} className="mb-5 break-inside-avoid">
            <button
              type="button"
              onClick={() => setOpen(p)}
              className="group relative block w-full overflow-hidden rounded-[var(--radius-card)] bg-ink-200"
              aria-label={`Enlarge: ${p.alt}`}
            >
              <div className={cn('relative w-full', p.portrait ? 'aspect-[3/4]' : 'aspect-[4/3]')}>
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink-950/80 to-transparent p-4 text-left text-sm text-white opacity-0 transition-opacity group-hover:opacity-100">
                {p.alt}
              </span>
            </button>
          </li>
        ))}
      </ul>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={open.alt}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink-950/90 p-4"
          onClick={() => setOpen(null)}
        >
          <button
            type="button"
            className="absolute right-4 top-4 flex size-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
            aria-label="Close"
            onClick={() => setOpen(null)}
          >
            <LuX className="size-6" />
          </button>
          <figure className="relative h-[80vh] w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <Image src={open.src} alt={open.alt} fill sizes="100vw" className="object-contain" />
            <figcaption className="absolute -bottom-8 inset-x-0 text-center text-sm text-ink-300">{open.alt}</figcaption>
          </figure>
        </div>
      )}
    </>
  );
}
