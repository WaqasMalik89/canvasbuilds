import { cn } from '@/lib/utils';

interface Props {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: 'left' | 'center';
  /** Use "h1" only for the main page heading. */
  as?: 'h1' | 'h2';
  dark?: boolean;
  /** Space below the heading block. */
  spacing?: 'default' | 'tight' | 'none';
  className?: string;
}

const spacings = { default: 'mb-8 sm:mb-12 lg:mb-14', tight: 'mb-6', none: 'mb-0' };

export default function SectionHeading({ eyebrow, title, intro, align = 'left', as: Tag = 'h2', dark, spacing = 'default', className }: Props) {
  return (
    <div className={cn('max-w-3xl', spacings[spacing], align === 'center' && 'mx-auto text-center', className)}>
      {eyebrow && (
        <p className={cn('mb-3 text-sm font-semibold uppercase tracking-[0.18em]', dark ? 'text-gold-300' : 'text-gold-700')}>
          {eyebrow}
        </p>
      )}
      <Tag className={cn('text-[1.75rem] leading-tight sm:text-4xl', dark && 'text-white')}>{title}</Tag>
      {intro && <p className={cn('mt-3 text-base leading-relaxed sm:mt-4 sm:text-lg', dark ? 'text-ink-300' : 'text-ink-600')}>{intro}</p>}
    </div>
  );
}
