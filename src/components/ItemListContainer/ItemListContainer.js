import React,{ useState, useEffect} from 'react';
import Item from '../Item/Item';
import {useParams} from 'react-router-dom';

const ItemListContainer = (prop) => {
  const {products} = prop
  console.log("products => $", products);
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
           <Item key={item.id} element={item} />
          ))
      
        }
      </>  
    )
  }
  


  export default ItemListContainer;