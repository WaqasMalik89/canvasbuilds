'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

/** Sticky "On this page" menu that highlights the section you're reading. */
export default function TocNav({ sections }: { sections: { id: string; num?: string; title: string }[] }) {
  const [active, setActive] = useState(sections[0]?.id);

  useEffect(() => {
    const update = () => {
      let current = sections[0]?.id;
      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (el && el.getBoundingClientRect().top < 160) current = s.id;
      }
      setActive(current);
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, [sections]);

  return (
    <nav aria-label="On this page">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-500">On this page</p>
      <ol className="mt-4 space-y-0.5 border-l border-ink-200">
        {sections.map((s) => (
          <li key={s.id}>
            <a
              href={`#${s.id}`}
              className={cn(
                '-ml-px flex gap-3 border-l-2 py-1.5 pl-4 text-sm leading-snug transition-colors',
                active === s.id ? 'border-gold-500 font-medium text-ink-950' : 'border-transparent text-ink-500 hover:text-ink-900',
              )}
            >
              {s.num && <span className={cn('tabular-nums', active === s.id ? 'text-gold-700' : 'text-ink-400')}>{s.num}</span>}
              {s.title}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
