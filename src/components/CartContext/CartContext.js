import React from 'react'
import { createContext } from 'react'
import { useState } from 'react'

export const Context = createContext()

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  const [cantidad, setCantidad] = useState(0)
  const [total, setTotal] = useState(0)

  const addItem = (producto, cantidadProducto) => {
    if (isInCart(producto.id)) {
      setCart(
        cart.map((producto) => {
          if (producto.producto.id === producto.id) {
            return {
              producto: producto.producto,
              cantidadProducto: producto.cantidadProducto + cantidadProducto,
            }
          }
          return producto
        }),
      )
    } else {
      setCart([...cart, { producto, cantidadProducto }])
    }
    setCantidad(cantidad + cantidadProducto)
    setTotal(total + cantidadProducto * producto.price)
  }

  const removeItem = (id) => {
    const productoEnCarrito = cart.find(
      (producto) => producto.producto.id === id,
    )
    setCart(
      cart.filter((producto) => {
        return producto.producto.id !== id
      }),
    )
    setCantidad(cantidad - productoEnCarrito.cantidadProducto)
    setTotal(
      total -
        productoEnCarrito.cantidadProducto * productoEnCarrito.producto.price,
    )
  }

  const isInCart = (id) => cart.some((producto) => producto.producto.id === id)

  const clear = () => {
    setCart([])
    setCantidad(0)
    setTotal(0)
  }

  return (
    <Context.Provider
      value={{
        total,
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
