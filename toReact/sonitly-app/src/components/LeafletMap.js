import React, { useEffect, useState, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { fetchData } from "../data/fetchWrapper";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

const musicVenueIcon = new L.Icon({
  iconUrl: "/images/markers/music.png",
  iconSize: [41, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

const bookShopIcon = new L.Icon({
  iconUrl: "/images/markers/book.png",
  iconSize: [41, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

const getIconByCategory = (categoryId) => {
  switch (categoryId) {
    case 1:
      return musicVenueIcon;
    case 2:
      return bookShopIcon;
    default:
      return new L.Icon.Default();
  }
};

const LeafletMap = () => {
  const mapRef = useRef(null);
  const [locations, setLocations] = useState([]);
  const latitude = 45.5019;
  const longitude = -73.5674;

  useEffect(() => {
    const fetchLocations = async () => {
      const data = await fetchData("./data/places.json"); // data is already parsed JSON
      if (data && data.places) {
        setLocations(data.places);
      }
    };
  
    fetchLocations();
  }, []);
  

  const zoomToLocation = (lat, lng) => {
    if (mapRef.current) {
      mapRef.current.setView([lat, lng], 20); // Zoom into the location
    }
  };

  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: "30%", padding: "10px", backgroundColor: "#f4f4f4" }}>
        <h3>Locations</h3>
        <ul>
          {locations.map((loc, idx) => (
            <li key={idx} onClick={() => zoomToLocation(loc.lat, loc.lng)} style={{ cursor: "pointer", listStyle: "none", textAlign: "left", lineHeight: "2rem" }}>
              {loc.name}
            </li>
          ))}
        </ul>
      </div>
      <div style={{ width: "70%" }}>
        <MapContainer center={[latitude, longitude]} zoom={13} ref={mapRef} style={{ height: "50vh", width: "50vw" }}>
          <TileLayer
            attribution='%copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {locations.map((loc, idx) => (
            <Marker
              key={idx}
              position={[loc.lat, loc.lng]}
              icon={getIconByCategory(loc.category_id)}
            >
              <Popup>{loc.name}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default LeafletMap;
