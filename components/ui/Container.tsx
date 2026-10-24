import { cn } from '@/lib/utils';

const widths = { default: 'max-w-7xl', narrow: 'max-w-3xl' };

/** Centers content and applies the standard page gutters. */
export default function Container({
  size = 'default',
  className,
  children,
}: {
  size?: keyof typeof widths;
  className?: string;
  children: React.ReactNode;
}) {
  return <div className={cn('mx-auto w-full px-5 sm:px-8', widths[size], className)}>{children}</div>;
}
