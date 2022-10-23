import React from 'react'
import './ItemDetail.css'

export const ItemDetail = ({ producto }) => {
  return (
    <>
      <div className="estilosItemDetail">
        <img src={producto.image} alt={producto.title} />
        <div>
          <h2>{producto.title}</h2>
          <span>${producto.price}</span>
          <p>{producto.description}</p>
        </div>
      </div>
    </>
  )
}
