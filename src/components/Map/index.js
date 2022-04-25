import React, { useCallback, useRef, useState } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import mapStyles from "../../mapStyles";
import useMarkers from "../../hooks/useMarkers";
import {
  MapContainer,
  PanText,
  Strong,
  ActionContainer,
  Button,
} from "./style";
/**------------------CONSTANTS */
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
  const [action, setAction] = useState(true); //TRUE is ADD Action and FALSE is REMOVE Action
  const mapRef = useRef();
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);
  /***----------------HANDLE ADD AND REMOVE ACTIONS */
  const handleMapOnClick = (e) => {
    if (canAddItem) {
      if (action) handleMapClick(e);
    }
  };
  return isLoaded ? (
    <MapContainer>
      {/*---------------------------- ADD AND REMOVE ACTIONS */}
      {canAddItem ? (
        <ActionContainer>
          <Button
            className={action ? "active" : ""}
            onClick={() => setAction(true)}
          >
            Add
          </Button>
          <Button
            className={!action ? "active" : ""}
            onClick={() => setAction(false)}
          >
            Remove
          </Button>
        </ActionContainer>
      ) : (
        <></>
      )}
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={14}
        center={center}
        options={options}
        onClick={(e) => handleMapOnClick(e)}
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
            onClick={() => handleSelectedMarker(marker, action)}
          />
        ))}
        {/*-------------------- ADD POPUP ACTION TO MAP */}
        {selected ? (
          <InfoWindow
            position={{ lat: selected.lat, lng: selected.lng }}
            onCloseClick={() => handleSelectedMarker(null, action)}
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
    </MapContainer>
  ) : (
    <></>
  );
};

export default Map;
