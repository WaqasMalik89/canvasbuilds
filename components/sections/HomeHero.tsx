import Image from 'next/image';
import { LuCheck, LuPhone } from 'react-icons/lu';
import { ButtonLink } from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import { homeContent } from '@/content/home';
import { site } from '@/content/site';

export default function HomeHero() {
  const { hero, trust } = homeContent;
  return (
    <section className="relative isolate overflow-hidden bg-ink-950">
      <Image src={hero.image.src} alt={hero.image.alt} fill priority fetchPriority="high" quality={70} sizes="100vw" className="-z-10 object-cover" />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-r from-ink-950/95 via-ink-950/75 to-ink-950/30" />
      <Container className="py-16 sm:py-28 lg:py-40">
        <div className="max-w-2xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-gold-300 sm:mb-5 sm:text-sm">{hero.eyebrow}</p>
          <h1 className="text-[2.15rem] leading-[1.08] text-white sm:text-6xl">{hero.title}</h1>
          <p className="mt-5 text-base leading-relaxed text-ink-200 sm:mt-6 sm:text-xl">{hero.text}</p>
          <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap">
            <ButtonLink href="/contact" size="lg">
              Get a free estimate
            </ButtonLink>
            <ButtonLink href={site.phone.href} variant="outlineLight" size="lg">
              <LuPhone className="size-4" aria-hidden="true" /> {site.phone.display}
            </ButtonLink>
          </div>
          <ul className="mt-10 grid gap-2.5 text-sm text-ink-200 sm:mt-12 sm:grid-cols-2 sm:gap-3 sm:text-base">
            {trust.map((t) => (
              <li key={t} className="flex items-center gap-2.5">
                <LuCheck className="size-5 text-gold-400" aria-hidden="true" />
                {t}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
