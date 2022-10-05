import React, { createContext, useState, useContext } from 'react'

const CartContext = createContext([]);
export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({children}) => {
 
  const [cart, setCart] = useState([])

  const addItem = (item, quantity) => {
    if(isInCart(item.id)){
      const newCart = cart.map(producto => {
        if (producto.id === item.id) {
          const newQuantity = producto.quantity + quantity;
          return {...producto, quantity: newQuantity}
        } else {
          return producto;
        }
      })
      setCart(newCart)
    } else{
      const newProduct = {...item, quantity: quantity}  
      setCart([...cart, newProduct])
    }
  }

  const removeItem = (itemId) => {
    const filteredProducts = cart.filter((product) => {
      return product.id !== itemId;
    });

    setCart(filteredProducts);
  }

  const isInCart = (itemId) => cart.find(product => product.id === itemId);

  const clear = () => {
    setCart([]);
  }

  const totalPrice = () => {
    return cart.reduce((acc, product) => acc += product.precio * product.quantity)
  }

  const totalQuantity = () => {
    return cart.reduce((acc, product) => acc += product.quantity, 0)
  }

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, isInCart, clear, totalPrice, totalQuantity }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider