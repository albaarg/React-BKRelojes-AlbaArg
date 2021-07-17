import React,{ useState, useEffect, useContext} from 'react';
import Item from '../Item/Item';
import {useParams} from 'react-router-dom';
import CartContext  from '../../Context/CartContext'
import Spinner from 'react-bootstrap/Spinner';

const ItemListContainer = (prop) => {
    const {products} = prop
    const contextCart = useContext(CartContext)
  
    const _handleAddCart = item => cantidad => {
      contextCart.addToCart({...item, cantidad})
    }

    const { categoryId } = useParams();
    const [list, setList] = useState([]);
 
    useEffect(() => {
      let productList;
      if (categoryId) {
        productList = products.filter(
          product => (product.category || '').toLowerCase().search(categoryId.toLowerCase())>=0
        )
      } else {
        productList = products;
      }
      setList(productList)
    }, [categoryId,products]);
    

    return (
       <div>
        {
          list.length ?
            list.map(item => (
              <Item key={item.id} element={item} onAddCart={_handleAddCart(item)} />
            )) : 
            <div className='loader text-center' style={{marginTop: '20%', height:'100vh'}}> 
              <Spinner animation="border" variant="dark"/> 
            </div>
        }
      </div>
    )
  }

  export default ItemListContainer;