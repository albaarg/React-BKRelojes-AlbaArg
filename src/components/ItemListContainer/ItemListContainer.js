import React, {useState, useEffect} from 'react';
import ItemCount from '../ItemCount/ItemCount';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = (prop) => {
  
  const {stockT, onAdd} = prop 
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
  }

  return(
       
    <ItemCount  setStockUsser={setStockUsser} stockUsser={stockUsser} stockTotal={stockTotal} sumar={sumar} restar={restar} botonActivo={botonActivo} activo={activo} setActivo={setActivo} onAdd={onAdd} count={count}/> 

  )

 
   
        

}
export default ItemListContainer;