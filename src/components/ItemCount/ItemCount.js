import React,{ useState } from 'react';
import './ItemCount.css'


const ItemCount = (prop) => {
    const {initial, stock, onAdd} = prop
    const [items, setItems] = useState(initial)
    const addItems = () => {
    items < stock ? setItems(items+1) : alert('no hay mas stock')
    }
    const removeItems = () => {
    items > stock ? setItems(items -1) : alert ('superaste la compra minima')
    }
   return (
    
    
        <div className="container counter mt-2 ">
        <div className='d-flex justify-content-center align-items-baseline'>
        <i className="far fa-plus-square countbutton" onClick={removeItems}></i>
        <i className="far fa-minius-square countbutton"></i>
        <span className="counterAmount">{items}</span>
        <i className="far fa-plus-square countbutton" onClick={addItems}></i>
        </div>
        <button className='btn shop' onClick={() => onAdd (items)}>
         Comprar
        </button>
    </div>
    
          ) 


}
export default ItemCount;