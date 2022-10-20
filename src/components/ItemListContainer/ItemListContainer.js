import React, { useEffect } from 'react'
import { ItemList } from '../ItemList/ItemList'
import { useState } from 'react'
import { products } from '../../base de productos/productos'
import { promesa } from '../../customfetch/promesa'

const ItemListContainer = ({ greeting }) => {
  const [listProducts, setListProducts] = useState([])

  useEffect(() => {
    promesa(products).then((res) => setListProducts(res))
  }, [])

  return (
    <>
      <h1>{greeting}</h1>

      <ItemList listProducts={listProducts} />
    </>
  )
}

export default ItemListContainer
