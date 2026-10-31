import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { LuArrowRight } from 'react-icons/lu';
import BlogBody from '@/components/blog/BlogBody';
import BlogCards, { formatDate } from '@/components/blog/BlogCards';
import { articleSections } from '@/components/blog/headings';
import TocNav from '@/components/blog/TocNav';
import CtaBanner from '@/components/sections/CtaBanner';
import FaqSection from '@/components/sections/FaqSection';
import JsonLd from '@/components/seo/JsonLd';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { ButtonLink } from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import { getPost, getPosts, postHref } from '@/content/blog';
import { getService, serviceHref } from '@/content/services';
import { site } from '@/content/site';
import { buildMetadata } from '@/lib/seo/metadata';
import { articleSchema } from '@/lib/seo/schema';
import { cn } from '@/lib/utils';

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return getPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return buildMetadata({ ...post.seo, path: postHref(post.slug), image: post.hero.src, absoluteTitle: false });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = post.relatedServices.map((s) => getService(s)).filter((s): s is NonNullable<typeof s> => !!s);
  const others = getPosts().filter((p) => p.slug !== post.slug).slice(0, 3);
  const sections = articleSections(post.blocks);
  const showToc = !!post.toc && sections.length > 2;
  const strip = post.heroGallery && post.heroGallery.length > 1 ? post.heroGallery : undefined;

  return (
    <>
      <JsonLd
        data={articleSchema({
          title: post.title,
          description: post.seo.description,
          path: postHref(post.slug),
          image: post.hero.src,
          published: post.published,
          updated: post.updated,
        })}
      />

      {/* Editorial header */}
      <header className="bg-white pt-8 sm:pt-12">
        <Container>
          <Breadcrumbs
            items={[
              { name: 'Blog', path: '/blog' },
              { name: post.title, path: postHref(post.slug) },
            ]}
          />
          <div className="mx-auto mt-10 max-w-3xl text-center sm:mt-14">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-700">{post.eyebrow ?? 'Design & selection guide'}</p>
            <h1 className="mt-5 text-[2.5rem] leading-[1.05] tracking-tight text-ink-950 sm:text-6xl">{post.title}</h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-ink-600 sm:text-xl">{post.intro[0]}</p>
            <p className="mt-6 text-sm text-ink-500">
              By {site.shortName} · Updated {formatDate(post.updated)} · {post.readingMinutes} min read
            </p>
          </div>

          {post.showHero !== false && (
          <div className="mt-10 pb-2 sm:mt-14">
            {strip ? (
              <div className="grid grid-cols-3 gap-2 sm:gap-4">
                {strip.slice(0, 3).map((ph, n) => (
                  <figure key={ph.src} className="relative overflow-hidden rounded-2xl bg-ink-100 sm:rounded-3xl">
                    <Image
                      src={ph.src}
                      alt={ph.alt}
                      width={1200}
                      height={1600}
                      priority={n === 0}
                      sizes="(min-width: 1280px) 400px, 33vw"
                      className="aspect-[3/4] h-auto w-full object-cover"
                    />
                    {ph.badge && (
                      <figcaption className="absolute bottom-3 left-3 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-ink-900 shadow-sm">
                        {ph.badge}
                      </figcaption>
                    )}
                  </figure>
                ))}
              </div>
            ) : (
              <div className="relative aspect-[16/9] overflow-hidden rounded-3xl bg-ink-100 sm:aspect-[21/9]">
                <Image src={post.hero.src} alt={post.hero.alt} fill priority sizes="(min-width: 1280px) 1216px, 100vw" className="object-cover" />
              </div>
            )}
          </div>
          )}
          {post.showHero === false && <div className="mt-12 border-b border-ink-200 sm:mt-16" />}
        </Container>
      </header>

      <article className="bg-white pb-20 pt-12 sm:pt-16">
        <Container>
          <div className={cn('mx-auto', showToc ? 'grid max-w-6xl gap-16 lg:grid-cols-[220px_minmax(0,1fr)]' : 'max-w-3xl')}>
            {showToc && (
              <aside className="hidden lg:block">
                <div className="sticky top-32">
                  <TocNav sections={sections} />
                  <div className="mt-10 rounded-2xl bg-ink-50 p-5">
                    <p className="font-display text-lg leading-snug text-ink-950">Planning a renovation?</p>
                    <p className="mt-2 text-sm leading-6 text-ink-600">Free site visit and a written, itemized quote.</p>
                    <ButtonLink href="/contact" className="mt-4 w-full justify-center">
                      Get a free estimate
                    </ButtonLink>
                  </div>
                </div>
              </aside>
            )}

            <div className={cn(showToc && 'max-w-3xl')}>
              {post.intro.slice(1).map((p) => (
                <p key={p.slice(0, 32)} className="mb-10 text-xl leading-9 text-ink-800">
                  {p}
                </p>
              ))}
              <BlogBody blocks={post.blocks} />

              {related.length > 0 && (
                <div className="mt-16 border-t border-ink-200 pt-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-500">Related services</p>
                  <ul className="mt-4 flex flex-wrap gap-3">
                    {related.map((s) => (
                      <li key={s.slug}>
                        <Link
                          href={serviceHref(s.slug)}
                          className="group inline-flex items-center gap-2 rounded-full border border-ink-200 px-4 py-2 text-sm font-medium text-ink-900 hover:border-gold-400 hover:text-gold-700"
                        >
                          {s.name}
                          <LuArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {post.priceNote && (
                <p className="mt-8 text-sm text-ink-500">
                  Prices are typical 2026 ranges for Waterloo Region, before HST, for planning only. Every home is different — book a free site visit for a written, itemized quote.
                </p>
              )}
            </div>
          </div>
        </Container>
      </article>

      <FaqSection faqs={post.faqs} title={post.faqTitle ?? 'Questions we hear most'} tone="default" />
      {others.length > 0 && (
        <Section tone="white">
          <h2 className="mb-8 text-[1.75rem] sm:text-3xl">More guides</h2>
          <BlogCards posts={others} />
        </Section>
      )}
      <CtaBanner title="Ready to plan your project?" text="Free site visit and a written, itemized estimate — no obligation." />
    </>
  );
}
