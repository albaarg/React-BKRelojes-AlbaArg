import React, {useState, useEffect} from 'react';
import CartContext from '../Context/CartContext';

export const CartProvider = (prop) => {
    const {children}=prop
    const [Cart, setCart] = useState([])
    const [totalItems, setTotalItems]=useState(0);
    
    useEffect(()=> {
      console.log(Cart);
    let totalItems=0;
    if (Cart.length>0){ 
    for(let i=0; i<Cart.length; i++)
    {totalItems=Cart[i].quantity + totalItems}
    setTotalItems(totalItems);
    }
    else {setTotalItems(0)}
    },[Cart]) 

    const getFromCart=(id)=> {
    return Cart.find(x => x.id === id);
     }

    const isInCart=(id)=>{
        const existe = getFromCart(i =>i.id === id);
          return existe;
        }

    
    const tomoCantidad = product=>{
      const filtro = [...Cart];
        filtro.forEach(i => {
          if(i.id === product.id){
            i.cantidad += product.cantidad
          }  
      })
      setCart(filtro);
    }
  
    const clear = () => {
      setCart([]);
    }
  
   const removeItem = (id) => {
   
   
      setCart(prevState => prevState.filter(product => product.id !== id));
    } 
  
    const quantityInStock = (obj) => {
  
      return obj.stock > obj.quantity
    }
  
    const addToCart = (product) => {
      
      if (quantityInStock(product)){
        console.log('No hay suficiente stock del producto');
       return;   
     }

      if(isInCart(product.id)) {
        tomoCantidad(product)
      } else {
        setCart(prevState => ([...prevState, product]));
      }
  
      console.log('elemento agregado');
    }
    
    console.log("Cart => ", Cart)

    return(
        <CartContext.Provider
        value={{Cart, addToCart, isInCart, removeItem, clear, totalItems, cartSize: Cart.length}}>
            {children}
        </CartContext.Provider>
    )
}
