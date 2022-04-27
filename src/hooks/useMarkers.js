import { useState, useCallback, useEffect } from "react";
// import { scooterData } from "../Data";
import { v4 as uuidv4 } from "uuid";
import { getData } from "../api";
const useMarkers = () => {
  // const setMarkersWithLocal = () => {
  //   localStorage.setItem("markers", JSON.stringify(scooterData));
  //   return scooterData;
  // };
  const [markers, setMarkers] = useState([]);
  const [selected, setSelected] = useState(null);

  const handleMapClick = useCallback((e, action) => {
    // let newMarkers = JSON.parse(localStorage.getItem("markers")) || [];
    let newID = uuidv4();
    // localStorage.setItem(
    //   "markers",
    //   JSON.stringify([
    //     ...newMarkers,
    //     {
    //       uid: newID,
    //       location: {
    //         longitude: e.latLng.lng(),
    //         latitude: e.latLng.lat(),
    //       },
    //       state: "standby",
    //       battery: 100,
    //     },
    //   ])
    // );
    setMarkers((prev) => [
      ...prev,
      {
        uid: newID,
        location: {
          longitude: e.latLng.lng(),
          latitude: e.latLng.lat(),
        },
        state: "standby",
        battery: 100,
      },
    ]);
  }, []);

  const handleSelectedMarker = (marker, isRemove) => {
    if (!isRemove) {
      let newMarkers = markers.filter((m) => m.uid !== marker.uid);
      // localStorage.setItem("markers", JSON.stringify([...newMarkers]));
      setMarkers(newMarkers);
    } else setSelected(marker);
  };

  const getScooterData = async () => {
    const res = await getData("scooters");
    const data = res.data;
    // localStorage.setItem("markers", JSON.stringify(data.result));
    return data.result;
  };

  useEffect(() => {
    getScooterData().then((res) => {
      console.log(res);
      setMarkers(res);
    });
  }, []);

  return {
    markers,
    selected,
    handleMapClick,
    handleSelectedMarker,
  };
};

export default useMarkers;
