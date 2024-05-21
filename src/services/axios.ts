import axios from "axios";

const baseURL = import.meta.env.VITE_ENDPOINT;

export const httpClient = axios.create({
  baseURL,
  timeout: 10000,
});
