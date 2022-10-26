import React from 'react'
import { useContext } from 'react'
import { Context } from '../CartContext/CartContext'
import { Link } from 'react-router-dom'

export const Cart = () => {
  const { cart, removeItem } = useContext(Context)

  return (
    <>
      {cart.length === 0 ? (
        <>
          <h3>
            No hay productos en el carrito. Continúa comprando{' '}
            <Link to="/">aquí</Link>
          </h3>
        </>
      ) : (
        <>
          <div>
            <h1>Productos seleccionados:</h1>
          </div>
          {cart
            ? cart.map((producto) => (
                <>
                  <h2 key={producto.producto.id}>{producto.producto.title}</h2>

                  <button onClick={() => removeItem(producto.id)}>
                    Borrar Producto
                  </button>
                </>
              ))
            : 'vacio'}
        </>
      )}
    </>
  )
}

export default Cart
