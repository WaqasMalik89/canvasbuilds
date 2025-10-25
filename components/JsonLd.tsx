// components/JsonLd.tsx
import Head from 'next/head';
import Script from 'next/script';
import jsonLd from '@/data/jsonLdData';

export default function JsonLdScript() {
  return (
    <Head>
    <Script
      id="json-ld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      strategy="beforeInteractive" // ensures it loads early
    />
    </Head>
  );
}

