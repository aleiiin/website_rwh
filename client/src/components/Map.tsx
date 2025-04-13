import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

export default function Map() {
  const mapRef = useRef<HTMLDivElement>(null);
  const leafletMapRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    // Tomsk coordinates (more precise)
    const tomskCoordinates: L.LatLngTuple = [56.4846, 84.9476];
    
    // Clean up previous map instance
    if (leafletMapRef.current) {
      leafletMapRef.current.remove();
    }

    // Initialize map with better zoom level
    const map = L.map(mapRef.current).setView(tomskCoordinates, 13);
    leafletMapRef.current = map;
    
    // Add OpenStreetMap tile layer with better styling
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // More accurate coordinates for Kirovsky district
    const kirovskyDistrictCoords: L.LatLngTuple[] = [
      [56.4917, 84.9444],
      [56.5027, 84.9544],
      [56.5127, 84.9744],
      [56.5077, 84.9944],
      [56.4957, 84.9944],
      [56.4877, 84.9744],
      [56.4917, 84.9444]
    ];

    // Add district polygon with better styling
    const districtPolygon = L.polygon(kirovskyDistrictCoords, {
      color: '#1f306c',
      fillColor: '#1f306c',
      fillOpacity: 0.2,
      weight: 3,
      dashArray: '5, 10'
    }).addTo(map);

    // Add district marker with custom icon
    const districtIcon = L.divIcon({
      className: 'custom-div-icon',
      html: '<div style="background-color: #1f306c; width: 12px; height: 12px; border-radius: 50%; border: 2px solid white;"></div>',
      iconSize: [16, 16]
    });

    L.marker(tomskCoordinates, { icon: districtIcon })
      .addTo(map)
      .bindPopup(`
        <div class="p-2">
          <h3 class="font-bold text-lg">Кировский район</h3>
          <p class="text-sm">г. Томск</p>
        </div>
      `)
      .openPopup();

    // Add electoral precinct #3 with more accurate coordinates
    const precinctCoords: L.LatLngTuple[] = [
      [56.4957, 84.9544],
      [56.5007, 84.9594],
      [56.5047, 84.9694],
      [56.5027, 84.9794],
      [56.4957, 84.9744],
      [56.4927, 84.9644],
      [56.4957, 84.9544]
    ];

    // Add precinct polygon with better styling
    const precinctPolygon = L.polygon(precinctCoords, {
      color: '#273779',
      fillColor: '#273779',
      fillOpacity: 0.3,
      weight: 3
    }).addTo(map)
    .bindPopup(`
      <div class="p-2">
        <h3 class="font-bold text-lg">Избирательный округ №3</h3>
        <p class="text-sm">Кировский район</p>
      </div>
    `);

    // Add zoom control
    map.zoomControl.setPosition('bottomright');

    // Add scale control
    L.control.scale({
      imperial: false,
      position: 'bottomleft'
    }).addTo(map);

    // Add click handlers for polygons
    districtPolygon.on('click', () => {
      map.setView(tomskCoordinates, 13);
    });

    precinctPolygon.on('click', () => {
      const center = L.polygon(precinctCoords).getBounds().getCenter();
      map.setView(center, 14);
    });

    return () => {
      if (leafletMapRef.current) {
        leafletMapRef.current.remove();
        leafletMapRef.current = null;
      }
    };
  }, []);

  return (
    <div className="w-full h-full">
      <div ref={mapRef} className="w-full h-[500px] rounded-lg shadow-lg" />
    </div>
  );
}
