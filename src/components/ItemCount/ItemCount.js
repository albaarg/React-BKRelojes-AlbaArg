import React,{ useState } from 'react';
import './ItemCount.css'



const ItemCount = (prop) => {
    const {initial, stock, onAdd} = prop
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
        <button  type="button" className="btn btn-light" onClick={removeItems}>-</button>
        
        <span className="counterAmount">{items}</span>
        <button type="button" className="btn btn-light" onClick={addItems}>+</button>
        </div>
        <div className='d-flex justify-content-center align-items-baseline'>
        <button className='btn shop' onClick={() =>onAdd()}>
         Agregar al carrito
        </button>
        </div>
    </div>
    
          ) 


}
export default ItemCount;