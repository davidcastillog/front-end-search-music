import { useEffect, useState } from "react";
import { PaginationMU, AlbumCard, SearchBar } from "../components";
import { geoLocation } from "../services/GeoLocation";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export const Home = () => {
  const [albums, setAlbums] = useState([]);
  const [currentAlbums, setCurrentAlbums] = useState([]);
  const [userLocation, setUserLocation] = useState("ES");

  // It gets the user's actual country to get correct data to display
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
    <>
      <CssBaseline />
      <Container maxWidth="lg" fixed>
        <SearchBar setAlbums={setAlbums} userLocation={userLocation} />
        <Grid container justifyContent="center" paddingTop={2}>
          <Typography variant="body2" gutterBottom>
            Albums found: {albums.length}
          </Typography>
        </Grid>
        {albums.length > 0 && (
          <>
            <Grid container justifyContent="center" paddingTop={2}>
              <AlbumCard albums={currentAlbums} />
            </Grid>
            <Grid container justifyContent="center" paddingTop={2}>
              <PaginationMU
                albums={albums}
                setCurrentAlbums={setCurrentAlbums}
              />
            </Grid>
          </>
        )}
      </Container>
    </>
  );
};
