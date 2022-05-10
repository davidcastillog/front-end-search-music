import "./App.css";
import { useState, useEffect } from "react";
import { geoLocation } from "./services/GeoLocation";
import { SearchBar } from "./components";
import RootNavigation from "./RootNavigation";

function App() {
  const [userLocation, setUserLocation] = useState("ES");

  // It gets the user's location to show the correct data (albums available in the country)
  const getUserLocation = async () => {
    geoLocation()
      .then((res) => {
        let data = res.data;
        setUserLocation(data.location.country.alpha2);
      })
      .catch((err) => {
        return err;
      });
  };

  useEffect(() => {
    getUserLocation();
  }, []);

  return (
    <div className="App">
      <SearchBar userLocation={userLocation} />
      <RootNavigation />
    </div>
  );
}

export default App;
