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
    items > stock &&
     setItems(items -1) 
    }
   return (
    
    
        <div className="container counter mt-5 ">
        <div className='d-flex justify-content-center align-items-baseline'>
        <i className="far fa-minus-square countbutton" onClick={removeItems}></i>
        <span className="counterAmount">{items}</span>
        <i className="far fa-plus-square countbutton" onClick={addItems}></i>
        </div>
        <button className='btn shop' onClick={() =>onAdd()}>
         Comprar
        </button>
    </div>
    
          ) 


}
export default ItemCount;