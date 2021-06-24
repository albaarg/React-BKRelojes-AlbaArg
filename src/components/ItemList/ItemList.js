import React from 'react';
import Item from '../Item/Item';



const ItemList = (prop) => {
    const {productos}=prop

    return (
        <>
    
        {productos.map(element => {
            return (
                <Item key={element.key} element={element} />
            )

                
          


        })}

        </>
    )  

     
   
    
}



export default ItemList;