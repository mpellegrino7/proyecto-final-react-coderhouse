import React from 'react'
import { useContext } from 'react'
import { Context } from '../CartContext/CartContext'
import { Link } from 'react-router-dom'

export const Cart = () => {
  const { cart, cantidad, removeItem, clear } = useContext(Context)

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
                  <div key={producto.producto.id}>
                    <h2>{producto.producto.title}</h2>
                    <h2>{producto.precio}</h2>
                    <h2>Cantidad: {cantidad}</h2>

                    <button onClick={() => removeItem(producto.producto.id)}>
                      Borrar Producto
                    </button>
                  </div>

                  <button onClick={clear}>Borrar todo el Carrito</button>
                </>
              ))
            : 'vacio'}
        </>
      )}
    </>
  )
}

export default Cart
