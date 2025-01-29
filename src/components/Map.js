import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet'; // Import Leaflet for customizing the marker
import 'leaflet/dist/leaflet.css'; // Import Leaflet's CSS

// Fix marker icon issue by manually specifying the default icon
const customIcon = new L.Icon({
    iconUrl: require('leaflet/dist/images/marker-icon.png'), // Path to the default marker icon
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
    iconSize: [25, 41], // Default size
    iconAnchor: [12, 41], // Anchor point for positioning
    popupAnchor: [1, -34], // Anchor point for the popup
    shadowSize: [41, 41] // Size of the shadow
});

export default function Map() {
    return (
        <MapContainer
            center={[-26.22174585541148, 27.696903575374982]} // Coordinates of the map's center
            zoom={13} // Initial zoom level
            style={{ height: "100px", width: "100%" }} // Map size
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" // Map tile source
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker 
                position={[-26.22174585541148, 27.696903575374982]} 
                icon={customIcon} // Use the fixed custom icon
            >
                <Popup>
                    Find us here.
                </Popup>
            </Marker>
        </MapContainer>
    );
}
