import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import  ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


function App() {
  return (
    <div className="App">
      <header className="App-header" style={ {background: '#1211'} }>
        <NavBar/>
         </header>
         <ItemListContainer />
         <ItemDetailContainer />

    </div>
  );
}

export default App;