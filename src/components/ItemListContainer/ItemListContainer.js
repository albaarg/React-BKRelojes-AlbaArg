import React,{ useState, useEffect, useContext} from 'react';
import Item from '../Item/Item';
import {useParams} from 'react-router-dom';
import CartContext  from '../../Context/CartContext'
import Spinner from 'react-bootstrap/Spinner';
import {getFirestore} from '../firebase/firebase'

   const ItemListContainer = (prop) => {
    const {products} = prop
    console.log(products)
    const [productlist, setProductlist] = useState([]);
    const [loading, setLoading] = useState (false); 
    const contextCart = useContext(CartContext);
    const { categoryId } = useParams();
    const _handleAddCart = item => cantidad => {
      contextCart.addToCart({...item, cantidad})
    }

    useEffect(() => {
      const db = getFirestore();
      const itemCollection = db.collection('items');
       if (categoryId) {
        const categoryItems = itemCollection.where("categoryId", "==", categoryId);
        setLoading(true)
        categoryItems.get().then((querySnapShot)=> {
          if (querySnapShot.size === 0) {
            console.log('No hay data!');
       } else{
        setProductlist(querySnapShot.docs.map(doc => {
          return ({id: doc.id, ...doc.data()});  
        })) 
      }
      }).catch(error => console.log(error)).finally(() => setLoading(false))
    
      }else {
        setLoading (true)
        itemCollection.where('stock', "!=",0).get().then((querySnapShot) => {
          if (querySnapShot.lenght === 0) {
            console.log('No hay datos')
            setLoading (false)
          } else {
            setProductlist(querySnapShot.docs.map (doc => ({id: doc.id, ...doc.data () })))
            setLoading (false)
          }
        }).catch(error => console.log (error))
      }
    },[categoryId])

      return (
        <>
        <div>
         {       
           loading ?  
           <div className='loader text-center' style={{marginTop: '20%', height:'100vh'}}> 
              <Spinner animation="border" variant="dark"/> </div>    
                      :
                      productlist.map(item => (
                        <Item key={item} element={item} onAddCart={_handleAddCart(item)} />
                      ))
                                                       
        }
       </div>
       </>
     )
   }

  export default ItemListContainer;