import React from 'react';
import Item from '../Item/Item';



const ItemList = (prop) => {

   const todosLosProductos = prop.productos
    
    return (
        <>
            {
               todosLosProductos.map(produc => (
                    <Item key={produc.id} element={produc} />
               ))
            }
        </>
    )      
   
    
}



export default ItemList;