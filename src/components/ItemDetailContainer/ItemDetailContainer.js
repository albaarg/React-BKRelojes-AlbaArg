import React, {useState, useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';
import {useParams} from 'react-router-dom';
import {Link} from 'react-router-dom';
import {Button} from 'react-bootstrap';
import {getFirestore} from '../firebase/firebase';

const ItemDetailContainer = (prop) => { 
  const {products} = prop
  console.log(products)
  const { itemId } = useParams();
  const [item, setItem] = useState();
  useEffect(() => {
    const db = getFirestore()
    const itemsCollection = db.collection('items')

    itemsCollection.get()
    .then((querySnapShot)=>{
        const documentos = querySnapShot.docs.map((doc)=> {return { itemId: doc.itemId, ...doc.data() }})
        const filtroId = itemId ? documentos.filter((item) => item.id === itemId) : documentos
      setItem(filtroId[0])
    })
    .catch((err) => console.log('ERROR')) 
    .finally(() => console.log('terminé detail'))       
    },[itemId])
    
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