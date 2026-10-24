import type { Metadata, Viewport } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import MobileCallBar from '@/components/layout/MobileCallBar';
import JsonLd from '@/components/seo/JsonLd';
import { mainNav } from '@/content/navigation';
import { site } from '@/content/site';
import { siteSchema } from '@/lib/seo/schema';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair', display: 'swap' });

// Site-wide defaults. Each page sets its own title, description and canonical
// with buildMetadata() (lib/seo/metadata.ts). No canonical here on purpose.
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.shortName} | Home Renovation in Kitchener-Waterloo, Bradford & GTA`,
    template: `%s | ${site.shortName}`,
  },
  description: site.description,
  applicationName: site.shortName,
  openGraph: { siteName: site.shortName, locale: 'en_CA', type: 'website', images: [{ url: site.defaultImage }] },
  twitter: { card: 'summary_large_image' },
  ...(process.env.GOOGLE_SITE_VERIFICATION ? { verification: { google: process.env.GOOGLE_SITE_VERIFICATION } } : {}),
};

export const viewport: Viewport = {
  themeColor: '#0d0c0b',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-CA" className={`${inter.variable} ${playfair.variable}`} data-scroll-behavior="smooth">
      <body>
        <JsonLd data={siteSchema()} />
        <a
          href="#main"
          className="sr-only z-[100] rounded-full bg-gold-500 px-4 py-2 font-semibold text-ink-950 focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to content
        </a>
        <Header nav={mainNav} />
        <main id="main">{children}</main>
        <Footer />
        <MobileCallBar />
      </body>
    </html>
  );
}
