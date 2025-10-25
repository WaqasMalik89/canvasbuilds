import './globals.css';
import './uniform-portfolio-images.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import siteConfig from '../config/siteConfig';
import JsonLdServer from '../components/JsonLdServer';
import jsonLd from '../data/jsonLdData';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: siteConfig.title,
    description: siteConfig.description,
    keywords: siteConfig.keywords,
    authors: [{ name: siteConfig.author }],
    robots: siteConfig.robots,
    openGraph: {
      title: siteConfig.og.title,
      description: siteConfig.og.description,
      url: siteConfig.og.url,
      siteName: siteConfig.name,
      images: [
        {
          url: siteConfig.og.image,
          width: 1200,
          height: 630,
          alt: siteConfig.og.title,
        },
      ],
      locale: 'en_CA',
      type: siteConfig.og.type as
        | 'website'
        | 'article'
        | 'book'
        | 'profile'
        | 'music.song'
        | 'music.album'
        | 'music.playlist'
        | 'music.radio_station'
        | 'video.movie'
        | 'video.episode'
        | 'video.tv_show'
        | 'video.other',
    },
    twitter: {
      card: siteConfig.twitter.card as 'summary' | 'summary_large_image',
      title: siteConfig.twitter.title,
      description: siteConfig.twitter.description,
      images: [siteConfig.twitter.image],
    },
    alternates: {
      canonical: siteConfig.canonical,
    },
    metadataBase: new URL(siteConfig.url),
  };
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <JsonLdServer data={jsonLd} />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
