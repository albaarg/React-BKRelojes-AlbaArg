import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import { NavLink } from "react-router-dom";
import "../NavBar/NavBar";
import HomeIcon from "@material-ui/icons/Home";

const NavBar = () => {
  return (
    <div className="d-flex align-items-center justify-content-between py-5 bg-light">
      <h1 className="m-6 animate-bounce w-10 h-10 ">BK Relojes</h1>
      <nav className="flex items-center m-2 space-x-24 ">
        <NavLink
          to={"/"}
          className="uppercase  hover:text-purple-400 md:no-underline... text-black"
        >
          <HomeIcon />
        </NavLink>

        <NavLink
          exact
          to={"/categoria/Modelo Hombre"}
          className="uppercase  hover:text-purple-400 md:no-underline... text-black "
        >
          Hombre
        </NavLink>
        <NavLink
          exact
          to={"/categoria/Modelo Mujer"}
          className="uppercase hover:text-purple-400 md:no-underline text-black"
        >
          Mujer
        </NavLink>
        <NavLink
          exact
          to={"/categoria/Modelo Unisex"}
          className="uppercase  hover:text-purple-400 md:no-underline... text-black"
        >
          Unisex
        </NavLink>
      </nav>
      <CartWidget />
    </div>
  );
};

export default NavBar;
