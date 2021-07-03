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
              
            <ItemDetail/>
            <div>
            <div className='d-flex justify-content-center row' style={{marginBottom: '5rem'}}>
              <h3>{data.tittle} </h3>
              <h3>{data.description}</h3>
              <h3>{data.colour}</h3>
              <h3>{data.price} </h3>
              <h3> {data.category} </h3>
              </div>
            </div>                  
          
          </>
        
     )
     
}




export default ItemDetailContainer;