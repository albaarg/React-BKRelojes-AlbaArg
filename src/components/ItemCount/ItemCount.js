import React from 'react';
import './ItemCount.css'


const ItemCount = (prop) => {
    const {stockUsser,stockTotal,sumar,restar,botonActivo,activo, onAdd, count}= prop
     
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