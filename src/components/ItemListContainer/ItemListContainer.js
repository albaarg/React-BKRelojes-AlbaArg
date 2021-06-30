import React,{ useState, useEffect} from 'react';
import ItemList from '../ItemList/ItemList';
import img1 from '../../assets/img/img1.png';
import img2 from '../../assets/img/img2.png';
import img6 from '../../assets/img2/img6.png';

const ItemListContainer = () => {
  
  const [data, setData] = useState([]);

 const productos = [
  
 {
   img:img1,
   tittle: 'Reloj Clara',
   description: 'Modelo Clásico',
   price: '$2000'

  },{
    img:img2,
    tittle: 'Reloj Francia',
   description: 'Malla regulable',
   price: '$1500'

  },{
  img:img6,
  tittle: 'Reloj Imantado',
 description: 'Modelo unisex',
 price: '3500'

 }

 ];

  const task=  new Promise((resolve) => {
      setTimeout(() => {
        resolve(productos);
      }, 2000);

     });
   
     useEffect (()=> {
      task
      .then((info)=> 
        {setData(info) }).catch(e=> 
          console.log(e));
        
     },[]);

  return(
      <>
     
      
      <ItemList productos ={data} />
      </>
      
    );



}

export default ItemListContainer;