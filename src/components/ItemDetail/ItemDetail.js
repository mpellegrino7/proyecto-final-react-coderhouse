import React from 'react'
import './ItemDetail.css'

export const ItemDetail = ({ producto }) => {
  return (
    <>
      <div className="estilosItemDetail">
        <img src={producto.image} alt={producto.title} />
        <div>
          <h1>{producto.title}</h1>
          <span>${producto.price}</span>
          <p>{producto.description}</p>
        </div>
      </div>
    </>
  )
}
