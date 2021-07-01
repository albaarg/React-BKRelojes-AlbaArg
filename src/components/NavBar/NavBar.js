import React from 'react';
import '../NavBar/NavBar';
import CartWidget from '../CartWidget/CartWidget';
import logo from '../../assets/img/b.r.png';
import {Link, NavLink} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import {Button} from 'react-bootstrap';



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
                <NavLink to={'/category'} className="dropdown-category"> 
                <div className="dropdown">
                 <button className="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">         
                 Catálogo
                 </button>
                 <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                 <Link to={'/category/:hombre'} className="dropdown-item" href="#">Hombre</Link>
				<Link to={'/category/:mujer'} className="dropdown-item" href="#">Mujer</Link>
				<Link to={'/category/:unisex'} className="dropdown-item" href="#">Unisex</Link>
                </div>
                </div>
                </NavLink>
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