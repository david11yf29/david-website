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
  return <WrappedMap />;
};

export default GoogleApi;
