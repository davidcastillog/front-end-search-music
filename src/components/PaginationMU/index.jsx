import Pagination from "@mui/material/Pagination";
import { useState, useEffect } from "react";

const PaginationMU = ({ albums, setCurrentAlbums }) => {
  const [totalPages, setTotalPages] = useState(0);
  const [albumsPerPage] = useState(20);
  const [currentPage, setCurrentPage] = useState(1);

  // Slice the albums array to show only the albums for the current page
  useEffect(() => {
    setCurrentAlbums(
      albums.slice(
        currentPage * albumsPerPage - albumsPerPage,
        currentPage * albumsPerPage
      )
    );
  }, [currentPage, albums, albumsPerPage, setCurrentAlbums]);

  // Setting the total number of pages based on the number of albums and the number of albums per page.
  useEffect(() => {
    setTotalPages(Math.ceil(albums.length / albumsPerPage));
  }, [albums.length, albumsPerPage]);

// When the user clicks on a page number. It sets the currentPage to the page number that was clicked
  const handleChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <>
      <Pagination onChange={handleChange} count={totalPages} color="primary" />
    </>
  );
};

export default PaginationMU;
