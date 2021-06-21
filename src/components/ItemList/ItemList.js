import React from 'react';
import Item from '../Item/Item';

const ItemList = (prop) => {
    const {productos}= prop

    return(

        
            
          
            <Item productos={productos}></Item>
         
         
        
    );
   
    
}



export default ItemList;
