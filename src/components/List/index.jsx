import * as React from "react";
import { AlbumImage } from "../index";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function List({ currentAlbums }) {
  // If the a name is longer than 50 characters, truncate it
  const shortName = (name) => {
    return name.length > 60 ? name.substring(0, 60) + "..." : name;
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 300 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Album</StyledTableCell>
            <StyledTableCell align="center">Album Name</StyledTableCell>
            <StyledTableCell align="center">Artist</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {currentAlbums.map((album, i) => (
            <StyledTableRow key={i}>
              <StyledTableCell align="center" component="th" scope="row">
                <AlbumImage album={album} />
              </StyledTableCell>
              <StyledTableCell align="center">
                {shortName(album.collectionName)}
              </StyledTableCell>
              <StyledTableCell align="center">
                {shortName(album.artistName)}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
