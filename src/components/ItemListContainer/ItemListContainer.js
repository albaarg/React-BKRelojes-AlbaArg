import React,{useState} from 'react';
import ItemCount from '../ItemCount/ItemCount';
import ItemList from '../ItemList/ItemList';


const ItemListContainer = (prop) => {
const productos= prop [{
  
  
    nombre: 'Nombre de prueba',
    descripción:' Descripción de prueba',
    stock: 30
  },
  {
    nombre: 'Nombre de prueba2',
    descripción: ' Descripción de prueba',
   
    stock: 30
  }];
  


 const task = new Promise((resolve) => {
  console.log('Buscando productos...');

  setTimeout(() => {
    resolve(productos);
  }, 2000);
});

task
  .then((result)=> {
    if (result){
      productos.forEach(product=>console.log(product))
      
    }else {
      console.log("No hay productos")

    }
    throw new Error('No hay productos');
  })
  .catch(e => {
    console.log(e.message);
  });
   
    const [item] = useState([productos])
    const onAdd = () => {}
    



     return(
      <>
     <ItemCount  initial={0} stock={20} onAdd={onAdd}/> 
      
      <ItemList productos={item} />
      </>
      
    );



   

  
  }

    

 

export default ItemListContainer;