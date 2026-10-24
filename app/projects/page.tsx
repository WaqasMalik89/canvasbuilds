import ProjectGallery from '@/components/features/ProjectGallery';
import CtaBanner from '@/components/sections/CtaBanner';
import FeaturedProject from '@/components/sections/FeaturedProject';
import PageHero from '@/components/sections/PageHero';
import Section from '@/components/ui/Section';
import SectionHeading from '@/components/ui/SectionHeading';
import { featuredProjects, gallery, projectCategories } from '@/content/projects';
import { buildMetadata } from '@/lib/seo/metadata';

export const metadata = buildMetadata({
  title: 'Renovation Projects — Before & After Photos',
  description:
    'Before-and-after photos of kitchen, bathroom, basement and outdoor projects by Canvas Builds in Kitchener-Waterloo, Bradford, Toronto and the GTA.',
  path: '/projects',
  image: featuredProjects[0]?.after.src,
});

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our work"
        title="Renovation projects & before-and-afters"
        intro={['Real homes, real results. Drag the sliders to compare before and after, or browse the gallery by room.']}
        breadcrumbs={[{ name: 'Projects', path: '/projects' }]}
        secondaryCta={{ label: 'Browse gallery', href: '#gallery' }}
      />

      {featuredProjects.map((p, i) => (
        <FeaturedProject key={p.id} id={i === 0 ? 'before-after' : p.id} project={p} tone={i % 2 === 0 ? 'white' : 'default'} eyebrow="Before & after" />
      ))}

      <Section id="gallery" tone={featuredProjects.length % 2 === 0 ? 'white' : 'default'}>
        <SectionHeading eyebrow="Gallery" title="Project gallery" intro="Kitchens, bathrooms, basements, interiors and outdoor work." />
        <ProjectGallery photos={gallery} categories={projectCategories} />
      </Section>

      <CtaBanner title="Like what you see?" text="Tell us about your project and we’ll book a free site visit." />
    </>
  );
}
