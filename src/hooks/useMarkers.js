import { useState, useCallback } from "react";
import { scooterData } from "../Data";
import { v4 as uuidv4 } from "uuid";

const useMarkers = () => {
  const setMarkersWithLocal = () => {
    localStorage.setItem("markers", JSON.stringify(scooterData));
    return scooterData;
  };
  const [markers, setMarkers] = useState(
    localStorage.getItem("markers")
      ? JSON.parse(localStorage.getItem("markers"))
      : setMarkersWithLocal()
  );
  const [selected, setSelected] = useState(null);

  const handleMapClick = useCallback((e) => {
    let newMarkers = JSON.parse(localStorage.getItem("markers")) || [];
    let newID = uuidv4();
    localStorage.setItem(
      "markers",
      JSON.stringify([
        ...newMarkers,
        { id: newID, lat: e.latLng.lat(), lng: e.latLng.lng(), charge: 100 },
      ])
    );
    setMarkers((prev) => [
      ...prev,
      {
        id: newID,
        lat: e.latLng.lat(),
        lng: e.latLng.lng(),
        charge: 100,
      },
    ]);
  }, []);

  const handleSelectedMarker = (marker) => {
    setSelected(marker);
  };
  return { markers, selected, handleMapClick, handleSelectedMarker };
};

export default useMarkers;
