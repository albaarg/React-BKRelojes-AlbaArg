import React,{ useState, useEffect} from 'react';
import ItemList from '../ItemList/ItemList';
import {useParams} from 'react-router-dom';

const ItemListContainer = () => {
  const [category,setCategory] = useState([]);
  const {categoryId}=useParams();
  console.log(categoryId);

     useEffect (()=> {
       fetch(`https://my-json-server.typicode.com/albaarg/tienda/productos/`)
       .then(response=> response.json()) 
       .then((productos) => {
        setCategory(productos)

        }).catch(e=> {
          console.log(e);
         });  
     }, []);

     //const catalogo= productos.filter =()
  
           return(

            <>
                
                  <ItemList productos={category} />
                
            </>
        )

}
  
export default ItemListContainer;