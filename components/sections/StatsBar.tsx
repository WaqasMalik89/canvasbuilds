import Container from '@/components/ui/Container';
import { site } from '@/content/site';

/** Proof points from content/site.ts → stats. Hidden when the list is empty. */
export default function StatsBar() {
  if (!site.stats.length) return null;
  return (
    <section className="border-b border-ink-200 bg-white">
      <Container className="grid grid-cols-2 gap-6 py-10 md:grid-cols-4">
        {site.stats.map((s) => (
          <div key={s.label} className="text-center">
            <p className="font-display text-4xl text-ink-950">{s.value}</p>
            <p className="mt-1 text-sm text-ink-500">{s.label}</p>
          </div>
        ))}
      </Container>
    </section>
  );
}
