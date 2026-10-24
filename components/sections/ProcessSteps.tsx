import Section from '@/components/ui/Section';
import SectionHeading from '@/components/ui/SectionHeading';
import { processSteps } from '@/content/home';

export default function ProcessSteps() {
  return (
    <Section tone="dark">
      <SectionHeading eyebrow="How it works" title="A clear process, start to finish" dark />
      <ol className="grid gap-px overflow-hidden rounded-[var(--radius-card)] bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
        {processSteps.map((step, i) => (
          <li key={step.title} className="flex gap-5 bg-ink-950 p-6 sm:block sm:p-8">
            <span className="font-display text-3xl text-gold-400 sm:text-5xl">{String(i + 1).padStart(2, '0')}</span>
            <div>
              <h3 className="text-lg text-white sm:mt-4 sm:text-xl">{step.title}</h3>
              <p className="mt-1 leading-relaxed text-ink-400 sm:mt-2">{step.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
