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
              <i className="fas fa-shopping-cart m-4 p-3 "> {totalItems}</i>
            </div>
          </Link>
        </li>
      </ul>
    </>
  );
};

export default CartWidget;
