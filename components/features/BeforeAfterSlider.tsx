'use client';

// Drag-to-compare before/after slider. Both photos are real <Image>s in the
// HTML (indexable with alt text); the "after" photo is revealed with a
// clip-path. Works with mouse, touch and keyboard (arrow keys).

import Image from 'next/image';
import { useCallback, useRef, useState } from 'react';
import type { Photo } from '@/content/types';
import { cn } from '@/lib/utils';

interface Props {
  before: Photo;
  after: Photo;
  beforeLabel?: string;
  afterLabel?: string;
  className?: string;
}

export default function BeforeAfterSlider({ before, after, beforeLabel = 'Before', afterLabel = 'After', className }: Props) {
  const [pos, setPos] = useState(50);
  const frame = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);
  const portrait = before.portrait ?? after.portrait;

  const moveTo = useCallback((clientX: number) => {
    const rect = frame.current?.getBoundingClientRect();
    if (!rect) return;
    setPos(Math.min(100, Math.max(0, ((clientX - rect.left) / rect.width) * 100)));
  }, []);

  const tabs = [
    { label: beforeLabel, value: 100, active: pos > 95 },
    { label: 'Compare', value: 50, active: pos >= 5 && pos <= 95 },
    { label: afterLabel, value: 0, active: pos < 5 },
  ];

  return (
    <div className={cn('mx-auto w-full max-w-lg', className)}>
      <div
        ref={frame}
        className={cn(
          'relative w-full cursor-ew-resize touch-pan-y select-none overflow-hidden has-[input:focus-visible]:ring-4 has-[input:focus-visible]:ring-gold-300 rounded-[var(--radius-card)] bg-ink-200 shadow-[var(--shadow-card-hover)]',
          portrait ? 'aspect-[3/4]' : 'aspect-[4/3]',
        )}
        onPointerDown={(e) => {
          dragging.current = true;
          e.currentTarget.setPointerCapture(e.pointerId);
          moveTo(e.clientX);
        }}
        onPointerMove={(e) => dragging.current && moveTo(e.clientX)}
        onPointerUp={() => (dragging.current = false)}
        onPointerCancel={() => (dragging.current = false)}
      >
        <Image src={before.src} alt={before.alt} fill sizes="(max-width: 640px) calc(100vw - 2.5rem), 512px" className="pointer-events-none object-cover" draggable={false} />
        <div className="absolute inset-0" style={{ clipPath: `inset(0 0 0 ${pos}%)` }}>
          <Image src={after.src} alt={after.alt} fill sizes="(max-width: 640px) calc(100vw - 2.5rem), 512px" className="pointer-events-none object-cover" draggable={false} />
        </div>

        <span className="pointer-events-none absolute left-3 top-3 rounded-full bg-ink-950/70 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
          {beforeLabel}
        </span>
        <span className="pointer-events-none absolute right-3 top-3 rounded-full bg-gold-500 px-3 py-1 text-xs font-bold uppercase tracking-wider text-ink-950">
          {afterLabel}
        </span>

        <div className="pointer-events-none absolute inset-y-0 w-0.5 -translate-x-1/2 bg-white shadow-[0_0_10px_rgb(0_0_0/0.4)]" style={{ left: `${pos}%` }}>
          <span className="absolute left-1/2 top-1/2 flex size-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-sm font-bold text-ink-900 shadow-lg">
            ‹ ›
          </span>
        </div>

        {/* Invisible range input: keyboard + screen-reader control */}
        <input
          type="range"
          min={0}
          max={100}
          value={Math.round(pos)}
          onChange={(e) => setPos(Number(e.target.value))}
          aria-label="Drag to compare before and after"
          className="absolute inset-0 size-full cursor-ew-resize opacity-0"
        />
      </div>

      <div className="mt-4 flex justify-center gap-2" role="group" aria-label="Before and after view">
        {tabs.map((t) => (
          <button
            key={t.label}
            type="button"
            onClick={() => setPos(t.value)}
            aria-pressed={t.active}
            className={cn(
              'rounded-full border px-4 py-1.5 text-sm font-semibold transition-colors',
              t.active ? 'border-ink-950 bg-ink-950 text-white' : 'border-ink-300 bg-white text-ink-700 hover:border-ink-900',
            )}
          >
            {t.label}
          </button>
        ))}
      </div>
    </div>
  );
}
