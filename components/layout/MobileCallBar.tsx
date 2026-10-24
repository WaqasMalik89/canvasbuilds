import Link from 'next/link';
import { LuCalendarCheck, LuPhone } from 'react-icons/lu';
import { site } from '@/content/site';

/** Sticky call / estimate buttons on phones (hidden on large screens). */
export default function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-ink-200 bg-white/95 p-3 backdrop-blur lg:hidden">
      <a
        href={site.phone.href}
        className="flex h-12 items-center justify-center gap-2 rounded-full border border-ink-300 font-semibold text-ink-900"
      >
        <LuPhone className="size-4" aria-hidden="true" /> Call us
      </a>
      <Link href="/contact" className="flex h-12 items-center justify-center gap-2 rounded-full bg-gold-500 font-semibold text-ink-950">
        <LuCalendarCheck className="size-4" aria-hidden="true" /> Free estimate
      </Link>
    </div>
  );
}
