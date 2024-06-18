import React from "react";
import "./style.scss";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { IMarker } from "../content";
import { useNavigate } from "react-router";
import { CustomMarker } from "../../../../components/custom-marker/custom-marker";

interface IMapProps {
  content: IMarker[];
}

export function Mapa(props: IMapProps) {
  const content = props.content;
  const google = window.google;
  const navigate = useNavigate();

  const containerStyle = {
    width: "auto",
    height: "500px",
  };

  const center = {
    lat: -27.59024,
    lng: -48.548567,
  };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBQB_MZq5MeYKC34bdNZIR8OHCHkZIBoNQ",
  });

  return (
    <section className="map-container">
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
          options={{
            disableDefaultUI: true,
            zoomControl: true,
          }}

          // onLoad={onLoad}
          // onUnmount={onUnmount}
        >
          {content.map((item) => {
            return (
              // <Marker
              //   position={{ lat: item.latitude, lng: item.longitude }}
              //   onClick={() => onClickMarkerHandler(item.id)}
              // />
              <CustomMarker
                center={{ lat: item.latitude, lng: item.longitude }}
                content={item}
              />
            );
          })}
        </GoogleMap>
      ) : (
        <></>
      )}
    </section>
  );
}
