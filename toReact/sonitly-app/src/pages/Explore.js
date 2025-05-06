import React from "react";
import LeafletMap from "../components/LeafletMap";

const Explore = () => {
  return (

    <div>
      <h1>Explore Locations</h1>
    <div style={{display: "flex", justifyContent: "center", alignItems: "center" }}>
      <LeafletMap />
    </div>
    </div>
  );
}

export default Explore;
