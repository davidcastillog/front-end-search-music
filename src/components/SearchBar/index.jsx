import { useState } from "react";
import { getAlbums } from "../../services/MusicWS";
import { styled, alpha } from "@mui/material/styles";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import StoreLogo from "../../assets/images/logomusic.png";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const SearchBar = ({ setAlbums, userLocation }) => {
  const [searchTerms, setSearchTerms] = useState("");

  // When the user types sets the searchTerms to the value of the input
  const handleChange = (e) => {
    setSearchTerms(e.target.value);
  };

  /*
  When the user clicks on the search button, make a call to the API
  to get the albums that match the search terms.
  */
  const handleSubmit = (e) => {
    e.preventDefault();
    getAlbums(searchTerms, userLocation)
      .then((res) => {
        setAlbums(res.data.results);
      })
      .catch((err) => {
        return err;
      });
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          {/* Store Logo */}
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ height: "50px", mr: 2, display: { xs: "none", md: "flex" } }}
          >
            <Link to="/">
              <img src={StoreLogo} alt="store-logo" height={50} />
            </Link>
          </Typography>
          {/* Store Logo for Small Screens */}
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              height: "50px",
              width: "100%",
              display: { xs: "flex", md: "none" },
            }}
          >
            <Link to="/">
              <img src={StoreLogo} alt="store-logo" height={50} />
            </Link>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}></Box>
          <Search sx={{ ml: 3 }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              onChange={handleChange}
              value={searchTerms}
              sx={{ width: "250px" }}
              inputProps={{ "aria-label": "search" }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSubmit(e);
                }
              }}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default SearchBar;
