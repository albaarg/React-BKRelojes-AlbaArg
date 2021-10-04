import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import getProducts from "./components/api/getProducts";
import Cart from "./components/Cart/Cart";
import { Footer } from "./components/Footer/Footer";
import { CartProvider } from "./Context/CartProvider";
import Checkout from "./components/Checkout/Checkout";

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts().then((data) => setProducts(data));
  }, []);

  return (
    <div className="App bg-light">
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Switch>
            <Route path="/Cart">
              {" "}
              <Cart />{" "}
            </Route>
            <Route path="/item/:itemId">
              <ItemDetailContainer products={products} />
            </Route>
            <Route path="/categoria/:categoryId">
              <ItemListContainer products={products} />
            </Route>
            <Route exact path="/">
              <ItemListContainer products={products} />
            </Route>
            <Route path="/Checkout">
              <Checkout />
            </Route>
          </Switch>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
