import React, {useState, useEffect} from 'react';
import ItemCount from '../ItemCount/ItemCount';
import ItemList from '../ItemList/ItemList';


const productos= [{ 

  nombre: 'Producto 1', cantidad: 1
  },{
  nombre: 'Producto 2', cantidad: 10
  },{
  nombre: 'Producto 3', cantidad: 5
  }]

 const ItemListContainer = (prop) => {

    const [item] = useState([])
    const {stockT, onAdd, sumar, restar} = prop 
    const [stockTotal, setStockTotal] = useState(stockT);
    const [stockUsser, setStockUsser] = useState(0);
    const [botonActivo, setBotonActivo] = useState(true);
    const [activo,setActivo]=useState(false)
    const count = stockUsser;
  

    useEffect(() => {
      setStockTotal(stockT);
  
       if(stockTotal === 0){
       setBotonActivo(false);
       if(stockUsser > 0){
        setBotonActivo(true);
      }
    }
   } , [stockTotal,stockUsser,stockT])

    
    
   const getProducts = new Promise((resolve) => {

      setTimeout(() => {
        resolve(productos);
      }, 2000);
    });
    
    getProducts

      .then(data => {
        data.forEach(productos => {
          console.log(productos);
       
        });
      })
      .catch(e => {
        console.log(e);
      });

  
 return(
   <>
  <ItemCount  setStockUsser={setStockUsser} stockUsser={stockUsser} stockTotal={stockTotal} sumar={sumar} restar={restar} botonActivo={botonActivo} activo={activo} setActivo={setActivo} onAdd={onAdd} count={count}/> 
      
  <ItemList productos={item} />
  </>
)
}
 
  


export default ItemListContainer;