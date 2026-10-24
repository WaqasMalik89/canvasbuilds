import { LuStar } from 'react-icons/lu';
import { cn } from '@/lib/utils';

export default function StarRating({ rating, className }: { rating: number; className?: string }) {
  const full = Math.round(rating);
  return (
    <span className={cn('inline-flex gap-0.5', className)} role="img" aria-label={`${rating.toFixed(1)} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <LuStar
          key={i}
          aria-hidden="true"
          className={cn('size-4', i <= full ? 'fill-gold-400 text-gold-400' : 'fill-ink-200 text-ink-200')}
        />
      ))}
    </span>
  );
}
