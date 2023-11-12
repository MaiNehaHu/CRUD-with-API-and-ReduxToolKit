import React, { useState } from "react";
import "./NavBar.scss";
import axios from "axios";
import { FaSearch } from "react-icons/fa";

const NavBar = () => {
  const [displayInput, setDisplayInput] = useState(false);
  const [searcResult, setSearchResult] = useState("");
  const className = "NavBar";

  //handling the falg of input field display property
  const handleSearchIconClick = () => {
    setDisplayInput(!displayInput);
  };

  const handleSearch = (input) => {
    axios
      .get(
        `https://api.staging.sumize.io/api/todos?filters[desciption][$contains]=${input}`
      )
      .then((res) => {
        setSearchResult(res.data.data);
      })
      .catch((err) => {
        console.log("Error: ", err);
      });

    //update the searcResult
    console.log(searcResult);
  };

  return (
    <div className={className}>
      <h1 className={className + "__heading"}>JUNGLETECH</h1>
      <div className={className + "__searchInput"}>
        <input
          type="search"
          name="todo"
          placeholder="Search your task"
          onInput={(e) => handleSearch(e.target.value)}
          className={className + "__searchInput__input inputField"}
          style={{ display: displayInput ? "flex" : "none" }}
        />

        <FaSearch
          onClick={handleSearchIconClick}
          className={className + "__searchInput__icon"}
        />
      </div>
    </div>
  );
};

export default NavBar;
