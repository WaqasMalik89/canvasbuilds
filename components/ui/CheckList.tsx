import { LuCheck } from 'react-icons/lu';
import { cn } from '@/lib/utils';

export default function CheckList({ items, columns = 1, className }: { items: string[]; columns?: 1 | 2; className?: string }) {
  return (
    <ul className={cn('grid gap-3', columns === 2 && 'sm:grid-cols-2', className)}>
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-gold-100 text-gold-700">
            <LuCheck className="size-3.5" aria-hidden="true" />
          </span>
          <span className="text-ink-700">{item}</span>
        </li>
      ))}
    </ul>
  );
}
