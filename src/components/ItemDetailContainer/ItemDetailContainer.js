import React, {useState, useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';
import img3 from '../../assets/img/img3.png';
import img5 from '../../assets/img2/img5.png';
//import {useParams} from 'react-router-dom';

const ItemDetailContainer = () => {

  const [data,setData] = useState([]);
  //const {id} = useParams ();

  const detail = [

   {
   img:img3,
   tittle: 'Reloj Digital',
   description: 'Modelo Unisex',
   category: 'Con cronómetro y sumergible',
   colour: 'Blanco/Negro',
   price: '$3500'


   },{
    img:img5,
    tittle: 'Reloj Selah',
    description: 'Modelo Femenino',
    category: 'Con luz, alarma, cronómetro y malla regulable',
    colour: 'Dorado/Rosa',
    price: '$4000'
 
 
    },{
      img:img3,
      tittle: 'Reloj Digital',
      description: 'Modelo Unisex',
      category: 'Con cronómetro y sumergible',
      colour: 'Blanco/Negro',
      price: '$3500'
   
   
    },{
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

         {data.map(element => {

          return (
            <ItemDetail key={element.key} element={element} />

          
          )


      })}
                

        </>
     )
     
}




export default ItemDetailContainer;