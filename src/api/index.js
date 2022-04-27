import axios from "axios";

const API = axios.create({
  baseURL: process.env.REACT_APP_SCOOTERS_API,
  headers: [],
});
export const getData = (from) => {
  return API.get(`/${from}`);
};
