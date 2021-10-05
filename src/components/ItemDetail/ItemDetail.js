import React, { useState, useContext } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import CartContext from "../../Context/CartContext";

const ItemDetail = (prop) => {
  const { imageId, tittle, description, price, categoryId, colour, stock } =
    prop;
  const [finish, setFinish] = useState(true);

  const contextCart = useContext(CartContext);

  const onAdd = (cantidad) => () => {
    contextCart.addToCart({ ...prop, cantidad });
    setFinish(false);
  };

  return (
    <div>
      <h4 class="p-3 m-4 ">{tittle}</h4>
      <img
        class=" object-center md:object-top ..."
        src={imageId}
        alt="img-item"
      />
      <div class="bg-indigo-100 md:bg-bg-indigo-200 rounded md:rounded-lg ... p-3 m-3">
        <p class="text-purple-700 text-sm uppercase text-left md:text-center ...">
          {description}
        </p>
        <p class="text-purple-700 text-sm uppercase text-left md:text-center ...">
          {categoryId}
        </p>
        <p class="text-purple-700 text-sm uppercase text-left md:text-center ...">
          ${price}
        </p>
        <p class="text-purple-700 text-sm uppercase text-left md:text-center ...">
          {colour}
        </p>
        <p class="text-purple-700 text-sm uppercase text-left md:text-center ...">
          {stock} En stock!{" "}
        </p>
      </div>

      {finish ? (
        <ItemCount initial={1} stock={20} onAdd={onAdd} />
      ) : (
        <Link to={"/Cart"}>
          <Button variant="secondary">Finalizar Compra</Button>
        </Link>
      )}
    </div>
  );
};

export default ItemDetail;
