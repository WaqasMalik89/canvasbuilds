import { LuPhone } from 'react-icons/lu';
import { ButtonLink } from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import { site } from '@/content/site';

export default function CtaBanner({
  title = 'Ready to start your renovation?',
  text = 'Book a free site visit and get a written, itemized estimate.',
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="bg-ink-50 py-12 sm:py-16">
      <Container>
        <div className="relative overflow-hidden rounded-[1.5rem] bg-ink-950 px-6 py-10 sm:px-14 sm:py-16">
          <div aria-hidden="true" className="absolute -right-24 -top-24 size-80 rounded-full bg-gold-500/20 blur-3xl" />
          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-[1.75rem] text-white sm:text-4xl">{title}</h2>
              <p className="mt-3 text-lg text-ink-300">{text}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ButtonLink href="/contact" size="lg">
                Get a free estimate
              </ButtonLink>
              <ButtonLink href={site.phone.href} variant="outlineLight" size="lg">
                <LuPhone className="size-4" aria-hidden="true" /> {site.phone.display}
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
