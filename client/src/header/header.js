import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const activeStyle = { color: "#black" };
  return (
    <nav>
      <NavLink to="/" activeStyle={activeStyle} exact>
        Home
      </NavLink>
      {" | "}
      <NavLink to="/Bear-River" activeStyle={activeStyle}>
        Bear River
      </NavLink>
      {" | "}
      <NavLink to="/Green-River" activeStyle={activeStyle}>
        Green River
      </NavLink>
      {" | "}
      <NavLink to="/Logan-River" activeStyle={activeStyle}>
        Logan River
      </NavLink>
      {" | "}
      <NavLink to="/Provo-River" activeStyle={activeStyle}>
        Provo River
      </NavLink>
      {" | "}
      <NavLink to="/Weber-River" activeStyle={activeStyle}>
        Weber River
      </NavLink>
      {" | "}
      <NavLink to="/about" activeStyle={activeStyle}>
        About
      </NavLink>
    </nav>
  );
};

export default Header;