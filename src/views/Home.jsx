import { useState } from "react";
import { PaginationMU, AlbumCard, List, ToggleButtons } from "../components";
import { useSelector } from "react-redux";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export const Home = () => {
  const [currentAlbums, setCurrentAlbums] = useState([]);
  const [view, setView] = useState("grid");

  const albums = useSelector((state) => state.songs);
  const results = useSelector((state) => state.results);

  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ mb: 3, mt: 10 }}>
        {albums.length > 0 && results && (
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
        {results === false && (
          <Grid container justifyContent="center" paddingTop={2}>
            <Typography variant="body2" gutterBottom>
              No results found.
            </Typography>
          </Grid>
        )}
      </Container>
    </>
  );
};
