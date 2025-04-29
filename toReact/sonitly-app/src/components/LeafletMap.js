import React, { useRef } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const LeafletMap = () => {
    const mapRef = useRef(null);
    const latitude = 45.5019;
    const longitude = -73.5674

    return (
        <MapContainer center={[latitude, longitude]} zoom={13} ref={mapRef} style={{height: "50vh", width: "50vw"}}>
            <TileLayer
                attribution='%copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
        </MapContainer>
    );
};

export default LeafletMap;