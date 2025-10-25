'use client'; // THIS IS CRUCIAL

import Head from "next/head";
import AreasWeServeSection from "@/components/AreasWeServeSection";
import dynamic from 'next/dynamic';

// Dynamic import to avoid SSR for Leaflet map
const DynamicMap = dynamic(() => import('@/components/AreasWeServeMap'), { ssr: false });

export default function AreasWeServePage() {
  return (
    <>
      <Head>
        <title>Areas We Serve | Top Tier Renovation</title>
        <meta
          name="description"
          content="We proudly serve Toronto, Brampton, Mississauga, Milton, Guelph, Vaughan, and more GTA areas."
        />
      </Head>

      <AreasWeServeSection />

      <main className="p-6 max-w-6xl mx-auto">
        <DynamicMap />
      </main>
    </>
  );
}
