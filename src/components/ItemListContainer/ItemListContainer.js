import React,{ useState, useEffect} from 'react';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = () => {
  const [data, setData] = useState([])
   
     useEffect (()=> {
       fetch('https://my-json-server.typicode.com/albaarg/tienda/productos')
       .then(response=> response.json()) 
       .then((productos) => {
        setData(productos)

        }).catch(e=> {
          console.log(e);
         });  
     }, []);
  
           return(
                  
            <ItemList productos={data} />
     )

}
  

export default ItemListContainer;