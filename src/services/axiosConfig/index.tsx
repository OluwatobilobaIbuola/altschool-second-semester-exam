import axios, { AxiosInstance } from "axios";
const base = "https://randomuser.me/api";

export const publicRequest: AxiosInstance = axios.create({
  baseURL: base,
  headers: {
    "Content-Type": "application/json",
  },
});
