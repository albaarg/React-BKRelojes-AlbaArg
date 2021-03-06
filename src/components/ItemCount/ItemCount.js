import React, { useState } from "react";
import "./ItemCount.css";

const ItemCount = (prop) => {
  const { initial, stock, onAdd } = prop;
  const [cantidad, setCantidad] = useState(initial);

  const addItems = () => {
    if (cantidad < stock) {
      setCantidad((prevState) => prevState + 1);
    }
  };

  const removeItems = () => {
    if (cantidad > 1) {
      setCantidad((prevState) => prevState - 1);
    }
  };

  return (
    <div className="container counter mt-3 ">
      <div className="d-flex justify-content-center py-5">
        <div className="d-flex justify-content-center align-items-baseline">
          <button type="button" className="btn btn-light" onClick={removeItems}>
            -
          </button>
          <span className="counterAmount">{cantidad}</span>
          <button type="button" className="btn btn-light" onClick={addItems}>
            +
          </button>
        </div>

        <button
          class="py-2 px-4 bg-purple-300 text-white font-semibold rounded-lg shadow-md hover:bg-purple-200 focus:outline-none focus:ring-2 focus:bg-purple-400 focus:ring-opacity-75"
          onClick={onAdd(cantidad)}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};
export default ItemCount;
