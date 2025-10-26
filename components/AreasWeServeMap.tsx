'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import type { LatLngTuple } from 'leaflet';

// Fix Leaflet default marker icons in Next.js
interface IconDefaultWithGetIcon extends L.Icon.Default {
  _getIconUrl?: () => void;
}
delete (L.Icon.Default.prototype as IconDefaultWithGetIcon)._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
});

// City coordinates
const cities: { name: string; coords: LatLngTuple }[] = [
  { name: "Toronto", coords: [43.65107, -79.347015] },
  { name: "Mississauga", coords: [43.589045, -79.64412] },
  { name: "Brampton", coords: [43.731548, -79.762418] },
  { name: "Milton", coords: [43.518299, -79.877404] },
  { name: "Vaughan", coords: [43.837208, -79.508278] },
  { name: "Markham", coords: [43.8561, -79.3370] },
  { name: "Guelph", coords: [43.5448, -80.2482] },
  { name: "Newmarket", coords: [44.0592, -79.4613] },
  { name: "Barrie", coords: [44.3894, -79.6903] },
  { name: "Ajax", coords: [43.8509, -79.0204] },
];

export default function AreasWeServeMap() {
  return (
    <div className="w-full max-w-3xl mx-auto rounded-lg overflow-hidden shadow-md border border-gray-200">
      <MapContainer
        center={[43.7, -79.4]}
        zoom={9}
        style={{ height: '350px', width: '100%' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {cities.map((city, idx) => (
          <Marker key={idx} position={city.coords}>
            <Popup>
              <div className="font-semibold">{city.name}</div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
