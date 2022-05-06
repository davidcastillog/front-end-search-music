import { useState } from "react";
import { PaginationMU, AlbumCard, SearchBar } from "../components";

export const Home = () => {
  const [albums, setAlbums] = useState([]);
  const [currentAlbums, setCurrentAlbums] = useState([]);

  return (
    <>
      <SearchBar setAlbums={setAlbums} />
      {albums.length > 0 && (
        <>
          <PaginationMU albums={albums} setCurrentAlbums={setCurrentAlbums} />
          <AlbumCard albums={currentAlbums} />
        </>
      )}
    </>
  );
};
