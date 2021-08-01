import React, { useState} from 'react'
import useCartContext from "../../Context/CartContext";
import { getFirestore } from "../firebase/firebase";
import { Container, Form, Col } from "react-bootstrap";

const Checkout = () => {
    const { products, getTotal } = useCartContext();
    const [orderId, setOrderId] = useState()
    console.log(products)

    const db = getFirestore()
    const orders = db.collection("orders")
        let PrecioTotal = getTotal(products);
        let name = document.querySelector("#name").value;
        let email = document.querySelector("#email").value;
        let phone = document.querySelector("#phone").value;
        let city = document.querySelector("#city").value;
        let zipCode = document.querySelector("#zipCode").value;

        const newOrder = {
            buyer: name,
            email: email,
            phone: phone,
            ciudad: city,
            zip: zipCode,
            items: products,
            total: PrecioTotal,
        }

        console.log(name)
        orders.add(newOrder).then(({ id }) => {
            setOrderId(id)
        }).catch(err => {
            console.log(err)
        }).finally(() => {
            alert("Compra realizada con exito")
            console.log(orderId)
        })
    

    return (
        <>
            <Container>
                <h2>Checkout</h2>
                <Form>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" id={"email"} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridName">
                            <Form.Label>Nombre y Apellido</Form.Label>
                            <Form.Control type="text" placeholder="Nombre y Apellido" id={"fname"} />
                        </Form.Group>
                    </Form.Row>

                    <Form.Group controlId="formGridAddress1">
                        <Form.Label>Teléfono</Form.Label>
                        <Form.Control placeholder="1234 Main St" id={"phone"} />
                    </Form.Group>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>Ciudad</Form.Label>
                            <Form.Control id={"city"} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>Zip</Form.Label>
                            <Form.Control id={"zipCode"} />
                        </Form.Group>
                    </Form.Row>
                </Form>
                <h3>Resumen de Compra</h3>
                <div className={"checkoutItem"}>
                    <h4>Producto</h4>
                    <h4>Cantidad</h4>
                    <h4>Precio</h4>
                </div>
                {
                    products.map((item) => {
                        return (
                            <div key={item.id} className={"checkoutItem"}>
                                <h4>{item.id}</h4>
                                <h4>{item.tittle}</h4>
                                <h4>${item.price}</h4>
                            </div>
                        )
                    })
                }
                <div id={"checkOutTotal"}>
                    <h4>Total</h4>
                    <h4>${getTotal()}</h4>
                </div>
            </Container>
        </>
    )
}

export default Checkout;