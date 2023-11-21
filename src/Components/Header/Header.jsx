import React from "react";
import { useSelector } from "react-redux";
import "./Header.scss";

const Header = () => {
  const className = "Header";
  const List = useSelector((state) => {
    return state.ReadingList.data;
  });

  const notDoneCount = List.reduce((acc, curr) => {
    if (curr.attributes.done === false) {
      return acc = acc + 1;
    }
    return acc;
  }, 0);

  return (
    <header htmlFor="addToDo" className={className + "__header"}>
      <h1>
        <span id="count">{notDoneCount} </span>
        <span>Tasks to do</span>
      </h1>
    </header>
  );
};

export default Header;
