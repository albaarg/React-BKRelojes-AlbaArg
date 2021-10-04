import React, { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

// Muestra todo el detalle de los productos
const Item = (prop) => {
  const { id, imageId, tittle, description, categoryId, price, stock } =
    prop.element;
  const [finish, setFinish] = useState(true);

  const _handleAdd = (cantidad) => () => {
    prop.onAddCart(cantidad);
    setFinish(false);
  };

  return (
    <>
      <div className="col-md-6">
        <img className="image-container" src={imageId} alt="" />
        <div class="container mx-auto">
          <h1>{tittle.toUpperCase()}</h1>
          <h2>{description}</h2>
          <h2>{categoryId}</h2>
          <h2>${price} </h2>
          <h2>{stock} En stock! </h2>
        </div>

        <Link to={`/item/${id}`}>
          {" "}
          <Button className="btn btn-light">Ver detalle</Button>{" "}
        </Link>
        {finish ? (
          <ItemCount initial={1} stock={20} onAdd={_handleAdd} />
        ) : (
          <Link to={"/Cart"}>
            {" "}
            <div className="d-flex justify-content-center align-items-baseline">
              {" "}
              <Button variant="secondary">Finalizar Compra</Button>
            </div>{" "}
          </Link>
        )}
      </div>
    </>
  );
};

export default Item;
