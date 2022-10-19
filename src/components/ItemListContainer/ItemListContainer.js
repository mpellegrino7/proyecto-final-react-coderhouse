import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

const onAdd = (count) => {
  console.log(`${count} productos fueron agregados al carrito`)
}

const ItemListContainer = ({ greeting }) => {
  return (
    <>
      <h1>{greeting}</h1>
      <ItemCount initial={1} stock={15} onAdd={onAdd} />
    </>
  )
}

export default ItemListContainer
