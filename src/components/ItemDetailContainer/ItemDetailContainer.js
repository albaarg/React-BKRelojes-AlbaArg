import React, {useState, useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';
import {useParams} from 'react-router-dom';
import {Link} from 'react-router-dom';
import {Button} from 'react-bootstrap';
//import {getFirestore} from '../../firebase';

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
       <ItemDetail {...item} /> 
       <div><Link to='/'><Button className="btn btn-light">Volver al inicio</Button></Link></div>
      </div>
      </div>
      
    ) : <div><span>Cargando...</span></div>
  }

     



export default ItemDetailContainer;