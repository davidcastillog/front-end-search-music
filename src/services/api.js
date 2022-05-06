import axios from "axios";

// Setting the base url for the api call.
const baseUrl = "https://itunes.apple.com";

// Creating a new instance of axios with a base url and a timeout.
export const apiServer = axios.create({
  baseURL: baseUrl,
  timeout: 7000
});