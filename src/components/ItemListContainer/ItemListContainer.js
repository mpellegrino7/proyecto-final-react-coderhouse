import React, { useState, useEffect } from 'react'
import { ItemList } from '../ItemList/ItemList'
import { LinearProgress } from '@mui/material'
import { useParams } from 'react-router-dom'
import { dataBase } from '../../firebase/Firebase'
import { getDocs, collection, query, where } from 'firebase/firestore'

const ItemListContainer = ({ greeting }) => {
  const { id } = useParams()
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const collectionProductos = collection(dataBase, 'productos')
    const queryProductos = query(
      collectionProductos,
      where('category', '==', 'womens clothing'),
    )

    getDocs(queryProductos)
      .then((data) => {
        const listaProductos = data.docs.map((productos) => {
          return {
            ...productos.data(),
            id: productos.id,
          }
        })
        setProducts(listaProductos)
      })
      .catch(() => {
        setError(true)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [id])

  return (
    <>
      {loading ? (
        <LinearProgress />
      ) : error ? (
        <h2>Error</h2>
      ) : (
        <ItemList products={products} />
      )}
    </>
  )
}

export default ItemListContainer
