import React,{ useState, useEffect} from 'react';
import ItemList from '../ItemList/ItemList';
import {useParams} from 'react-router-dom';

const ItemListContainer = () => {
  const [data, setData] = useState([])
  const {id} = useParams ();
   
     useEffect (()=> {
       fetch('https://my-json-server.typicode.com/albaarg/tienda/productos')
       .then(response=> response.json()) 
       .then((productos) => {
        setData(productos)

        }).catch(e=> {
          console.log(e);
         });  
     }, [id]);
  
           return(
                  
            <ItemList productos={data} />
     )

}
  

export default ItemListContainer;