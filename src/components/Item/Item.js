import React from 'react';
import './Item.css'
// Muestra todo el detalle de los productos

const Item = ({id, img, title, descripcion, precio}) => {
      
      return (
        <div className="producto-info">
        <div className="artc-img-item">
            <img src={img} className="img-fluid" alt="producto"/>
        </div>
        <div className="item-info-producto">
            <h4>
                <a href="/">{title}</a>
            </h4>
            <div>{description}</div>
            <div className="producto_precio">
                <div className="grid-precio">
                    <span className="money">${precio}</span>
                </div>
            </div>
            <div>
                <Link to={`/item/${id}`}><button className="btn shop">Ver Info</button></Link>
            </div>
        </div>
       
    </div>



      )

}



export default Item;