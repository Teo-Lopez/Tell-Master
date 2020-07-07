import React, { useState } from "react";

function SearchInput({ onSearch, className }) {
  const [searchText, setSearchText] = useState("");

  function onSubmit(e) {
    e.preventDefault();
  }

  function onChange(e) {
    const { value } = e.currentTarget;
    setSearchText(value);
    onSearch(value);
  }

  return (
    <form autoComplete="off" className={className} onSubmit={onSubmit}>
      <label>
        <input name="searchbar" type="text" value={searchText} onChange={onChange}></input>
      </label>
    </form>
  );
}

export default SearchInput;
