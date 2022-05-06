import { useState } from "react";
import { getAlbums } from "../../services/MusicWS"

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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search for an album"
        value={searchTerms}
        onChange={handleChange}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
