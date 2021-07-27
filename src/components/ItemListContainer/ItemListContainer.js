import React,{ useState, useEffect, useContext} from 'react';
import Item from '../Item/Item';
import {useParams} from 'react-router-dom';
import CartContext  from '../../Context/CartContext'
import Spinner from 'react-bootstrap/Spinner';
import {getFirestore} from '../firebase/firebase'

const ItemListContainer = (prop) => {
    const {products} = prop
    const [item, setItem] =useState (false);
    console.log(products)
    const contextCart = useContext(CartContext);
    const { categoryId } = useParams();
    const _handleAddCart = item => cantidad => {
      contextCart.addToCart({...item, cantidad})
    }

    useEffect(() => {
      setItem(true)
      const db = getFirestore()
      const itemsCollection = db.collection('items')

      itemsCollection.get()
      .then((querySnapShot)=>{
          const documentos = querySnapShot.docs.map((doc)=> {return { id: doc.id, ...doc.data() }})
          const filtrocategoryId = categoryId && documentos.filter((item) => item.categoryId == categoryId)
          setItem(filtrocategoryId)
      })
      .catch( error=> console.log(error))
      .finally(() => setItem(false)) 
      },[categoryId])

      return (
        <div>
         {
           item ?
               <Item key={item} element={item} onAddCart={_handleAddCart(item)} />
            : 
             <div className='loader text-center' style={{marginTop: '20%', height:'100vh'}}> 
               <Spinner animation="border" variant="dark"/> 
           </div>
         }
       </div>
     )
   }

  export default ItemListContainer;