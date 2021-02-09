import React from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

const mapStyles = {
  width: "100%",
  height: "100%",
};

const MapContainer = () => {
  return (
    <Map
      zoom={8}
      style={mapStyles}
      initialCenter={{ lat: 47.444, lng: -122.176 }}
    />
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyCmE_OuNvGKAmRcoWqVty8DYCiBGN3wcNA",
})(MapContainer);
