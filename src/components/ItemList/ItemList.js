import React from 'react';
import Item from '../Item/Item';



const ItemList = (prop) => {

   const todosLosProductos = prop.productos
    
    return (
        <>
            {
               todosLosProductos.map(item=> (
                    <Item key={item.id} element={item} />
                    
               ))
               
            }
            
        </>
    )      
   
    
}



export default ItemList;