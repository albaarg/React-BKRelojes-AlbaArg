import React from 'react';
//import CartContex from '../../Context/CartContext';
import Table from 'react-bootstrap/Table';
import {Link} from 'react-router-dom';
import {Button} from 'react-bootstrap';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';

export const CartList = (prop) => {
   const {Cart, clearCart, total, removeItem, precioTotal} = (prop)

   precioTotal ()

   return (
      <>
         <Table striped bordered hover>
          <thead>
             <tr>
             <th>Nombre</th>
             <th>Modelo</th>
             <th>Cantidad</th>
             <th>Username</th>
             <td>Precio</td>
             <td>Total </td>
             </tr>
             </thead>
             
             <>
             <tbody>
                    {          
                    Cart.map((item) => {
                       return (
                      <tr key={item.id}>
                      <td>{item.tittle}</td>
                      <td>{item.category}</td>
                      <td>{item.price}</td>
                      <td>{item.cantidad}</td>
                      <td>{item.cantidad * item.price}</td>
                      <td>
                      <DeleteOutlinedIcon onClick={() => removeItem(item)} />
                       </td> 
                       </tr>                 
                        )
                        } 
                        )                   
                    }  
               </tbody>        
                </>                

            </Table> 
            <hr/>
            <div className='total text-left'>
                <p>Subtotal: ${total} </p>
                <Link to={'/checkout'}>
                    <Button variant='outline-info' style={{marginRight: '1.5rem'}}>Finalizar Compra</Button> 
                </Link>
                <Button variant='outline-danger' onClick={ () => clearCart()}>Vaciar Carrito</Button>
            
            </div>
        </>                  

   )

}