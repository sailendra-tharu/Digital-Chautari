"use client";

import "leaflet/dist/leaflet.css";
import { divIcon } from "leaflet";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { office } from "./contactDetails";

// Custom HTML marker: avoids Leaflet's default PNG icons, which break under bundlers.
const pinIcon = divIcon({
  className: "map-pin-icon",
  html: `<svg width="34" height="34" viewBox="0 0 24 24" fill="currentColor" stroke="white" stroke-width="1.5" aria-hidden="true"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3" fill="white"/></svg>`,
  iconSize: [34, 34],
  iconAnchor: [17, 32],
  popupAnchor: [0, -28],
});

export default function LeafletMap() {
  return (
    <MapContainer center={office.position} zoom={13} scrollWheelZoom={false} className="leaflet-map">
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        maxZoom={19}
      />
      <Marker position={office.position} icon={pinIcon}>
        <Popup>
          <strong>{office.name}</strong>
          <br />
          {office.address}
        </Popup>
      </Marker>
    </MapContainer>
  );
}
