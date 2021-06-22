import React from 'react';
import Item from '../Item/Item';


const ItemList = (prop) => {
    const {productos}=prop

    return (

        
        <>
    
        {productos.map(element => {
            return (
             <div className="product" key= {element.tittle}>
             <p>tittle:{element.tittle}</p>
             <p>description:{element.description}</p>
             <p>price:{element.price}</p>
             </div>
           ); 
           
           
           

        })}

         </>
         

    )
     
   
    
}



export default ItemList;