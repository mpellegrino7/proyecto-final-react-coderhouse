import React, { useState } from 'react'

const ItemCount = ({ initial, stock, onAdd }) => {
  const [count, setCount] = useState(initial)

  const increase = () => {
    if (count < stock) {
      setCount(count + 1)
    }
  }

  const decrease = () => {
    if (count > initial) {
      setCount(count - 1)
    }
  }

  return (
    <>
      <div>
        <button onClick={decrease}>-</button>
        <div>{count}</div>
        <button onClick={increase}>+</button>
        <div>
          <button onClick={() => onAdd(count)}>Agregar al Carrito</button>
        </div>
      </div>
    </>
  )
}

export default ItemCount
