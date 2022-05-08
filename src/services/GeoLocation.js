import axios from "axios";

const ipGeo = process.env.REACT_APP_GEO_API;
const baseURL = "https://api.ipbase.com/v2/info?apikey=";

// Get the user's IP address from their browser
export const geoLocation = async () => {
  try {
    const { data } = await axios.get(baseURL + ipGeo);
    return data;
  } catch (error) {
    return error;
  }
};
