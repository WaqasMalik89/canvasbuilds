import Link from 'next/link';
import { LuChevronRight } from 'react-icons/lu';
import JsonLd from '@/components/seo/JsonLd';
import { breadcrumbSchema } from '@/lib/seo/schema';
import { cn } from '@/lib/utils';

export interface Crumb {
  name: string;
  path: string;
}

/** Visible breadcrumb trail + matching BreadcrumbList structured data. */
export default function Breadcrumbs({ items, dark, className }: { items: Crumb[]; dark?: boolean; className?: string }) {
  const trail = [{ name: 'Home', path: '/' }, ...items];
  return (
    <>
      <JsonLd data={breadcrumbSchema(trail)} />
      <nav aria-label="Breadcrumb" className={cn('text-sm', className)}>
        <ol className={cn('flex flex-wrap items-center gap-1.5', dark ? 'text-ink-300' : 'text-ink-500')}>
          {trail.map((c, i) => {
            const last = i === trail.length - 1;
            return (
              <li key={c.path} className="flex items-center gap-1.5">
                {last ? (
                  <span aria-current="page" className={dark ? 'text-white' : 'text-ink-900'}>
                    {c.name}
                  </span>
                ) : (
                  <>
                    <Link href={c.path} className="hover:text-gold-500">
                      {c.name}
                    </Link>
                    <LuChevronRight className="size-3.5 opacity-60" aria-hidden="true" />
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
