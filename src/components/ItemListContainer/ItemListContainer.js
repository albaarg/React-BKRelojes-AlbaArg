import React,{ useState, useEffect} from 'react';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = () => {
  
  const [data, setData] = useState([]);
  const task=  new Promise((resolve) => {
      setTimeout(() => {
        resolve(productos);
      }, 2000);

     });
   
     useEffect (()=> {
      fetch('https://my-json-server.typicode.com/albaarg/tienda/blob/main/db.json')
      .then(response=> response.json()) 
      .then((info) => {
      setData(info)
    }).catch(e=> {
          console.log(e);
      });  
     });
  
           return(
      
      <ItemList info ={data} />
      
      
    );

    },
    


export default ItemListContainer;