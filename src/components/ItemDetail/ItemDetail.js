import React from 'react';
import ItemCount from '../ItemCount/ItemCount';

const onAdd= () => {}
const ItemDetail = (prop) => {
const {img, tittle, description, price, category, colour} = prop.element

return(
    
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
                             </div>
                    <div className="producto_categoria" >
                    <div>{category}</div>
                    </div>
                    <div className="producto_color" >
                    <div> {colour}</div>
                    <ItemCount initial={1} stock={20} onAdd={onAdd}/> 
                    </div>
                </div>
                </div>         
        </div>
    
)

    
}



export default ItemDetail;