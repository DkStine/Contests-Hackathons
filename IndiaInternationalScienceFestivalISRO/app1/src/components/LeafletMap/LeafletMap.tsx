import React, { useRef, useState } from "react";
import {
  Circle,
  CircleMarker,
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { LatLng, latLng } from "leaflet";

const LeafletMap = () => {
  const fillBlueOptions = { fillColor: "blue" };

  function LocationMarker() {
    const [position, setPosition] = useState<LatLng | null>(null);
    const map = useMapEvents({
      click() {
        map.locate();
      },
      locationfound(e) {
        setPosition(e.latlng);
        map.flyTo(e.latlng, map.getZoom());
      },
    });

    return position === null ? null : (
      <Marker position={position}>
        <Popup>You are here</Popup>
      </Marker>
    );
  }

  return(
    <MapContainer
      center={{ lat: 51.505, lng: -0.09 }}
      zoom={13}
      scrollWheelZoom={false}
      // ref={mapRef}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Circle
        center={[17.6428993, 77.7993944]}
        pathOptions={fillBlueOptions}
        radius={765}
      >
        <Popup>This is Woxsen University, Hyderabad</Popup>
      </Circle>
      <LocationMarker/>
    </MapContainer>
  );
};

export default LeafletMap;
