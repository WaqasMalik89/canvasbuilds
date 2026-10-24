import Link from 'next/link';
import { ButtonLink } from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import { mainNav } from '@/content/navigation';

export const metadata = { title: 'Page not found', robots: { index: false } };

export default function NotFound() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <Container size="narrow" className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold-700">404</p>
        <h1 className="mt-3 text-4xl sm:text-5xl">We couldn’t find that page</h1>
        <p className="mt-4 text-lg text-ink-600">It may have moved. Try one of these instead:</p>
        <ul className="mt-8 flex flex-wrap justify-center gap-3">
          {mainNav.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="inline-flex rounded-full border border-ink-300 px-5 py-2 font-semibold text-ink-900 hover:border-ink-900">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <ButtonLink href="/" variant="dark" className="mt-10">
          Back to home
        </ButtonLink>
      </Container>
    </section>
  );
}
