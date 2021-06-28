import React from 'react';
import '../NavBar/NavBar';
import CartWidget from '../CartWidget/CartWidget';
import logo from '../../assets/img/b.r.png';



const NavBar = () => {
      return  ( 
          <div className='d-flex align-items-center justify-content-between p-2 bg-light'> 

             <img src={logo} className="imgLogo"/>

             <ul className='d-flex align-item-center' style={{listStyle:'none'}}>

                <li className='m-2'>Home</li>
                <li className='m-2'>Catálogo</li>
                <li className='m-2'>Contacto</li>
            </ul>

            <CartWidget/>
          </div>
        

      )   
}

export default NavBar;