import React,{ useState, useEffect, useContext} from 'react';
import Item from '../Item/Item';
import {useParams} from 'react-router-dom';
import CartContext  from '../../Context/CartContext'

const ItemListContainer = (prop) => {
    const {products} = prop

    const contextCart = useContext(CartContext)
  
    const _handleAddCart = item => () => {
      contextCart.addToCart(item)
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
      <>
        {list.map(item => (
           <Item key={item.id} element={item} onAddCart={_handleAddCart(item)} />
          ))
        }
      </>  
    )
  }
  


  export default ItemListContainer;