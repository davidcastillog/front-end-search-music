import { useState } from "react";
import { getAlbums } from "../../services/musicWS";

const SearchBar = ({ setAlbums }) => {
  const [searchTerms, setSearchTerms] = useState("");

  const handleChange = (e) => {
    setSearchTerms(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getAlbums(searchTerms)
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
        placeholder="Search for a song"
        value={searchTerms}
        onChange={handleChange}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
