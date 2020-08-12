import React from "react";
import { Map as LeafletMap, TileLayer, CircleMarker } from "react-leaflet";
import styles from "./CovidMap.module.css";

const CovidMarkers = (countriesData) => {
  return countriesData.map((country) => {
    return (
      <CircleMarker
        center={[country.lat, country.long]}
        color="red"
        fillOpacity={0.4}
        radius={Math.sqrt(country.cases) / 20}
      ></CircleMarker>
    );
  });
};

const CovidMap = ({ latitude, longitude, countriesData }) => {
  return (
    <div className={styles.map}>
      <LeafletMap center={[latitude, longitude]} zoom={3}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {CovidMarkers(countriesData)}
      </LeafletMap>
    </div>
  );
};

export default CovidMap;
