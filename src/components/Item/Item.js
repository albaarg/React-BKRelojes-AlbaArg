import React from 'react';
import './Item.css'

// Muestra todo el detalle de los productos

const Item = (prop) => {
    const {img, title, description, precio} = prop

      return (
             
            <div className="producto-info">
            <div className="artc-img-item">
                <img src={img} className="img-fluid" alt="producto"/>
            </div>
            <div className="item-info-producto">
                <h4>
                    <a href="/">{title} Reloj Smartwatch</a>
                </h4>
                <div>{description}Color rojo</div>
                <div className="producto_precio">
                    <div className="grid-precio">
                        <span className="money">$1000{precio}</span>
                    </div>
                </div>
                
            </div>
           
        </div>
    


      )

}



export default Item;