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
            <i className="fas fa-shopping-cart"></i>
            <span className="conteo" id="cont1">
              {totalItems}
            </span>
          </Link>        
        </li>
      </ul>
      <div className="shopping-cart">
        <div className="shopping-cart-header">
          <i className="fa fa-shopping-cart cart-icon"></i>
          <span className="conteo" id="cont2">
            0
          </span>
          <div className="shopping-cart-total">
            <span className="lighter-text">Total:</span>
            <span className="main-color-text" id="total">
              $0
            </span>
          </div>
        </div>
        <ul className="shopping-cart-items" id="listaPro"></ul>
      </div>
    </>
  );
};

export default CartWidget;
