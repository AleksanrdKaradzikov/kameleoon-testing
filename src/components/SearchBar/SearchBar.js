import React from 'react';
import './SearchBar.css';

const SearchBar = (props) => {
  return (
    <input className="search-input"
           type="text"
           {...props} />

  );
};

export default SearchBar;
