import React, {useState, useContext} from 'react';
import ItemCount from '../ItemCount/ItemCount';
import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import CartContext from '../../Context/CartContext';

const ItemDetail = (prop) => {
const {img, tittle, description, price, category, colour} = prop
const [cantidad,setCantidad] = useState(1)
const [finish, setFinish]= useState(false)
const [productLocal, setProductLocal]= useState()
const contextCart = useContext(CartContext)

const onSelectProduct= () => {
  setProductLocal({...prop, quantity: 1})
};

const onAdd = color => () => {
  console.log("color => ", color)
  contextCart.addToCart(productLocal)
  console.log(setCantidad)
  setProductLocal()
  setFinish(true)
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
      productLocal ? (
      <div>
         <div onClick={onAdd('color1')}>
           <Button variant="outline-dark"> Blanco</Button>
            </div>
              <div onClick={onAdd('color2')}>
             <Button variant="outline-dark"> Negro</Button>
              </div>
          <div onClick={onAdd('color3')}>
         <Button variant="outline-dark"> Rosa</Button>
       </div>
      </div>
      ) : 
       finish ?<Link to={'/Cart'}> <Button variant="secondary">Finalizar Compra</Button></Link> :
      <ItemCount initial={1}  addToCart={()=>{}} cantidad={cantidad} stock={20} onAdd={onSelectProduct}/>      
     }
    </div>
  </div>
  </div>         
</div>
    
)

    
}



export default ItemDetail;