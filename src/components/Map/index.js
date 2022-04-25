import React, { useCallback, useRef } from "react";
import {
  GoogleMap,
  // useLoadScript,
  useJsApiLoader,
  Marker,
  InfoWindow,
  // InfoWindow,
} from "@react-google-maps/api";
import mapStyles from "../../mapStyles";
import useMarkers from "../../hooks/useMarkers";
import { PanText, Strong } from "./style";
/**------------------CONSTANTS */
// const libraries = ["places"];
const mapContainerStyle = {
  width: "'100%'",
  height: "500px",
};
const center = {
  lat: 39.920561,
  lng: 32.85388,
};
const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
};
const Map = ({ canAddItem = false }) => {
  const { markers, selected, handleMapClick, handleSelectedMarker } =
    useMarkers();
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBs4U5398tZasr8I8TK14Thpf9C-3Nn_po",
  });

  const mapRef = useRef();
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      zoom={14}
      center={center}
      options={options}
      onClick={(e) =>
        canAddItem
          ? handleMapClick(e)
          : console.log("This action is not allowed!")
      }
      onLoad={onMapLoad}
    >
      {/*-------------------- ADD MARKERS TO MAP */}
      {markers?.map((marker, index) => (
        <Marker
          key={index}
          position={{ lat: marker.lat, lng: marker.lng }}
          icon={{
            url: `${process.env.PUBLIC_URL}/scooter.svg`,
            scaledSize: new window.google.maps.Size(30, 30),
            origin: new window.google.maps.Point(0, 0),
            anchor: new window.google.maps.Point(15, 15),
          }}
          onClick={() => handleSelectedMarker(marker)}
        />
      ))}
      {/*-------------------- ADD POPUP ACTION TO MAP */}
      {selected ? (
        <InfoWindow
          position={{ lat: selected.lat, lng: selected.lng }}
          onCloseClick={() => handleSelectedMarker(null)}
        >
          <PanText>
            Şarj Kapasitesi{" "}
            <Strong color={selected.charge > 60 ? "green" : "red "}>
              {selected.charge}
            </Strong>
          </PanText>
        </InfoWindow>
      ) : null}
    </GoogleMap>
  ) : (
    <></>
  );
};

export default Map;
