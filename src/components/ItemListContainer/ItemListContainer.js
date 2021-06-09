import React from 'react';
import ItemCount from '../ItemCount/ItemCount';


 const ItemListContainer = () => {

    const onAdd = (amount) => {
        console.log (amount)

    }
        return (
        <div className='mt-3'>
           <h1>  Bienvenidos a mi tienda </h1>
           <ItemCount initial={1} stock={20} onAdd= {onAdd} />
               
        </div>
    )
}

export default ItemListContainer;