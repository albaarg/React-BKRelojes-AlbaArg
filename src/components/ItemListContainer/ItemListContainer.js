import React, {useState, useEffect} from 'react';
import ItemCount from '../ItemCount/ItemCount';

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
    }, [stockTotal,stockUsser,stockT])
    
    
    const sumar = () => {
      
       if((stockTotal > 0)&& (stockUsser < stockTotal) ){
      setStockUsser( stockUsser + 1 );
      setActivo(true)
      }
    }

    const restar =()=>{
      if(stockUsser === 0){
        setActivo(false)
        setStockUsser(0);
      }
      else if(stockTotal >= 0 ){
      setStockUsser ( stockUsser - 1);
      }
    }
    
    return (

        <ItemCount  stockUsser={stockUsser} stockTotal={stockTotal} sumar={sumar} restar={restar} botonActivo={botonActivo} activo={activo} onAdd={onAdd} count={count}/>

 
   
          )

        }
export default ItemListContainer;