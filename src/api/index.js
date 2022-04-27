import axios from "axios";

const API = axios.create({
  baseURL: `https://anka-skuter.herokuapp.com/api`,
  headers: [],
});

export const getScooterData = () => {
  return API.get("/scooters");
};
