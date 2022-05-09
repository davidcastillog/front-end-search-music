import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Pagination from "@mui/material/Pagination";


const PaginationMU = ({ setCurrentAlbums }) => {
  const [totalPages, setTotalPages] = useState(0);
  const [albumsPerPage] = useState(20);
  const [currentPage, setCurrentPage] = useState(1);

  // Allows to dispatch actions to the redux store
  const albums = useSelector((state) => state.songs);

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

  // If a new search is made, the currentPage is set to 1
  useEffect(() => {
    setCurrentPage(1);
  }, [albums]);

  return (
    <>
      <Pagination onChange={handleChange} count={totalPages} color="primary" />
    </>
  );
};

export default PaginationMU;
