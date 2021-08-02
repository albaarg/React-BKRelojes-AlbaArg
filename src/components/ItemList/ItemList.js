import React from "react";
import Item from "../Item/Item";

const ItemList = (prop) => {
  const todosLosProductos = prop.productos;

<<<<<<< HEAD
<<<<<<< HEAD
   const todosLosProductos = prop.productos
    
    return (
     <>
=======
  return (
    <>
>>>>>>> 44cec6b383354baafb2784a9529ecfead69ce1de
=======
  return (
    <>
>>>>>>> 4206aad5a811339ab25edc2b9a7a5d5f50fd0d9d
      {todosLosProductos.map((item) => (
        <Item key={item.id} element={item} />
      ))}
    </>
  );
};
<<<<<<< HEAD
<<<<<<< HEAD


=======
>>>>>>> 44cec6b383354baafb2784a9529ecfead69ce1de
=======
>>>>>>> 4206aad5a811339ab25edc2b9a7a5d5f50fd0d9d

export default ItemList;
