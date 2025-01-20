import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';


export default function Map() {
        return (
            <MapContainer
            center={[-26.22174585541148, 27.696903575374982]}
            zoom={13} // Set the zoom level
            style={{ height: "100px", width: "100%" }} // Set the height and width of the map
            >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" // Specify the tile source
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={[-26.22174585541148, 27.696903575374982]}>
                <Popup>
                Find us here.
                </Popup>
            </Marker>
            </MapContainer>
        );
        };
