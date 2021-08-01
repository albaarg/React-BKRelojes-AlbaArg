import React, { useState, useContext } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import CartContext from "../../Context/CartContext";
import "./ItemDetail.css";

const ItemDetail = (prop) => {
  const { imageId, tittle, description, price, categoryId, colour } = prop;
  const [finish, setFinish] = useState(true);

  const contextCart = useContext(CartContext);

  const onAdd = (cantidad) => () => {
    contextCart.addToCart({ ...prop, cantidad });
    setFinish(false);
  };

  return (
   <div style={{marginTop: '5rem', marginBottom: '3rem'}}>
            <div className='text-center'>
                <h4 className='tittle'>{tittle}</h4>
               <img src={imageId} alt="img-item" />
                <h1 className='detailDescription'>{description}</h1>
                <p className='detailCategory'>{categoryId}</p>
                <p className='detailPrice'>${price}</p>
                <hr/>
                <p className='detailColour'>{colour}</p>
            {finish ? (
              <ItemCount initial={1} stock={20} onAdd={onAdd} />
            ) : (
              <Link to={"/Cart"}>
                <Button variant="secondary">Finalizar Compra</Button>
              </Link>
            )}
          </div>
        </div>
  );
};

export default ItemDetail;
