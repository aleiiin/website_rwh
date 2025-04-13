import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

export default function Map() {
  const mapRef = useRef<HTMLDivElement>(null);
  const leafletMapRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    // Tomsk coordinates
    const tomskCoordinates: [number, number] = [56.4977, 84.9744];
    
    // Clean up previous map instance
    if (leafletMapRef.current) {
      leafletMapRef.current.remove();
    }

    // Initialize map
    const map = L.map(mapRef.current).setView(tomskCoordinates, 12);
    leafletMapRef.current = map;
    
    // Add OpenStreetMap tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Define Kirovsky district polygon - approximate coordinates
    const kirovskyDistrictCoords = [
      [56.4917, 84.9444],
      [56.5027, 84.9544],
      [56.5127, 84.9744],
      [56.5077, 84.9944],
      [56.4957, 84.9944],
      [56.4877, 84.9744],
      [56.4917, 84.9444]
    ];

    // Add district polygon
    L.polygon(kirovskyDistrictCoords, {
      color: '#1f306c',
      fillColor: '#1f306c',
      fillOpacity: 0.3,
      weight: 2
    }).addTo(map);

    // Add district marker
    L.marker(tomskCoordinates)
      .addTo(map)
      .bindPopup('Кировский район г. Томск')
      .openPopup();

    // Add electoral precinct #3 - smaller area within district
    const precinctCoords = [
      [56.4957, 84.9544],
      [56.5007, 84.9594],
      [56.5047, 84.9694],
      [56.5027, 84.9794],
      [56.4957, 84.9744],
      [56.4927, 84.9644],
      [56.4957, 84.9544]
    ];

    // Add precinct polygon
    L.polygon(precinctCoords, {
      color: '#273779',
      fillColor: '#273779',
      fillOpacity: 0.5,
      weight: 3
    }).addTo(map)
    .bindPopup('Избирательный округ №3');

    return () => {
      if (leafletMapRef.current) {
        leafletMapRef.current.remove();
        leafletMapRef.current = null;
      }
    };
  }, []);

  return (
    <div className="w-full h-full">
      <div ref={mapRef} className="w-full h-full rounded-lg" />
    </div>
  );
}
