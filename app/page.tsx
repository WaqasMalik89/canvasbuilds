import Image from 'next/image';
import { ButtonLink } from '@/components/ui/Button';
import Section from '@/components/ui/Section';
import AreaCards from '@/components/sections/AreaCards';
import ContactSection from '@/components/sections/ContactSection';
import FaqSection from '@/components/sections/FaqSection';
import FeaturedProject from '@/components/sections/FeaturedProject';
import HomeHero from '@/components/sections/HomeHero';
import ProcessSteps from '@/components/sections/ProcessSteps';
import ReviewsSection from '@/components/sections/ReviewsSection';
import ServiceCards from '@/components/sections/ServiceCards';
import StatsBar from '@/components/sections/StatsBar';
import { generalFaqs, homeContent } from '@/content/home';
import { getFeaturedProject } from '@/content/projects';
import { buildMetadata } from '@/lib/seo/metadata';

export const metadata = buildMetadata({ ...homeContent.seo, path: '/', absoluteTitle: true, image: homeContent.hero.image.src });

// Rebuild once a day so Google reviews stay fresh.
export const revalidate = 86400;

export default function HomePage() {
  const bathroom = getFeaturedProject('kitchener-waterloo-bathroom');
  const kitchen = getFeaturedProject('mississauga-home-renovation');
  const mediaWall = getFeaturedProject('kitchener-waterloo-media-wall');
  const { intro } = homeContent;

  return (
    <>
      <HomeHero />
      <StatsBar />

      <Section tone="white">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-gold-700">Why Canvas Builds</p>
            <h2 className="text-[1.75rem] leading-tight sm:text-4xl">{intro.title}</h2>
            {intro.paragraphs.map((p) => (
              <p key={p.slice(0, 32)} className="mt-4 text-base leading-relaxed text-ink-600 sm:mt-5 sm:text-lg">
                {p}
              </p>
            ))}
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/about" variant="dark">
                About us
              </ButtonLink>
              <ButtonLink href="/projects" variant="outline">
                View projects
              </ButtonLink>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-card)] shadow-[var(--shadow-card-hover)] sm:aspect-[16/10] lg:aspect-[4/5]">
            <Image
              src="/images/bathrooms/kitchener-waterloo-bathroom-finished.jpg"
              alt="Bathroom renovation with glass walk-in shower and floating vanity"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </Section>

      <ServiceCards
        tone="default"
        title="Renovation services"
        intro="From a single bathroom to a whole-home remodel, we manage design, permits, licensed trades and finishing as one project."
      />

      {bathroom && <FeaturedProject project={bathroom} tone="white" showSteps={false} moreHref="/projects" />}
      {kitchen && (
        <FeaturedProject id="kitchen" project={kitchen} tone="default" showSteps={false} moreHref="/services/kitchen-remodeling#before-after" moreLabel="See the full story" />
      )}
      {mediaWall && (
        <FeaturedProject id="media-wall" project={mediaWall} tone="white" showSteps={false} moreHref="/services/media-wall-installation" moreLabel="See the full build" />
      )}

      <AreaCards tone="default" />
      <ProcessSteps />
      <ReviewsSection />
      <FaqSection faqs={generalFaqs} />
      <ContactSection tone="default" />
    </>
  );
}
