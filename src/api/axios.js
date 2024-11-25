import axios from "axios";

let baseURL;
if (typeof window === "undefined") {
  baseURL = "http://new.technocorp.uz/api";
} else {
  baseURL = "https://new.technocorp.uz/api";
}

export const axiosT = axios.create({
  baseURL,
  withCredentials: true,
});
