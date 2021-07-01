import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Switch, Route} from 'react-router-dom';



function App() {

  return (
    
       <div className="App bg-light">
        <BrowserRouter>
        <NavBar/>  
         <Switch>
         <Route exact path= '/productos/:id' ><ItemDetailContainer /> </Route> 
         <Route exact path= '/categorias/: category '> <ItemListContainer /> </Route>
         <Route exact path= '/'> <ItemListContainer /> </Route>       
         </Switch>
         </BrowserRouter>
  
    </div>
    );
}

export default App;