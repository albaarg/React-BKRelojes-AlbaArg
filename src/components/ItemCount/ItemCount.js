import React from 'react';
import './ItemCount.css'

const ItemCount = ({initial, stock, onAdd}) => {

    const [items, setItems] = useState(initial)

    const addItems = () => {
        
           setItems (items +1)
           
    }

     return (

        <div className='container counter mt-3'>
            <div className= 'flex align-items-center justify-content-center mb-1'>
                <i classNam="far fa-minus-square counterButton"></i>
                <span classNam="counterAmount">{items}</span>
                <i className="far fa-plus-square counterButton" onClick={addItems}></i>
                
            </div>
            <button className='btn btn-secondary w-100'>
                Agregar
            </button>

        </div>




     )



}
export default ItemCount;