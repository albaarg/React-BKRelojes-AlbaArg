import React, {useState, useContext} from 'react';
import ItemCount from '../ItemCount/ItemCount';
import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import CartContext from '../../Context/CartContext';

const ItemDetail = (prop) => {
const {img, tittle, description, price, category, colour} = prop
const [cantidad,setCantidad] = useState(1)
const [finish, setFinish]= useState(true)

const contextCart = useContext(CartContext)
console.log(contextCart)

const onAdd = (items) => {
  console.log(items)
  console.log(setCantidad)
  setFinish(false)
};

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
       {
       finish  ?<ItemCount initial={1}  addToCart={()=>{}} cantidad={cantidad} stock={20} onAdd={onAdd}/> :
       <Link to={'/Cart'}> <Button variant="secondary">Finalizar Compra</Button></Link>     
     }
    </div>
  </div>
  </div>         
</div>
    
)

    
}



export default ItemDetail;