import React, { useState } from "react";
import { useCartContext } from "../../Context/CartContext";
import { getFirestore } from "../firebase/firebase";
import { Container, Form, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Checkout = () => {
  const { Cart: products, totalItems, clearCart } = useCartContext();
  const [empty, setEmpty] = useState(true);
  const [checked, setChecked] = useState(false);
  const [orderId, setOrderId] = useState();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");

  const sendOrder = () => {
    const db = getFirestore();
    const orders = db.collection("orders");
    let totalItems = 0;
    totalItems.length === 0 ? setEmpty(true) : setEmpty(false);

    const newOrder = {
      buyer: name,
      email: email,
      phone: phone,
      ciudad: city,
      zip: zipCode,
      items: products,
      total: totalItems,
    };

    orders
      .add(newOrder)
      .then(({ id }) => {
        setOrderId(id);
        setChecked(true);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        alert("Compra realizada con exito");

        clearCart();
      });
  };

  return (
    <>
      <Container>
        <h2>Checkout</h2>
        <Form>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridName">
              <Form.Label>Nombre y Apellido</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nombre y Apellido"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="formGridAddress1">
            <Form.Label>Teléfono</Form.Label>
            <Form.Control
              placeholder="1234 Main St"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </Form.Group>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Ciudad</Form.Label>
              <Form.Control
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Zip</Form.Label>
              <Form.Control
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
              />
            </Form.Group>
          </Form.Row>
          <div>
            <button className="btn btn-primary" onClick={() => sendOrder()}>
              Realizar Compra
            </button>
          </div>
        </Form>
        <h3>Resumen de Compra</h3>
        <hr />

        {!products ? (
          <div>
            <p>Sin Productos cargados</p>
          </div>
        ) : (
          products.map((item) => {
            return (
              <div key={item.id} className={"checkoutItem"}>
                <h4>Producto ID: {item.id}</h4>
                <h4>Producto: {item.tittle}</h4>
                <h4>Precio: $ {item.price}</h4>
              </div>
            );
          })
        )}
        <div id={"checkOutTotal"}>
          <h4>Total: {totalItems}</h4>
        </div>

        {checked && !empty && (
          <div
            className="resumenPedidoId text-left col-3"
            style={{ marginTop: "7rem", height: "40%" }}
          >
            <h3>¡Gracias por su compra!</h3>
            <h4>El id de la compra es: {orderId}</h4>
            <br />
            <Link to="/">
              <button variant="outline-info" className="mt-3">
                Volver a la página principal
              </button>
            </Link>
          </div>
        )}
      </Container>
    </>
  );
};

export default Checkout;
