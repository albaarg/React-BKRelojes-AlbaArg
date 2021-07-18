import React, { useContext } from 'react';
import {Link} from 'react-router-dom';
import CartContext from '../../Context/CartContext';
import {CartList} from '../CartList/CartList';
const Cart = () =>{
    const { Cart, clear, removeItem }= useContext(CartContext)
    
    return( 
        
        <div className='mt-5 container' style={{height: '80vh'}}>
        <h1 className='text-left miCarrito' style={{marginTop:'7rem', marginBottom:'1.5rem'}} >Mi Carrito de Compras</h1>
        {   
            Cart.length === 0 ? <div className='mt-3 text-left'>Ups! Tu carrito está vacío, ve a la <Link to='/'> Tienda</Link> y empieza a comprar</div>
            : <CartList Cart={Cart} clearCart={clear}  removeItem={removeItem} />
        }
        </div>
    )
}
export default Cart;
