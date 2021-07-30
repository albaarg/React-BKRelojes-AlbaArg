import React, { useMemo } from "react";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";

export const CartList = (prop) => {
  const { Cart, clearCart, removeItem } = prop;

  const total = useMemo(() => {
    return Cart.reduce((total, item) => {
      console.log(item, "item");
      return total + item.cantidad * Number(item.price.replace("$", ""));
    }, 0);
  }, [Cart]);

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Modelo</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <td>Subtotal</td>
            <td>Eliminar </td>
          </tr>
        </thead>

        <>
          <tbody>
            {Cart.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.tittle}</td>
                  <td>{item.category}</td>
                  <td>{item.price}</td>
                  <td>{item.cantidad}</td>
                  <td>
                    ${item.cantidad * Number(item.price.replace("$", ""))}
                  </td>
                  <td>
                    <DeleteOutlinedIcon onClick={() => removeItem(item.id)} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </>
      </Table>
      <hr />
      <div className="total text-left">
        <p>Total: ${total} </p>
        <Link to={"/checkout"}>
          <Button variant="outline-info" style={{ marginRight: "1.5rem" }}>
            Finalizar Compra
          </Button>
        </Link>
        <Button variant="outline-danger" onClick={clearCart}>
          Vaciar Carrito
        </Button>
      </div>
    </>
  );
};
