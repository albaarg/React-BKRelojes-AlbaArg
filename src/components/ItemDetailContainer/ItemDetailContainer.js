import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { db } from "../firebase/firebase";

const ItemDetailContainer = () => {
  const [item, setItem] = useState();
  const [loading, setLoading] = useState(true);
  const { itemId } = useParams();
  
  const fetchData = async () => {
    const refItems = db.collection("items").doc(itemId);
    const getItems = await refItems.get();
    const dataItems = getItems.data();
    setItem({ id: getItems.id, ...dataItems });
  };
  useEffect(() => {
    fetchData();
    setLoading(false);
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  if (!loading) {
    return (
      <div className="col-4 mx-5">
        <div
          className="d-flex justify-content-center row"
          style={{ width: "80", marginBottom: "10rem" }}
        >
          <ItemDetail {...item} />
          <div>
            <Link to="/">
              <Button className="btn btn-light">Volver al inicio</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <span>Cargando...</span>
      </div>
    );
  }
};

export default ItemDetailContainer;
