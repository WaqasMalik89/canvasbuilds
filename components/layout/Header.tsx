'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { LuChevronDown, LuMail, LuMapPin, LuMenu, LuPhone, LuX } from 'react-icons/lu';
import Container from '@/components/ui/Container';
import Logo from '@/components/ui/Logo';
import { ButtonLink } from '@/components/ui/Button';
import type { NavItem } from '@/content/navigation';
import { site } from '@/content/site';
import { cn } from '@/lib/utils';

function isActive(pathname: string, href: string) {
  return href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(`${href}/`);
}

// The menu is passed in from the (server) layout so the full content files
// aren't bundled into browser JavaScript.
export default function Header({ nav }: { nav: NavItem[] }) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  // Close menus after navigating.
  useEffect(() => {
    setMobileOpen(false);
    if (document.activeElement instanceof HTMLElement) document.activeElement.blur();
  }, [pathname]);

  // Lock page scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50">
      {/* Utility bar */}
      <div className="hidden bg-ink-950 text-xs text-ink-300 md:block">
        <Container className="flex h-9 items-center justify-between">
          <p className="flex items-center gap-2">
            <LuMapPin className="size-3.5 text-gold-400" aria-hidden="true" />
            Serving Kitchener-Waterloo, Bradford, Toronto &amp; the GTA
          </p>
          <div className="flex items-center gap-6">
            <a href={`mailto:${site.email}`} className="flex items-center gap-2 hover:text-white">
              <LuMail className="size-3.5" aria-hidden="true" />
              {site.email}
            </a>
            <a href={site.phone.href} className="flex items-center gap-2 font-semibold text-white hover:text-gold-300">
              <LuPhone className="size-3.5" aria-hidden="true" />
              {site.phone.display}
            </a>
          </div>
        </Container>
      </div>

      {/* Main bar */}
      <div className="border-b border-ink-200/70 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/85">
        <Container className="flex h-20 items-center justify-between gap-6">
          <Logo />

          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {nav.map((item) => (
                <DesktopNavItem key={item.href} item={item} active={isActive(pathname, item.href)} />
              ))}
            </ul>
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a href={site.phone.href} className="text-sm font-semibold text-ink-900 hover:text-gold-700">
              {site.phone.display}
            </a>
            <ButtonLink href="/contact">Free Estimate</ButtonLink>
          </div>

          <button
            type="button"
            className="-mr-2 inline-flex size-11 items-center justify-center rounded-full text-ink-900 hover:bg-ink-100 lg:hidden"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            onClick={() => setMobileOpen((o) => !o)}
          >
            {mobileOpen ? <LuX className="size-6" /> : <LuMenu className="size-6" />}
          </button>
        </Container>
      </div>

      <MobileMenu nav={nav} open={mobileOpen} pathname={pathname} />
    </header>
  );
}

function DesktopNavItem({ item, active }: { item: NavItem; active: boolean }) {
  const linkClass = cn(
    'flex items-center gap-1 rounded-full px-4 py-2 text-[0.95rem] font-medium transition-colors',
    active ? 'text-gold-700' : 'text-ink-800 hover:text-gold-700',
  );

  if (!item.children) {
    return (
      <li>
        <Link href={item.href} className={linkClass} aria-current={active ? 'page' : undefined}>
          {item.label}
        </Link>
      </li>
    );
  }

  const wide = item.children.length > 5;
  return (
    // Dropdown opens on hover and on keyboard focus (focus-within).
    <li className="group relative">
      <Link href={item.href} className={linkClass} aria-haspopup="true">
        {item.label}
        <LuChevronDown className="size-4 transition-transform group-hover:rotate-180" aria-hidden="true" />
      </Link>
      <div className="invisible absolute left-1/2 top-full -translate-x-1/2 pt-3 opacity-0 transition duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
        <ul
          className={cn(
            'grid gap-1 rounded-2xl bg-white p-3 shadow-[var(--shadow-card-hover)] ring-1 ring-ink-200/70',
            wide ? 'w-[640px] grid-cols-2' : 'w-80',
          )}
        >
          {item.children.map((child) => (
            <li key={child.href}>
              <Link href={child.href} className="block rounded-xl px-4 py-3 transition-colors hover:bg-ink-50">
                <span className="block font-semibold text-ink-900">{child.label}</span>
                {child.description && <span className="mt-0.5 line-clamp-2 block text-sm text-ink-500">{child.description}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}

function MobileMenu({ nav, open, pathname }: { nav: NavItem[]; open: boolean; pathname: string }) {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <div
      id="mobile-menu"
      className={cn(
        'fixed inset-x-0 bottom-0 top-20 overflow-y-auto bg-white transition-opacity duration-200 md:top-29 lg:hidden',
        open ? 'visible opacity-100' : 'invisible opacity-0',
      )}
    >
      <Container className="py-6">
        <nav aria-label="Mobile">
          <ul className="divide-y divide-ink-100">
            {nav.map((item) => (
              <li key={item.href} className="py-1">
                {item.children ? (
                  <>
                    <button
                      type="button"
                      className="flex w-full items-center justify-between py-3 text-left text-lg font-semibold text-ink-900"
                      aria-expanded={expanded === item.href}
                      onClick={() => setExpanded((e) => (e === item.href ? null : item.href))}
                    >
                      {item.label}
                      <LuChevronDown className={cn('size-5 transition-transform', expanded === item.href && 'rotate-180')} aria-hidden="true" />
                    </button>
                    {expanded === item.href && (
                      <ul className="mb-3 space-y-1 border-l-2 border-gold-300 pl-4">
                        <li>
                          <Link href={item.href} className="block py-2 font-medium text-gold-700">
                            View all {item.label.toLowerCase()}
                          </Link>
                        </li>
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              className={cn('block py-2', isActive(pathname, child.href) ? 'text-gold-700' : 'text-ink-700')}
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className={cn('block py-3 text-lg font-semibold', isActive(pathname, item.href) ? 'text-gold-700' : 'text-ink-900')}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-8 grid gap-3">
          <ButtonLink href="/contact" size="lg">
            Get a Free Estimate
          </ButtonLink>
          <ButtonLink href={site.phone.href} variant="outline" size="lg">
            <LuPhone className="size-4" aria-hidden="true" /> Call {site.phone.display}
          </ButtonLink>
        </div>
      </Container>
    </div>
  );
}
