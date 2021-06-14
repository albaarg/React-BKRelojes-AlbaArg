import React from 'react';
import Item from '../Item/Item';

const ItemList = ({productos, addItemWish}) => {

    return (
        <>
        <div className="col-lg-3 shop-info-grid mt-4">
            <Item id={productos.id} img={productos.imag} title={productos.title} description={productos.description} precio={productos.precio} stock={productos.stockT}/>
        </div>  
        
        </>
    )
}







export default ItemList;
