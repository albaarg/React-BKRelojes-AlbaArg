import React,{ useState } from 'react';
import './ItemCount.css'



const ItemCount = (prop) => {
    const {initial, stock, cantidad, onAdd} = prop
    const [items, setItems] = useState(initial)
    const addItems = () => {
    items < stock &&
    setItems(items +1)
    }
    const removeItems = () => {
    items > 1 &&
     setItems(items -1) 
    }   
    
   return (

        <div className="container counter mt-3 ">
        <div className= 'd-flex justify-content-center align-items-baseline'>
        <button  type="button" className="btn btn-light" onClick={removeItems}disabled={cantidad === 0}>-</button>
        <p className="cantidad">{cantidad}</p>
        <span className="counterAmount">{items}</span>
        <button type="button" className="btn btn-light" onClick={addItems}disabled={stock === 1}>+</button>
        </div>
        <button className='btn shop' onClick={() =>onAdd()}>
         Agregar al carrito
        </button>
    </div>
    
          ) 


}
export default ItemCount;