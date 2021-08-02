import { useContext, createContext } from "react";
const CartContext = createContext({});
export const useCartContext = () => useContext(CartContext);

export default CartContext;