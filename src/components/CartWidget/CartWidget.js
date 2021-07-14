import React, { useContext } from 'react'
import CartContext from '../../Context/CartContext'


const CartWidget = () => {

    const {totalItems} = useContext(CartContext)
    return (
        <>
          <ul className='navbar-right'>
            <li>
              <a id='cart'>
                <i className='fas fa-shopping-cart'></i><span className='conteo' id='cont1'>{totalItems}</span>
              </a>
            </li>
          </ul>
          <div className='shopping-cart'>
            <div className='shopping-cart-header'>
              <i className='fa fa-shopping-cart cart-icon'></i><span className='conteo' id='cont2'>0</span>
              <div className='shopping-cart-total'>
                <span className='lighter-text'>Total:</span>
                <span className='main-color-text' id='total'>$0</span>
              </div>
            </div>
      
            <ul className='shopping-cart-items' id='listaPro'>
      
            </ul>
          </div>
        </>
      )
}

export default CartWidget
