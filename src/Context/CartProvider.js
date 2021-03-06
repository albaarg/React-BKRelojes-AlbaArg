import React, { useState, useEffect } from "react";
import CartContext from "../Context/CartContext";
import { Notyf } from "notyf";
import "notyf/notyf.min.css";

export const CartProvider = (prop) => {
  const { children } = prop;
  const [Cart, setCart] = useState([]);
  const [totalItems, setTotalItems] = useState(0);

  const tomoCantidad = (product) => {
    const filtro = [...Cart];
    filtro.forEach((i) => {
      if (i.id === product.id) {
        i.cantidad += product.cantidad;
      }
    });
    setCart(filtro);
  };

  useEffect(() => {
    let counter = 0;
    if (Cart.length > 0) {
      for (let i = 0; i < Cart.length; i++) {
        counter = (Cart[i].quantity || 1) + counter;
      }
      setTotalItems(counter);
    } else {
      setTotalItems(0);
    }
  }, [Cart]);

  const getFromCart = (id) => {
    return Cart.find((x) => x.id === id);
  };

  const isInCart = (productId) => {
    return Boolean(getFromCart(productId));
  };

  const clearCart = () => {
    setCart([]);
  };

  const removeItem = (id) => {
    const notyf = new Notyf();
    notyf.error({
      message: ` Eliminado`,
      duration: 2000,
    });

    setCart((prevState) => prevState.filter((product) => product.id !== id));
  };

  const quantityInStock = (obj) => {
    return obj.stock > obj.quantity;
  };

  const addToCart = (product) => {
    const notyf = new Notyf();
    notyf.success({
      message: `<div style='color: white'> Agregaste: <br/> ${product.cantidad} ${product.tittle} ${product.categoryId} al carrito </div>`,
      duration: 2000,
    });

    if (quantityInStock(product)) {
      console.log("No hay suficiente stock del producto");
      return;
    }

    if (isInCart(product.id)) {
      tomoCantidad(product);
    } else {
      setCart((prevState) => [...prevState, product]);
    }

    console.log("elemento agregado");
  };

  console.log("Cart => ", Cart);

  return (
    <CartContext.Provider
      value={{
        Cart,
        addToCart,
        isInCart,
        removeItem,
        clearCart,
        totalItems,
        cartSize: Cart.length,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
