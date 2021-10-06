import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import { NavLink } from "react-router-dom";
import "../NavBar/NavBar";
import HomeIcon from "@material-ui/icons/Home";

const NavBar = () => {
  return (
    <div className="topnav">
      <div className="d-flex align-items-center justify-content-between py-5 bg-light">
        <h1 className="m-6 animate-bounce w-10 h-10 ">
          <strong>BK Relojes</strong>
        </h1>
        <nav className="w-full block flex-grow lg:flex lg:items-centers lg:w-auto text-center">
          <div className="text-sm lg:flex-grow">
            <NavLink
              to={"/"}
              className="block mt-4 lg:inline-block lg:mt-0 uppercase text-teal-200 text-black hover:text-purple-400 md:no-underline... mr-4 "
            >
              <HomeIcon />
            </NavLink>

            <NavLink
              exact
              to={"/categoria/Modelo Hombre"}
              className="block mt-4 lg:inline-block lg:mt-0 uppercase text-teal-200 text-black hover:text-purple-400 md:no-underline... mr-4 "
            >
              Hombre
            </NavLink>
            <NavLink
              exact
              to={"/categoria/Modelo Mujer"}
              className="block mt-4 lg:inline-block lg:mt-0 uppercase text-teal-200 text-black hover:text-purple-400 md:no-underline... mr-4"
            >
              Mujer
            </NavLink>
            <NavLink
              exact
              to={"/categoria/Modelo Unisex"}
              className="block mt-4 lg:inline-block lg:mt-0 uppercase text-teal-200 text-black hover:text-purple-400 md:no-underline... mr-4"
            >
              Unisex
            </NavLink>
          </div>
        </nav>
        <CartWidget />
      </div>
    </div>
  );
};

export default NavBar;
