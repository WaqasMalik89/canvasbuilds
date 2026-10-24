import Image from 'next/image';
import Link from 'next/link';
import { site } from '@/content/site';
import { cn } from '@/lib/utils';

export default function Logo({ dark = false, className }: { dark?: boolean; className?: string }) {
  return (
    <Link href="/" className={cn('flex items-center gap-3', className)}>
      <Image src={site.logo} alt="" width={44} height={44} className="size-10 sm:size-11" />
      <span className="leading-none">
        <span className={cn('block font-display text-xl font-semibold tracking-wide', dark ? 'text-white' : 'text-ink-950')}>
          Canvas Builds
        </span>
        <span className={cn('mt-1 block whitespace-nowrap text-[0.6rem] font-semibold uppercase tracking-[0.14em] sm:text-[0.65rem] sm:tracking-[0.22em]', dark ? 'text-gold-300' : 'text-gold-700')}>
          Renovation Contractors
        </span>
      </span>
    </Link>
  );
}
