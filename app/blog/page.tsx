import BlogCards from '@/components/blog/BlogCards';
import CtaBanner from '@/components/sections/CtaBanner';
import PageHero from '@/components/sections/PageHero';
import Section from '@/components/ui/Section';
import { getPosts } from '@/content/blog';
import { buildMetadata } from '@/lib/seo/metadata';

export const metadata = buildMetadata({
  title: 'Renovation Blog: Kitchen, Bathroom & Media Wall Design Guides',
  description:
    'Design and selection guides from Canvas Builds: the options, measurements and our recommendation for every decision in your kitchen, bathroom or media wall — shown on real projects.',
  path: '/blog',
});

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Design & selection guides"
        intro={['The options, the measurements and our recommendation for every decision in your kitchen, bathroom or media wall — shown on real projects, from the team that builds them.']}
        breadcrumbs={[{ name: 'Blog', path: '/blog' }]}
      />
      <Section tone="white">
        <BlogCards posts={getPosts()} />
      </Section>
      <CtaBanner title="Ready to plan your project?" text="Book a free site visit and get a written, itemized estimate." />
    </>
  );
}
