import React, {useState, useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';
import {useParams} from 'react-router-dom';

const ItemDetailContainer = (prop) => { 
  const {products} = prop
  const { itemId } = useParams();
  const [item, setItem] = useState();
  useEffect(() => {
      if(!item) {
        const product = products.find(product => product.id == itemId) 
        setItem(product)
      }
    }, [itemId, products])
    
    return item ? (
      <div className='col-4 mx-5' >
     <div className='d-flex justify-content-center row' style={{width: '90%',marginBottom: '10rem'}}>       
       <ItemDetail tittle={item.tittle} colour={item.colour} img={item.img}></ItemDetail> 
      </div>
      </div>
      
    ) : <div><span>Cargando...</span></div>
  }

     



export default ItemDetailContainer;