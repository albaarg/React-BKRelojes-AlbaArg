import React,{useState} from 'react';
import ItemCount from '../ItemCount/ItemCount';
import ItemList from '../ItemList/ItemList';

const productos= [{ 

}]

  
const ItemListContainer = () => {
  const [item] = useState([])
  
  const onAdd = () => {
    console.log ('compra realizada')
  }


  
 const getProducts = new Promise((resolve) => {

  setTimeout(() => {
    resolve(productos);
  }, 2000);
});

getProducts

  .then(data => {
    data.forEach(productos => {
      console.log(productos);
   
    });
  })
  .catch(e => {
    console.log(e);
  });


    return(
      <>
     <ItemCount  initial={1} stock={20} onAdd={onAdd}/> 
      
      <ItemList productos={item} />
      </>
      
    )
    
     

  

}
 
  


export default ItemListContainer;