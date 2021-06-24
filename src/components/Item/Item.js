import React from 'react';
import './Item.css'
import ItemCount from '../ItemCount/ItemCount';


const onAdd = () => {}
// Muestra todo el detalle de los productos
const Item = (prop) => {
    
   const {img, tittle, description, price} = prop.element
    
     return (
         <>
              <div className="producto-info">
            <div className="artc-img-item">
                <img src={img} />
            </div>
            <div className="item-info-producto">
                <h4>
                    <a href="/">{tittle}</a>
                </h4>
                <div>{description}</div>
                <div className="producto_precio">
                    <div className="grid-precio">
                        <span className="money">{price}</span>
                        <ItemCount initial={1} stock={20} onAdd={onAdd}/>
                    </div>
                </div>
                </div>
           
        </div>
            
            
        </>

      )

}




      

export default Item;