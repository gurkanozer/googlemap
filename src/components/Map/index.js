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
  ActionButton,
  ItemsListContainer,
  ItemsList,
  Item,
  ItemButton,
  ItemToggleButton,
  InfoContainer,
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
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });
  const [centerCoords, setCenterCoords] = useState(center);
  const [isItemListActive, setIsItemListActive] = useState(false);
  const [action, setAction] = useState(true); //TRUE is ADD Action and FALSE is REMOVE Action
  const mapRef = useRef();
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  // const onMapLoad = useCallback(function callback(map) {
  //   const bounds = new window.google.maps.LatLngBounds();
  //   map.fitBounds(bounds);
  //   mapRef.current = map;
  // }, []);

  /***----------------HANDLE ADD AND REMOVE ACTIONS */
  const handleMapOnClick = (e) => {
    if (canAddItem) {
      if (action) handleMapClick(e);
    }
  };
  const handleMarkerOnClick = (e) => {
    handleSelectedMarker(e, action);
    setCenterCoords({ lat: e.location.latitude, lng: e.location.longitude });
  };
  const handleItemOnClick = (e) => {
    handleSelectedMarker(e, true);
    setCenterCoords({ lat: e.location.latitude, lng: e.location.longitude });
  };
  const handleToggleItemList = () => {
    setIsItemListActive((prev) => !prev);
  };
  return isLoaded ? (
    <MapContainer>
      {/*---------------------------- ADD AND REMOVE ACTIONS */}
      {canAddItem ? (
        <ActionContainer>
          <ActionButton
            className={action ? "active" : ""}
            onClick={() => setAction(true)}
          >
            Add
          </ActionButton>
          <ActionButton
            className={!action ? "active" : ""}
            onClick={() => setAction(false)}
          >
            Remove
          </ActionButton>
        </ActionContainer>
      ) : (
        <></>
      )}
      {/*-----------------------------------ITEMS LIST */}
      <ItemToggleButton onClick={() => handleToggleItemList()}>
        Scooters
      </ItemToggleButton>
      <ItemsListContainer className={isItemListActive ? "active" : ""}>
        <ItemsList>
          {markers?.map((marker, index) => (
            <Item key={index}>
              <ItemButton
                onClick={() => handleItemOnClick(marker)}
                className={marker.uid === selected?.uid ? "active" : ""}
              >
                {marker.uid}
              </ItemButton>
            </Item>
          ))}
        </ItemsList>
      </ItemsListContainer>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={8}
        center={centerCoords}
        options={options}
        onClick={(e) => handleMapOnClick(e)}
        onLoad={onMapLoad}
      >
        {/*-------------------- ADD MARKERS TO MAP */}
        {markers?.map((marker, index) => (
          <Marker
            key={index}
            position={{
              lat: marker.location.latitude,
              lng: marker.location.longitude,
            }}
            icon={{
              url: `${process.env.PUBLIC_URL}/scooter.svg`,
              scaledSize: new window.google.maps.Size(30, 30),
              origin: new window.google.maps.Point(0, 0),
              anchor: new window.google.maps.Point(15, 15),
            }}
            onClick={() => handleMarkerOnClick(marker)}
          />
        ))}
        {/*-------------------- ADD POPUP ACTION TO MAP */}
        {selected ? (
          <InfoWindow
            position={{
              lat: selected.location.latitude,
              lng: selected.location.longitude,
            }}
            onCloseClick={() => handleSelectedMarker(null, action)}
          >
            <InfoContainer>
              <PanText>{selected.uid}</PanText>
              <PanText>State: {selected.state}</PanText>
              <PanText>
                Battery{" "}
                <Strong color={selected.battery > 60 ? "green" : "red "}>
                  {selected.battery}
                </Strong>
              </PanText>
            </InfoContainer>
          </InfoWindow>
        ) : null}
      </GoogleMap>
    </MapContainer>
  ) : (
    <></>
  );
};

export default Map;
