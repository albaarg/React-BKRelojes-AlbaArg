import React, { useState } from "react";
import "./Item.css";
import ItemCount from "../ItemCount/ItemCount";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

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
      <div
        className="d-flex justify-content-row"
        style={{ marginBottom: "12rem" }}
      >
        <div className="col-md-4">
          <Card>
            <Card.Img src={imageId} />
            <Card.Body>
              <Card.Title className="card-tittle">{tittle.toUpperCase()}</Card.Title>
              <Card.Text className="card-description">{description}</Card.Text>
              <Card.Text className="card-category">{categoryId}</Card.Text>
              <Card.Text className="card-price">${price} </Card.Text>
              <Card.Text className="card-stock">En stock:{stock} </Card.Text>
              <Link to={`/item/${id}`}>
                {" "}
                <Button className="btn btn-light">Ver detalle</Button>{" "}
              </Link>
            </Card.Body>
          </Card>
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
      </div>
    </>
  );
};

export default Item;
