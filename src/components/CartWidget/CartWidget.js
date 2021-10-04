import React, { useContext } from "react";
import CartContext from "../../Context/CartContext";
import "./CartWidget.css";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { totalItems } = useContext(CartContext);
  return (
    <>
      <ul className="navbar-right">
        <li>
          <Link to={`/cart`} className="link">
            <div className="cart ">
              <i className="fas fa-shopping-cart"></i>
              <span className="conteo" id="cont1">
                {totalItems}
              </span>
            </div>
          </Link>
        </li>
      </ul>
      <div className="shopping-cart">
        <ul className="shopping-cart-items" id="listaPro"></ul>
      </div>
    </>
  );
};

export default CartWidget;
