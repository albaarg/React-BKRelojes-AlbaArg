import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import { NavLink } from "react-router-dom";
import "../NavBar/NavBar";
import { Button, Nav, Navbar, NavDropdown } from "react-bootstrap";

const NavBar = () => {
  return (
    <div className="d-flex align-items-center justify-content-between p-2 bg-light">
      <h1>BK Relojes</h1>
      <ul className="d-flex align-item-center" style={{ listStyle: "none" }}>
        <Navbar bg="light" variant="light">
          <Nav className="mr-auto">
            <NavLink to={"/"} className="container-inicio">
              <Button className="btn btn-light">Inicio</Button>
            </NavLink>
            <NavDropdown title="Catálogo" id="basic-nav-dropdown ">
              <NavLink
                exact
                to={"/categoria/Modelo Hombre"}
                className="dropdown-item"
              >
                Hombre
              </NavLink>
              <NavLink
                exact
                to={"/categoria/Modelo Mujer"}
                className="dropdown-item"
              >
                Mujer
              </NavLink>
              <NavLink
                exact
                to={"/categoria/Modelo Unisex"}
                className="dropdown-item"
              >
                Unisex
              </NavLink>
            </NavDropdown>
          </Nav>
        </Navbar>
      </ul>
      <CartWidget />
    </div>
  );
};

export default NavBar;
