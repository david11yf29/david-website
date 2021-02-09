import React from "react";
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";

const Maps = () => {
  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 34.02235, lng: -118.285118 }}
    />
  );
};

const WrappedMap = withScriptjs(withGoogleMap(Maps));

const GoogleApi = () => {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places`}
        loadingElement={<div style={{ height: "100%" }} />}
        containerElement={<div style={{ height: "100%" }} />}
        mapElement={<div style={{ height: "100%" }} />}
      />
    </div>
  );
};

export default GoogleApi;
