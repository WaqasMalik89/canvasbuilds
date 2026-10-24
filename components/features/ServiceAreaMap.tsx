'use client';

// Leaflet map of the cities we serve. Loaded only in the browser — use
// <ServiceAreaMapLoader /> in pages, not this component directly.

import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { CircleMarker, MapContainer, TileLayer, Tooltip } from 'react-leaflet';

/** Map pins. Add a city here to show it on the map. */
const CITY_COORDS: Record<string, [number, number]> = {
  Kitchener: [43.4516, -80.4925],
  Waterloo: [43.4643, -80.5204],
  Cambridge: [43.3616, -80.3144],
  Guelph: [43.5448, -80.2482],
  Mississauga: [43.589, -79.6441],
  Brampton: [43.7315, -79.7624],
  Toronto: [43.6532, -79.3832],
  Vaughan: [43.8372, -79.5083],
  Woodbridge: [43.7836, -79.5996],
  Markham: [43.8561, -79.337],
  'Richmond Hill': [43.8828, -79.4403],
  Newmarket: [44.0592, -79.4613],
  Aurora: [44.0065, -79.4504],
  Bradford: [44.1146, -79.5664],
  'Bond Head': [44.0975, -79.6972],
  'Holland Landing': [44.0918, -79.4919],
  'East Gwillimbury': [44.1022, -79.4441],
  'King City': [43.9284, -79.5276],
  Innisfil: [44.3001, -79.6114],
  Keswick: [44.2433, -79.465],
};

export default function ServiceAreaMap({ cities }: { cities?: string[] }) {
  const pins = Object.entries(CITY_COORDS).filter(([name]) => !cities || cities.includes(name));
  const bounds = L.latLngBounds(pins.map(([, c]) => c)).pad(0.15);

  return (
    <div className="relative isolate z-0 h-[420px] w-full overflow-hidden rounded-[var(--radius-card)] ring-1 ring-ink-200">
      <MapContainer bounds={bounds} scrollWheelZoom={false} className="size-full">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {pins.map(([name, coords]) => (
          <CircleMarker
            key={name}
            center={coords}
            radius={8}
            pathOptions={{ color: '#0d0c0b', weight: 2, fillColor: '#c39443', fillOpacity: 0.95 }}
          >
            <Tooltip direction="top" offset={[0, -6]}>
              {name}
            </Tooltip>
          </CircleMarker>
        ))}
      </MapContainer>
    </div>
  );
}
