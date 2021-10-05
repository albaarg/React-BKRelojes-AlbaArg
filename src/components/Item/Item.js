import React, { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";

// Muestra todo el detalle de los productos
const Item = (prop) => {
  const { id, imageId, tittle, description, categoryId, price } = prop.element;
  const [finish, setFinish] = useState(true);

  const _handleAdd = (cantidad) => () => {
    prop.onAddCart(cantidad);
    setFinish(false);
  };

  return (
    <>
      <div className="col-md-6">
        <img className=" rounded-lg ..." src={imageId} alt="" />
        <div class="text-current mx-auto p-3 m-4">
          <div>
            <h1 class="text-3xl animate-pulse  text-center md:text-center ...">
              {tittle.toUpperCase()}
            </h1>
            <p class="text-sm uppercase text-left md:text-center ...">
              {description}
            </p>
            <p class="text-sm uppercase text-left md:text-center ...">
              {categoryId}
            </p>
            <p class="text-sm uppercase text-left md:text-center ...">
              ${price}{" "}
            </p>
          </div>
        </div>

        <Link to={`/item/${id}`}>
          {" "}
          <button class="py-2 px-4 bg-purple-200 text-white font-semibold rounded-lg shadow-md hover:bg-purple-300 focus:outline-none focus:ring-2 focus:bg-purple-400 focus:ring-opacity-75">
            Ver detalle
          </button>{" "}
        </Link>
        {finish ? (
          <ItemCount initial={1} stock={20} onAdd={_handleAdd} />
        ) : (
          <Link to={"/Cart"} className="link">
            {" "}
            <div className="d-flex justify-content-center align-items-baseline">
              {" "}
              <button class="no-underline py-2 px-4 bg-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-purple-400 focus:outline-none focus:ring-2 focus:bg-purple-200 focus:ring-opacity-75 ">
                Finalizar compra
              </button>
            </div>{" "}
          </Link>
        )}
      </div>
    </>
  );
};

export default Item;
