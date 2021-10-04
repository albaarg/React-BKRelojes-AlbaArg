import React, { useState, useEffect, useContext } from "react";
import Item from "../Item/Item";
import { useParams } from "react-router-dom";
import CartContext from "../../Context/CartContext";
import Spinner from "react-bootstrap/Spinner";
import { getFirestore } from "../firebase/firebase";
import "./ItemListContainer.css";

const ItemListContainer = () => {
  const [productlist, setProductlist] = useState([]);
  const [loading, setLoading] = useState(false);
  const contextCart = useContext(CartContext);
  const { categoryId } = useParams();
  const _handleAddCart = (item) => (cantidad) => {
    contextCart.addToCart({ ...item, cantidad });
  };

  useEffect(() => {
    const db = getFirestore();
    const itemCollection = db.collection("items");
    if (categoryId) {
      const categoryItems = itemCollection.where(
        "categoryId",
        "==",
        categoryId
      );
      setLoading(true);
      categoryItems
        .get()
        .then((querySnapShot) => {
          setLoading(false);
          const getItems = querySnapShot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setProductlist(getItems);
          setLoading(false);
        })
        .catch((error) => console.log(error))
        .finally(() => setLoading(false));
    } else {
      setLoading(true);
      itemCollection
        .where("stock", "!=", 0)
        .get()
        .then((querySnapShot) => {
          setLoading(false);
          const getItems = querySnapShot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setProductlist(getItems);
          setLoading(false);
        })
        .catch((error) => console.log(error));
    }
  }, [categoryId]);

  return (
    <div className="container mb-5">
      <div className="d-flex justify-content-between">
        {loading ? (
          <div
            className="loader text-center"
            style={{ marginTop: "20%", height: "100vh" }}
          >
            <Spinner animation="border" variant="dark" />{" "}
          </div>
        ) : (
          <div className="grid">
            {productlist.map((item) => (
              <Item
                key={item.id}
                element={item}
                onAddCart={_handleAddCart(item)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
export default ItemListContainer;
