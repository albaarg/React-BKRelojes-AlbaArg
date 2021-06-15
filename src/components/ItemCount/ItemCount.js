import React from 'react';
import './ItemCount.css'


const ItemCount = (prop) => {

    const {setStockUsser,stockUsser,stockTotal,botonActivo,activo,setAactivo, onAdd,count}= prop

    const suma = () => {
        if ((stockTotal > 0)&& (stockUsser < stockTotal) ){
            setStockUsser (stockUsser +1);
            setAactivo (true);
    
        }
    
    }
    const resta =() =>{
        if (stockUsser ===0){
        setAactivo(false);
        setStockUsser(0);
    
        }
        else if(stockUsser >=8 ){
        setStockUsser (stockUsser -1);
        }
    }
    


    return (
        
            <div>
                <p className="cantidad">cantidad en Stock: {stockTotal}</p>
                <div className="btn stock" >
                    <button onClick={restar} disabled={!botonActivo}>-</button>
                    <p id="cantidad">{stockUsser}</p>
                    <button onClick={sumar} disabled={!botonActivo}>+</button>
                </div>
                <button onClick={()=> onAdd(count)} disabled={!activo} className="btn shop" >Comprar</button>
            </div>
            
    )
    
 

    

}



export default ItemCount;