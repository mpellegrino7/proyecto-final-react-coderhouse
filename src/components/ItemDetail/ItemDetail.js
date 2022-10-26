import React, { useState, useContext } from 'react'
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import { Context } from '../CartContext/CartContext'

export const ItemDetail = ({ producto }) => {
  const [botonActivo, setBotonActivo] = useState(false)
  const { addItem } = useContext(Context)
  const onAdd = (count) => {
    setBotonActivo(true)
    addItem(producto, count)
  }

  return (
    <>
      <div className="estilosItemDetail">
        <img src={producto.image} alt={producto.title} />
        <div>
          <h2>{producto.title}</h2>
          <span>${producto.price}</span>
          <p>{producto.description}</p>
        </div>

        {!botonActivo ? (
          <ItemCount initial={1} stock={100} onAdd={onAdd} />
        ) : (
          <Link to="/cart">
            <button>Finalizar</button>
          </Link>
        )}
      </div>
    </>
  )
}
