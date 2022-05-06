import { useState } from "react";
import { PaginationMU, AlbumCard, SearchBar } from "../components";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

export const Home = () => {
  const [albums, setAlbums] = useState([]);
  const [currentAlbums, setCurrentAlbums] = useState([]);

  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg" fixed>
        <SearchBar setAlbums={setAlbums} />
        <p>Total Albums: {albums.length}</p>
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
