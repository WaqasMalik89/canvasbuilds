// components/JsonLdServer.tsx
'use client'; // optional; can omit if only Server Component

import React from 'react';

interface JsonLdProps {
  data: any;
}

export default function JsonLdServer({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
