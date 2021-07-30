import React from "react";
import "../NavBar/NavBar";
import CartWidget from "../CartWidget/CartWidget";
import logo from "../../assets/img/b.r.png";
import { NavLink } from "react-router-dom";
import { Button, Nav, Navbar, NavDropdown } from "react-bootstrap";

const NavBar = () => {
  return (
    <div className="d-flex align-items-center justify-content-between p-2 bg-light">
      <NavLink to={"/"} className="container-logo">
        <img src={logo} className="imgLogo" />
      </NavLink>
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
