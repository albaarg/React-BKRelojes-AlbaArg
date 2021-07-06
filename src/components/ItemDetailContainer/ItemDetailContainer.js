import React, {useState, useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';
import {useParams} from 'react-router-dom';

const ItemDetailContainer = () => { 
  const [data,setData] = useState([]);
  const {id} = useParams ();
  
     useEffect (()=> {
      fetch(`https://my-json-server.typicode.com/albaarg/tienda/productos/${id}`)
      .then(response=> response.json()) 
      .then((info) => {
      setData(info)
    }).catch(e=> {
          console.log(e);
      });  
     }, []);


     return (

       <>

        return (
          <ItemDetail productos={data}/>   

 


        )
     

     </>             
                 
        
     )
     
}


export default ItemDetailContainer;