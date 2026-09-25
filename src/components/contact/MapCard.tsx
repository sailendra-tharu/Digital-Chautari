"use client";

import { ExternalLink, MapPin } from "lucide-react";
import dynamic from "next/dynamic";
import { officeMapsUrl } from "./contactDetails";

// Leaflet touches `window`, so it only loads in the browser.
const LeafletMap = dynamic(() => import("./LeafletMap"), {
  ssr: false,
  loading: () => (
    <div className="map-loading" aria-hidden="true">
      <MapPin size={26} />
    </div>
  ),
});

export function MapCard() {
  return (
    <div className="map-card" role="region" aria-label="Map showing our office in Kathmandu, Nepal">
      <LeafletMap />
      <a className="map-open" href={officeMapsUrl} target="_blank" rel="noopener noreferrer">
        Open in Maps <ExternalLink size={12} aria-hidden="true" />
      </a>
    </div>
  );
}
