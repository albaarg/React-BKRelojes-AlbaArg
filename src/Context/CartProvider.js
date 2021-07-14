import React, {useState, useEffect} from 'react';
import CartContext from './CartContext';

export default function CartProvider(prop) {
    const {children}=prop
    const [Cart, setCart] = useState([])
    const [cantidad,setCantidad] = ([])
    const [totalItems, setTotalItems]=useState(0);
    
    const tomoCantidad =(product,cantidad)=>{
      const filtro = [...Cart];
        filtro.forEach(i => {
          if(i.id === product.id){
            i.cantidad += cantidad
            }  
      })
      setCart(filtro);
    }
  
  

    useEffect(()=>{  
      let counter=0;
      if (Cart.length>0) { 
        for(let i=0; i<Cart.length; i++) {
          counter= (Cart[i].quantity || 1) + counter
        }
        setTotalItems(counter);
      } else {
        setTotalItems(0)
      }
    },[Cart]) 
  function getFromCart(id) {
      return Cart.find(x => x.id === id);
    }
  
    function isInCart(obj) {
      console.log(obj);
      return obj.id === undefined ? undefined : getFromCart(obj.id) !== undefined;
      
    }
 
    function clear() {
      setCart([]);
    }
  
   function removeItem(id){
     console.log(Cart);
     console.log(id);
     let index= Cart.map(elemento=>elemento.id).indexOf(id);
   let updateCart= Cart.splice(index,1);
   setCart([updateCart]);
   
     
    } 
  
    function quantityInStock(obj){
  
      return obj.stock > obj.quantity
    }
  
    function addToCart(product) {
      if(isInCart(product.id)){
        tomoCantidad(product,cantidad)
        console.log(setCantidad)
      }
      else{
          setCart([...Cart, {...product, cantidad}]);
          
      }
      if (quantityInStock(product)){
         console.log('No hay suficiente stock del producto');
        return;   
      }
  
      setCart(prevState => ([...prevState, product]));
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

