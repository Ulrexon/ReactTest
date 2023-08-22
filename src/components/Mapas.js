import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const locations = [
  { id: 1, lat: 37.7749, lng: -122.4194, name: 'San Francisco' },
  { id: 2, lat: 34.0522, lng: -118.2437, name: 'Los Angeles' },
  { id: 3, lat: 40.7128, lng: -74.0060, name: 'New York' },
];

function Mapas() {
  return (
    <div className="map-container">
      <h1>Mapas Interactivos con React</h1>
      <MapContainer center={[37.7749, -122.4194]} zoom={5} style={{ height: '600px', width: '1000px' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {locations.map(location => (
          <Marker key={location.id} position={[location.lat, location.lng]}>
            <Popup>{location.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default Mapas;
