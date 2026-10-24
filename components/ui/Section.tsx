import { cn } from '@/lib/utils';
import Container from './Container';

type Tone = 'default' | 'white' | 'dark';

const tones: Record<Tone, string> = {
  default: 'bg-ink-50',
  white: 'bg-white',
  dark: 'bg-ink-950 text-ink-100',
};

const spacings = { default: 'py-12 sm:py-20 lg:py-24', compact: 'py-10 sm:py-14' };

interface Props {
  id?: string;
  tone?: Tone;
  spacing?: keyof typeof spacings;
  className?: string;
  containerClassName?: string;
  children: React.ReactNode;
}

/** A full-width page section with consistent vertical spacing. */
export default function Section({ id, tone = 'default', spacing = 'default', className, containerClassName, children }: Props) {
  return (
    <section id={id} className={cn(spacings[spacing], tones[tone], className)}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
