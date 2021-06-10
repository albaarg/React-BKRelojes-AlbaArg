import React from 'react';
import './ItemCount.css'

const ItemCount = ({stockUsser,stockTotal,sumar,restar,botonActivo,activo, onAdd, count}) => {
    
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