import React from "react";
import "./NavBar.scss";

const NavBar = () => {
  const className = "NavBar";

  return (
    <div className={className}>
      <h1 className={className + "__heading"}>JUNGLETECH</h1>
    </div>
  );
};

export default NavBar;
