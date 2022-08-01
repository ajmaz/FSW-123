import React, { useState } from "react";

function GiphySearch(props) {
  const [searchText, setSearchText] = useState("");
  const onSearchChange = (e) => {
    // Update state
    setSearchText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSearch(searchText);
    e.currentTarget.reset();
  };

  return (
    <form onSubmit={handleSubmit}> 
    <b>Enter a word or phrase </b>
      <input
        type="search"
        onChange={onSearchChange}
        name="search"
        placeholder="Search..."
      />
      <button type="submit">
        search
      </button>
    </form>
  );
}

export default GiphySearch;