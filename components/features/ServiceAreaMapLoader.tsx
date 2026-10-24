'use client';

// Loads the Leaflet map in the browser only (Leaflet needs `window`).
import dynamic from 'next/dynamic';

const ServiceAreaMap = dynamic(() => import('./ServiceAreaMap'), {
  ssr: false,
  loading: () => <div className="h-[420px] w-full animate-pulse rounded-[var(--radius-card)] bg-ink-100" aria-hidden="true" />,
});

export default function ServiceAreaMapLoader({ cities }: { cities?: string[] }) {
  return <ServiceAreaMap cities={cities} />;
}
