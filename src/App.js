import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Switch, Route} from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header" style={ {background: '#1211'} }>
        <NavBar/>
         </header>
         <Switch>
         <Route exact path= '/productos/:id' ><ItemDetailContainer /> </Route> 
         <Route exact path= '/categorias/: category '> <ItemListContainer /> </Route>
         <Route exact path= '/'> <ItemListContainer /> </Route>       
         </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;