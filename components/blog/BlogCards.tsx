import Image from 'next/image';
import Link from 'next/link';
import { LuArrowRight } from 'react-icons/lu';
import type { BlogPost } from '@/content/blog';
import { postHref } from '@/content/blog';

export function formatDate(d: string) {
  return new Date(`${d}T12:00:00`).toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric' });
}

/** Grid of article cards. */
export default function BlogCards({ posts }: { posts: BlogPost[] }) {
  return (
    <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((p) => (
        <li key={p.slug}>
          <Link href={postHref(p.slug)} className="group flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] bg-white shadow-[var(--shadow-card)] transition-shadow hover:shadow-[var(--shadow-card-hover)]">
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-ink-200">
              <Image src={p.hero.src} alt={p.hero.alt} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <p className="text-sm text-ink-500">
                {formatDate(p.updated)} · {p.readingMinutes} min read
              </p>
              <h3 className="mt-2 font-display text-xl leading-snug text-ink-950 group-hover:text-gold-700">{p.title}</h3>
              <p className="mt-3 flex-1 text-ink-600">{p.excerpt}</p>
              <span className="mt-5 inline-flex items-center gap-2 font-semibold text-gold-700">
                Read the guide <LuArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </span>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
