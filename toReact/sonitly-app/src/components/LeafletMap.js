import React, { useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

const locations = [
    { name: "MTELUS", lat: 45.5142, lng: -73.5677 },
    { name: "Club Soda", lat: 45.5140, lng: -73.5618 },
    { name: "Foufounes Électriques", lat: 45.5142, lng: -73.5645 },
    { name: "Théâtre Fairmount", lat: 45.5267, lng: -73.5964 },
    { name: "Le Studio TD", lat: 45.5089, lng: -73.5682 },
    { name: "La Sala Rossa", lat: 45.5280, lng: -73.5946 },
    { name: "Bar Le Ritz PDB", lat: 45.5364, lng: -73.6075 },
    { name: "Beanfield Theatre", lat: 45.4746, lng: -73.5779 }
  ];

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

        {locations.map((loc, idx) => (
        <Marker key={idx} position={[loc.lat, loc.lng]}>
          <Popup>{loc.name}</Popup>
        </Marker>
      ))}
        </MapContainer>
    );
};

export default LeafletMap;