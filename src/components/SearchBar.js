import React from 'react';
import './SearchBar.css';

const SearchBar = ({ setSearchTerm }) => {
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search Pokémon"
      onChange={handleSearch}
      className="search-bar"
    />
  );
};

export default SearchBar;
