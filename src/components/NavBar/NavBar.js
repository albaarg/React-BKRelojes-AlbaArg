import React from 'react';
import '../NavBar/NavBar';
import CartWidget from '../CartWidget/CartWidget';


function NavBar () {
      return ( <nav style={{borderBottom:'solid 2px white'}}>
            <h1> Candle Shop </h1>
            <ul>
                <li><p>Home</p></li>
                <li><p>Productos</p></li>
                <li><p>Contacto</p></li>
            </ul>

            <CartWidget/>

        </nav>

      )   
}

export default NavBar;