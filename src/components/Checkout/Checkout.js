import React, { useState, useContext } from "react";
import CheckoutList from "./CheckoutList";
import CartContext from "../../Context/CartContext";
import { getFirestore } from "../firebase/firebase";
import firebase from "firebase";

export const Checkout = () => {
  const { cart, total, clearCart, precioTotal } = useContext(CartContext);
  const [validated, setValidated] = useState(false);
  const [user, setUser] = useState({
    nombre: "",
    apellido: "",
    mail: "",
    direccion: "",
    localidad: "",
    ciudad: "",
  });
  const [datosOrder, setDatosOrder] = useState({});
  const [orderId, setOrderId] = useState("");

  const db = getFirestore();
  const orders = db.collection("orders");

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  const datosUser = (event) => {
    event.preventDefault();
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleCompra = (event) => {
    event.preventDefault();

    const order = {
      date: firebase.firestore.Timestamp.fromDate(new Date()),
      buyer: user,
      cart,
      total,
    };
    setDatosOrder(order);

    if (order.cart) {
      orders
        .add(order)
        .then((res) => {
          setOrderId(res.id);
        })

        .catch((err) => {
          console.log("error: ", err);
        })
        .finally(() => {
          clearCart();
        });
    }
  };

  return (
    <div>
      <CheckoutList
        datosOrder={datosOrder}
        validated={validated}
        handleSubmit={handleSubmit}
        datosUser={datosUser}
        handleCompra={handleCompra}
        orderId={orderId}
      />
    </div>
  );
};
