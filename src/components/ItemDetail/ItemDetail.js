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
    <div className="producto-info">
      <div className="artc-img-item">
        <img src={imageId} />
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
          <div className="producto_categoria">
            <div>{categoryId}</div>
          </div>
          <div className="producto_color">
            <div> {colour}</div>
            {finish ? (
              <ItemCount initial={1} stock={20} onAdd={onAdd} />
            ) : (
              <Link to={"/Cart"}>
                <Button variant="secondary">Finalizar Compra</Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
