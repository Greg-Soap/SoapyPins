import { useState } from "react";
import * as React from "react";
import Map from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import Button from "./component/Button";
function App() {
  const [viewState, setViewState] = useState({
    longitude: 12.4922,
    latitude: 41.8902,
    zoom: 6,
  });
  return (
    <Map
      {...viewState}
      onMove={(evt) => setViewState(evt.viewState)}
      mapboxAccessToken={import.meta.env.VITE_MAPBOX}
      style={{ width: "100vw", height: "100vh", overflow: "hidden" }}
      mapStyle="mapbox://styles/gregsoap/cl7k68p7x006b14p5gg894i8m"
    >
      <Button setViewState={setViewState} />
    </Map>
  );
}

export default App;
