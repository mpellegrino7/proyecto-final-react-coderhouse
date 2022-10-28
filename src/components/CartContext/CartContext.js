import React from 'react'
import { createContext } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

export const Context = createContext()

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  const [cantidad, setCantidad] = useState(0)

  useEffect(() => {
    let cantidad = 0
    cart.forEach((producto) => (cantidad = cantidad + producto.cantidad))
    setCantidad(cantidad)
  }, [cart])

  const addItem = (producto, cantidad) => {
    const estaEnLista = cart.findIndex(
      (itemCart) => itemCart.producto.id === producto.id,
    )
    if (estaEnLista !== -1) {
      const newCart = cart.filter((item) => item !== cart[estaEnLista])
      setCart([{ producto, cantidad, ...newCart }])
    } else {
      setCart([...cart, { producto, cantidad }])
    }
  }

  const removeItem = (id) => {
    const productoFiltrado = cart.filter((producto) => {
      return producto.producto.id !== id
    })
    setCart(productoFiltrado)
  }

  const clear = () => {
    setCart([])
  }

  return (
    <Context.Provider
      value={{
        cantidad,
        cart,
        addItem,
        removeItem,
        clear,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export default CartProvider
