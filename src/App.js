import React,{useEffect,useState} from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import getProducts from './components/api/getProducts';



function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts().then(data => setProducts(data))
  }, [])

  return (  

    
    <div className="App bg-light">
  <BrowserRouter>
  <NavBar/>
    <Switch>
      <Route path='/item/:itemId'><ItemDetailContainer products={products} /></Route>
      <Route path='/categoria/:categoryId'><ItemListContainer products={products} /></Route>
      <Route exact path='/'><ItemListContainer products={products} /></Route>
    </Switch>
  </BrowserRouter>
  </div>
    
    
   
    );
}

export default App;



