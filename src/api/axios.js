import axios from "axios";

let baseURL;
if (typeof window === "undefined") {
  baseURL = "http://technocorp.uz/api";
} else {
  baseURL = "https://technocorp.uz/api";
}

export const axiosT = axios.create({
  baseURL,
  withCredentials: true,
});
