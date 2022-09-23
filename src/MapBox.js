import React, { useState, useCallback, useEffect } from "react";
import Map, { Marker, MarkerDragEvent, LngLat } from "react-map-gl";
import { MAPBOX_TOKEN } from "./app-setting";
//import './mapbox.css';

function MapBox() {
  const [latitude, setLatituder] = useState(21.0244246);
  const [longitude, setLongituder] = useState(105.7938072);
  const onDragStart = (e) => {};

  const onDrag = (e) => {
    setLatituder(e.lngLat.lat);
    setLongituder(e.lngLat.lng)
  };
  const onDragEnd = () => {};
  return (
    <div>
      <Map
        initialViewState={{
          latitude: latitude,
          longitude: longitude,
          zoom: 12,
        }}
        style={{ width: "60%", height: "600px" }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken={MAPBOX_TOKEN}
      >
        {/* <NavigationControl /> */}
        {/* <GeolocateControl /> */}
        <Marker
          longitude={longitude}
          latitude={latitude}
          draggable
          color="red"
          onDragStart={onDragStart}
          onDrag={onDrag}
          onDragEnd={onDragEnd}
        ></Marker>
      </Map>
      <div>
        <label>Longitude : </label>
        <input type="text" value={longitude} />
        <label>Latitude : </label>
        <input type="text" value={latitude} />
      </div>
    </div>
  );
}

export default MapBox;
