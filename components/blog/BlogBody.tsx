import Image from 'next/image';
import Link from 'next/link';
import { LuArrowRight, LuCheck } from 'react-icons/lu';
import { articleSections, headingId, splitHeading } from '@/components/blog/headings';
import RichText from '@/components/blog/RichText';
import type { BlogBlock } from '@/content/blog';
import { cn } from '@/lib/utils';

/** Renders an article's content blocks in the editorial blog style. */
export default function BlogBody({ blocks }: { blocks: BlogBlock[] }) {
  const sections = articleSections(blocks);
  return (
    <div className="text-[1.0625rem] leading-8 text-ink-700">
      {blocks.map((b, i) => {
        switch (b.type) {
          case 'h2': {
            const { num, title } = splitHeading(b.text);
            return (
              <header key={i} id={headingId(b.text)} className="mt-20 scroll-mt-28 border-t border-ink-200 pt-10 first:mt-0">
                {num && <p className="font-display text-sm tracking-[0.2em] text-gold-600">{num}</p>}
                <h2 className="mt-2 text-[1.85rem] leading-[1.15] tracking-tight text-ink-950 sm:text-[2.35rem]">{title}</h2>
              </header>
            );
          }
          case 'p':
            return (
              <p key={i} className="mt-5">
                <RichText text={b.text} />
              </p>
            );
          case 'note':
            return (
              <aside key={i} className="mt-8 border-l-2 border-gold-500 pl-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-700">{b.label}</p>
                <p className="mt-1.5 text-ink-800">
                  <RichText text={b.text} />
                </p>
              </aside>
            );
          case 'list':
            return (
              <ul key={i} className="mt-6 space-y-3">
                {b.items.map((item) => (
                  <li key={item.slice(0, 40)} className="flex gap-3">
                    <LuCheck className="mt-2 size-4 shrink-0 text-gold-600" aria-hidden="true" />
                    <span>
                      <RichText text={item} />
                    </span>
                  </li>
                ))}
              </ul>
            );
          case 'takeaways':
            return (
              <section key={i} aria-label={b.title ?? 'Key takeaways'} className="rounded-3xl bg-white p-7 ring-1 ring-ink-200/80 sm:p-10">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-700">{b.title ?? 'Key takeaways'}</p>
                <ol className="mt-6 grid gap-x-10 gap-y-6 sm:grid-cols-2">
                  {b.items.map((item, n) => (
                    <li key={item.slice(0, 40)} className="flex gap-4">
                      <span className="font-display text-2xl leading-none text-gold-500 tabular-nums">{String(n + 1).padStart(2, '0')}</span>
                      <span className="text-[0.975rem] leading-7 text-ink-600 [&_strong]:block [&_strong]:text-base [&_strong]:text-ink-950">
                        <RichText text={item} />
                      </span>
                    </li>
                  ))}
                </ol>
                {sections.length > 0 && (
                  <nav aria-label="In this guide" className="mt-8 border-t border-ink-100 pt-6 lg:hidden">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-500">In this guide</p>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {sections.map((s) => (
                        <li key={s.id}>
                          <a href={`#${s.id}`} className="inline-flex rounded-full bg-ink-50 px-3 py-1 text-sm text-ink-700 hover:text-gold-700">
                            {s.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </nav>
                )}
              </section>
            );
          case 'cards': {
            const cols = b.columns ?? 3;
            return (
              <ul
                key={i}
                className={cn('mt-10 grid gap-x-6 gap-y-10', cols === 3 ? 'sm:grid-cols-3' : 'sm:grid-cols-2', cols === 4 && 'lg:grid-cols-4')}
              >
                {b.items.map((c) => (
                  <li key={c.title} className="flex flex-col">
                    {c.image ? (
                      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-[#f6f3ec]">
                        <Image
                          src={c.image.src}
                          alt={c.image.alt}
                          fill
                          sizes="(min-width: 1024px) 240px, (min-width: 640px) 33vw, 100vw"
                          className="object-cover"
                          style={c.image.position ? { objectPosition: c.image.position } : undefined}
                          unoptimized={c.image.src.endsWith('.svg')}
                        />
                        {c.tag && (
                          <span className="absolute left-3 top-3 rounded-full bg-white/95 px-2.5 py-0.5 text-xs font-semibold text-ink-900 shadow-sm">{c.tag}</span>
                        )}
                      </div>
                    ) : (
                      c.tag && <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-700">{c.tag}</p>
                    )}
                    <h3 className={cn('font-display text-[1.3rem] leading-snug text-ink-950', c.image ? 'mt-4' : 'mt-1.5')}>{c.title}</h3>
                    <p className="mt-2 text-[0.95rem] leading-7 text-ink-600">
                      <RichText text={c.text} />
                    </p>
                    {c.suits && c.suits.length > 0 && (
                      <p className="mt-3 border-t border-ink-200 pt-3 text-sm leading-6 text-ink-800">
                        <span className="mr-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-gold-700">Suits</span>
                        {c.suits.join(' · ')}
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            );
          }
          case 'tiers':
            return (
              <div key={i} className="mt-8 grid gap-5 md:grid-cols-3">
                {b.items.map((t) => (
                  <div key={t.name} className="flex flex-col rounded-2xl bg-white p-6 ring-1 ring-ink-200/80">
                    <h3 className="font-display text-xl text-ink-950">{t.name}</h3>
                    <p className="mt-2 text-2xl font-bold text-gold-700">{t.range}</p>
                    <p className="mt-2 text-sm text-ink-500">{t.bestFor}</p>
                    <ul className="mt-4 space-y-2 border-t border-ink-100 pt-4 text-base">
                      {t.includes.map((inc) => (
                        <li key={inc} className="flex gap-2">
                          <LuCheck className="mt-1.5 size-4 shrink-0 text-gold-600" aria-hidden="true" />
                          {inc}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            );
          case 'table':
            return (
              <figure key={i} className="mt-8">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[520px] border-collapse text-left text-[0.95rem] leading-6">
                    <thead>
                      <tr className="border-b-2 border-ink-900">
                        {b.head.map((h, hi) => (
                          <th key={hi} scope="col" className="py-3 pr-5 text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {b.rows.map((row) => (
                        <tr key={row[0]} className="border-b border-ink-200">
                          {row.map((cell, ci) => {
                            const blank = b.blank && ci === row.length - 1;
                            return (
                              <td
                                key={ci}
                                className={cn('py-3.5 pr-5 align-top', ci === 0 ? 'font-medium text-ink-950' : 'text-ink-600', blank && 'min-w-40 align-bottom')}
                              >
                                {blank ? <span className="block h-6 border-b border-dashed border-ink-300" aria-hidden="true" /> : <RichText text={cell} />}
                              </td>
                            );
                          })}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {b.note && (
                  <figcaption className="mt-3 text-sm leading-6 text-ink-500">
                    <RichText text={b.note} />
                  </figcaption>
                )}
              </figure>
            );
          case 'figure':
            return (
              <figure key={i} className={cn('mt-10', b.height > b.width && 'mx-auto max-w-md')}>
                <div className={cn('overflow-hidden rounded-2xl', b.variant === 'diagram' ? 'bg-white p-3 ring-1 ring-ink-200/80 sm:p-6' : 'bg-ink-100')}>
                  <Image
                    src={b.src}
                    alt={b.alt}
                    width={b.width}
                    height={b.height}
                    sizes="(min-width: 768px) 720px, 100vw"
                    className="h-auto w-full"
                    unoptimized={b.src.endsWith('.svg')}
                  />
                </div>
                {b.caption && (
                  <figcaption className="mt-3 text-sm leading-6 text-ink-500">
                    <RichText text={b.caption} />
                  </figcaption>
                )}
              </figure>
            );
          case 'gallery':
            return (
              <div key={i} className="mt-8 grid gap-6 sm:grid-cols-2">
                {b.items.map((g) => (
                  <figure key={g.src}>
                    <div className="overflow-hidden rounded-2xl bg-ink-100">
                      <Image src={g.src} alt={g.alt} width={g.width} height={g.height} sizes="(min-width: 768px) 360px, 100vw" className="h-auto w-full" />
                    </div>
                    {g.caption && (
                      <figcaption className="mt-3 text-sm leading-6 text-ink-500">
                        <RichText text={g.caption} />
                      </figcaption>
                    )}
                  </figure>
                ))}
              </div>
            );
          case 'steps':
            return (
              <ol key={i} className={cn('mt-10 grid gap-x-6 gap-y-10 sm:grid-cols-2', b.portrait && 'lg:grid-cols-3')}>
                {b.items.map((st, si) => (
                  <li key={st.title}>
                    <div className="overflow-hidden rounded-2xl bg-ink-100">
                      <Image
                        src={st.src}
                        alt={st.alt}
                        width={b.portrait ? 1200 : 1600}
                        height={b.portrait ? 1600 : 1200}
                        sizes="(min-width: 1024px) 240px, (min-width: 640px) 50vw, 100vw"
                        className={cn('h-auto w-full object-cover', b.portrait ? 'aspect-[3/4]' : 'aspect-[4/3]')}
                      />
                    </div>
                    <p className="mt-4 font-display text-sm tracking-[0.2em] text-gold-600">{String(si + 1).padStart(2, '0')}</p>
                    <h3 className="mt-1 font-display text-lg text-ink-950">{st.title}</h3>
                    <p className="mt-1 text-[0.95rem] leading-7 text-ink-600">{st.text}</p>
                  </li>
                ))}
              </ol>
            );
          case 'recommend':
            return (
              <aside key={i} className="mt-8 border-l-2 border-gold-500 pl-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-700">{b.label ?? 'Our recommendation'}</p>
                <p className="mt-1.5 text-ink-800">
                  <RichText text={b.text} />
                </p>
              </aside>
            );
          case 'callout':
            return (
              <aside key={i} className="mt-12 rounded-3xl bg-ink-950 p-8 text-ink-300 sm:p-10">
                <p className="font-display text-2xl text-white sm:text-3xl">{b.title}</p>
                <p className="mt-3 max-w-xl leading-7">{b.text}</p>
                {b.href && (
                  <Link
                    href={b.href}
                    className="mt-6 inline-flex items-center gap-2 rounded-full bg-gold-500 px-5 py-2.5 text-sm font-semibold text-ink-950 transition-colors hover:bg-gold-400"
                  >
                    {b.linkLabel ?? 'Learn more'} <LuArrowRight className="size-4" aria-hidden="true" />
                  </Link>
                )}
              </aside>
            );
        }
      })}
    </div>
  );
}
