import React, {useState, useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';
import img3 from '../../assets/img/img3.png';

const ItemDetailContainer =() =>{

  const [setData] = useState([]);

  const detail = [

   {
   img:img3,
   tittle: 'Reloj Digital',
   description: 'Modelo Unisex',
   category: 'Con cronómetro y sumergible',
   colour: 'Blanco/Negro',
   price: '$3500'


   }
  ];
  const task=  new Promise((resolve) => {
      setTimeout(() => {
        resolve(detail);
      }, 2000);

     });
   
     useEffect (()=> {
      task
      .then((info)=> 
        {setData(info) }).catch(e=> 
          console.log(e));
        
     },[]);

     return (
         <>
    
        {detail.map(element => {
            return (
                <ItemDetail key={element.key} element={element} />
            )

                
          


        })}

        </>
     )
     
}




export default ItemDetailContainer;