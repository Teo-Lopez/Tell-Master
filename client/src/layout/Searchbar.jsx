import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Select from "./Select";
import { Link } from "react-router-dom";

const SearchBar = styled.span`
  display: flex;
`;
function Searchbar({ cb }) {
  const [search, setSearch] = useState([]);
  const [searchText, setSearchText] = useState("");

  const onSearch = (text) => setSearchText(text);

  useEffect(() => {
    console.log(cb);
    cb(searchText).then((result) => setSearch(result));
    return () => {
      setSearch([]);
    };
  }, [searchText]);

  return (
    <SearchBar>
      <Select onSearch={onSearch}>
        {search.map((game) => (
          <li className="dropdown__select-option" role="option">
            <Link to={`/read/${game._id}`}>{game.title}</Link>
          </li>
        ))}
      </Select>
    </SearchBar>
  );
}

export default Searchbar;
