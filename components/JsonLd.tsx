// components/JsonLdServer.tsx
'use client'; // if using on client, else remove for server component

import jsonLd from '@/data/jsonLdData';

// Use a flexible but typed structure instead of 'any'
type JsonLdItem = Record<string, unknown>;

export default function JsonLdServer() {
  return (
    <>
      {jsonLd.map((item: JsonLdItem, index: number) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}
    </>
  );
}
