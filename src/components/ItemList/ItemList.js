import React from "react";
import Item from "../Item/Item";

const ItemList = (prop) => {
  const todosLosProductos = prop.productos;

<<<<<<< HEAD
   const todosLosProductos = prop.productos
    
    return (
     <>
=======
  return (
    <>
>>>>>>> 44cec6b383354baafb2784a9529ecfead69ce1de
      {todosLosProductos.map((item) => (
        <Item key={item.id} element={item} />
      ))}
    </>
  );
};
<<<<<<< HEAD


=======
>>>>>>> 44cec6b383354baafb2784a9529ecfead69ce1de

export default ItemList;
