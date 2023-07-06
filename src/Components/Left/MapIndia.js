import React from "react";
import { Map, Marker } from "pigeon-maps";
import './map.css';

export default function MapIndia() {
  return (
    <div className="map-container">
      <Map height={300} defaultCenter={[17.3850, 78.4867]} defaultZoom={11}>
        <Marker width={50} anchor={[17.3850, 78.4867]} />
      </Map>
    </div>
  );
}
