import React from 'react'
import { useContext } from 'react'
import { Context } from '../CartContext/CartContext'
import { Link } from 'react-router-dom'
import { dataBase } from '../../firebase/Firebase'
import {
  collection,
  addDoc,
  serverTimestamp,
  doc,
  updateDoc,
} from 'firebase/firestore'
import userInfo from '../userInfo/userInfo'

export const Cart = () => {
  const { cart, removeItem, clear, total } = useContext(Context)

  const finalizarCompra = () => {
    const ventasCollection = collection(dataBase, 'productosVendidos')
    addDoc(ventasCollection, {
      buyer: userInfo(),
      productos: cart,
      date: serverTimestamp(),
      total,
    }).then((result) => {
      console.log(result.id)
      cart.forEach((producto) => {
        actualizarStock(producto)
      })
      clear()
    })
  }
  const actualizarStock = (producto) => {
    const updateStock = doc(dataBase, 'productos', producto.producto.id)
    updateDoc(updateStock, {
      stock: producto.producto.stock - producto.cantidadProducto,
    })
  }

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
                    <h2>${producto.producto.price}</h2>
                    <h2>Cantidad: {producto.cantidadProducto}</h2>

                    <button onClick={() => removeItem(producto.producto.id)}>
                      Borrar Producto
                    </button>
                  </div>
                  <div>
                    <h2>Total: {total}</h2>
                    <button onClick={clear}>Borrar todo el Carrito</button>
                    <button onClick={finalizarCompra}>
                      Finalizar la Compra
                    </button>
                  </div>
                </>
              ))
            : 'vacio'}
        </>
      )}
    </>
  )
}

export default Cart
