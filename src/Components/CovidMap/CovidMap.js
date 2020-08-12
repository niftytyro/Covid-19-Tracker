import React from "react";
import { Map as LeafletMap, TileLayer } from "react-leaflet";
import styles from "./CovidMap.module.css";

const CovidMap = ({ latitude, longitude }) => {
  return (
    <div className={styles.map}>
      <LeafletMap center={[latitude, longitude]} zoom={3}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
      </LeafletMap>
    </div>
  );
};

export default CovidMap;
