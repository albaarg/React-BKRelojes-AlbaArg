import React, {useState, useEffect} from 'react'
// import ItemDetail from '../ItemDetail/ItemDetail';
import {useParams} from 'react-router-dom';
import {Link} from 'react-router-dom';

const ItemDetailContainer = (prop) => { 
  const {products} = prop

  console.log("products => ", products )
    const { itemId } = useParams();
  console.log("itemId => ", itemId )
  const [item, setItem] = useState();
  console.log("item => ", item )
  useEffect(() => {
      if(!item) {
        const product = products.find(product => product.id == itemId) 
        setItem(product)
      }
    }, [itemId, products])
    
    return item ? (
      <div>
        {/* <ItemDetail> */}
        <h1>{item?.tittle}</h1>
        <span>{item?.colour}</span>
        <div><img src={item?.img} alt={item?.tittle} /></div>
        <div><Link to='/'>Volver al inicio</Link></div>
        {/*</ItemDetail>*/}
      </div>
    ) : <div><span>Cargando...</span></div>
  }

     



export default ItemDetailContainer;