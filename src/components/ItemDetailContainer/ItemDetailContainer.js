import React, {useState, useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';
import img1 from '../../assets/img/img1.png';
import img2 from '../../assets/img/img2.png';
import img3 from '../../assets/img/img3.png';
import img5 from '../../assets/img/img5.png';
import img6 from '../../assets/img/img6.png';
import {useParams} from 'react-router-dom';

const ItemDetailContainer = () => {

  
  const [data,setData] = useState([]);
  const {id} = useParams ();

  useEffect(() => {

    (setData,{data:id})

   },[id]);

  const productos = [
    {  id: '1',
       img:img1,
       tittle: 'Reloj Clara',
       description: 'Malla metalizada y con luz',
       colour:'Disponible en blanco, dorado y negro',
       price: '$2000',
       category:'Modelo Mujer'
   
     },{
       id: '2',
       img:img2,
       tittle: 'Reloj Francia',
       description: 'Malla flexible',
       colour:'Disponible en color blanco, negro, rosa y dorado',
       price: '$1500',
       category:'Modelo Unisex'
   
     },{
       id: '3',
       img:img3,
       description: 'Con cronómetro y sumergible',
       colour: 'Disponible en color blanco y negro',
       price: '$3500',
       category:'Modelo Unisex'
   },{
       id: '4',
       img:img5,
       tittle: 'Reloj Selah',
       description: 'Con luz, alarma, cronómetro y malla regulable',
       colour: 'Disponible en color dorado y rosa',
       price: '$4000',
       category:'Modelo Mujer'
   },{
       id:'5',
       img:img6,
       tittle: 'Reloj Imantado',
       description: 'Malla imantada y súper cómoda',
       colour: 'Disponible en color blanco, negro y rojo',
       price: '$3500',
       category:'Modelo Hombre'
  
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

     return (

        <> 
         {data.map(element => {

          return (
            
            <ItemDetail key={element.key} element={element} id={element.id} tittle={element.tittle} description={element.description} price={element.price} category={element.category}   />
          
          )


      })}
                

        </>
        
     )
     
}




export default ItemDetailContainer;