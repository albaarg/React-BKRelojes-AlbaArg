import React from 'react';
import '../NavBar/NavBar';
import CartWidget from '../CartWidget/CartWidget';
import logo from '../../assets/img/b.r.png';
import {NavLink} from 'react-router-dom';
import {Button, Nav, NavDropdown} from 'react-bootstrap';



const NavBar = () => {
      return  ( 
             <div className='d-flex align-items-center justify-content-between p-2 bg-light'>
             <NavLink to={'/'}  className="container-logo">
             <img src={logo} className="imgLogo"/>
             </NavLink>
             <ul className='d-flex align-item-center' style={{listStyle:'none'}}>
                 <Nav className="mr-auto">
                 <NavLink to={'/category'} className="container-inicio">
                 <Button className="btn btn-light">Inicio</Button>
                 </NavLink>
                 <NavDropdown title="Catalogo"  classname="dropdown-menu ">
                 <NavLink to={'/categorias/:category/hombre'} className="dropdown-item" component={NavDropdown.Item}>Hombre</NavLink>		
                 <NavLink to={'/categorias/:category/mujer'} className="dropdown-item" component={NavDropdown.Item}>Mujer</NavLink>		
                 <NavLink to={'/categorias/:category/unisex'} className="dropdown-item" component={NavDropdown.Item}>Unisex</NavLink>
                 </NavDropdown>
                 <NavLink to={'/contacto'} className="container-contacto">
                 <Button className="btn btn-light">Contacto</Button>
                 </NavLink>
                 </Nav>
            </ul>
            <CartWidget/>    
            </div>  


      )   
}

export default NavBar;