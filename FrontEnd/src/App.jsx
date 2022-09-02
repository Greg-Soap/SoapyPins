import { useState } from "react";
import * as React from "react";
import Map from "react-map-gl";

function App() {
  return (
    <Map
      initialViewState={{
        longitude: 12.4922,
        latitude: 41.8902,
        zoom: 12,
      }}
      mapboxAccessToken={import.meta.env.VITE_MAPBOX}
      style={{ width: "100vw", height: "100vh", overflow: "hidden" }}
      mapStyle="mapbox://styles/gregsoap/cl7k68p7x006b14p5gg894i8m"
    />
  );
}

export default App;
