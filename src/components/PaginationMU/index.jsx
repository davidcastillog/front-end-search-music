import Pagination from "@mui/material/Pagination";
import { useState, useEffect } from "react";

const PaginationMU = ({ albums, setCurrentAlbums }) => {
  const [totalPages, setTotalPages] = useState(1);
  const [albumsPerPage] = useState(20);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCurrentAlbums(
      albums.slice(
        currentPage * albumsPerPage - albumsPerPage,
        currentPage * albumsPerPage
      )
    );
  }, [currentPage, albums, albumsPerPage, setCurrentAlbums]);

  useEffect(() => {
    setTotalPages(Math.ceil(albums.length / albumsPerPage));
  }, [albums.length, albumsPerPage]);

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
