import { useEffect, useState } from "react";
import {
  PaginationMU,
  AlbumCard,
  SearchBar,
  List,
  ToggleButtons,
} from "../components";
import { geoLocation } from "../services/GeoLocation";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export const Home = () => {
  const [albums, setAlbums] = useState([]);
  const [currentAlbums, setCurrentAlbums] = useState([]);
  const [userLocation, setUserLocation] = useState("ES");
  const [view, setView] = useState("grid");

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
    <>
      <CssBaseline />
      <SearchBar setAlbums={setAlbums} userLocation={userLocation} />
      <Container maxWidth="lg" sx={{ mb: 3, mt: 10 }}>
        {albums.length > 0 && (
          <>
            <Grid
              container
              className="toggle-buttons"
              direction="column"
              justifyContent="center"
              alignItems="flex-end"
            >
              <ToggleButtons view={view} setView={setView} />
            </Grid>
            <Grid container justifyContent="center" paddingTop={2}>
              <Typography variant="button" gutterBottom>
                Albums found: {albums.length}
              </Typography>
            </Grid>
            <Grid container justifyContent="center" paddingTop={2}>
              {/* Checking if the view is grid or list. If it is grid, it will render the
               AlbumCard component, if it is list, it will render the TableList component. */}
              {view === "grid" ? (
                <AlbumCard currentAlbums={currentAlbums} />
              ) : (
                <List currentAlbums={currentAlbums} />
              )}
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
