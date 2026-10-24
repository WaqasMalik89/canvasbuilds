import Link from 'next/link';
import { cn } from '@/lib/utils';

type Variant = 'primary' | 'dark' | 'outline' | 'outlineLight' | 'ghost';
type Size = 'md' | 'lg';

const variants: Record<Variant, string> = {
  primary: 'bg-gold-500 text-ink-950 hover:bg-gold-400 shadow-sm',
  dark: 'bg-ink-950 text-white hover:bg-ink-800',
  outline: 'border border-ink-300 text-ink-900 hover:border-ink-900 hover:bg-white',
  outlineLight: 'border border-white/40 text-white hover:border-white hover:bg-white/10',
  ghost: 'text-ink-900 hover:text-gold-700',
};

const sizes: Record<Size, string> = {
  md: 'h-11 px-5 text-sm',
  lg: 'h-13 px-7 text-base',
};

export function buttonClasses(variant: Variant = 'primary', size: Size = 'md', className?: string) {
  return cn(
    'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors duration-200 whitespace-nowrap',
    variants[variant],
    sizes[size],
    className,
  );
}

interface LinkProps {
  href: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
}

/** A link styled as a button. Uses next/link for internal paths. */
export function ButtonLink({ href, variant, size, className, children }: LinkProps) {
  const classes = buttonClasses(variant, size, className);
  const isInternal = href.startsWith('/') || href.startsWith('#');
  return isInternal ? (
    <Link href={href} className={classes}>
      {children}
    </Link>
  ) : (
    <a href={href} className={classes}>
      {children}
    </a>
  );
}
