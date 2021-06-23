import React,{ useState} from 'react';
import ItemCount from '../ItemCount/ItemCount';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = () => {
  const onAdd = () => {}
  const [item] = useState([]);

 const productos = [
  
 {
   tittle: 'Reloj Italia',
   description: 'Modelo Unisex',
   price: '$2000'

  },{
    tittle: 'Reloj Luna',
   description: 'Luz, alarma y malla regulable',
   price: '$1500'
  } 
 ];
 const [data, setData] = useState([]);
  const task=  new Promise((resolve) => {
      setTimeout(() => {
        resolve(productos);
      }, 2000);

     });
   
 task
  .then((info)=> 
    {setData(info) }).catch(e=> 
      console.log(e));
    
      data.forEach(producto=>  {
        console.log (producto);

      });
      

    
    
  

  return(
      <>
     <ItemCount  initial={0} stock={20} onAdd={onAdd}/> 
      
      <ItemList productos={item} />
      </>
      
    );



}

export default ItemListContainer;