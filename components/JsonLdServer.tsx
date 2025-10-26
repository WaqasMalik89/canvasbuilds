// components/JsonLdServer.tsx
'use client'; // optional if client-only

import React from 'react';

interface JsonLdProps {
  data: Array<Record<string, unknown>>; // ✅ array of objects
}

export default function JsonLdServer({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
