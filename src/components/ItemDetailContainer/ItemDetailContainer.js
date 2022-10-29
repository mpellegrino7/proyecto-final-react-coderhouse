import React, { useState, useEffect } from 'react'
import { LinearProgress } from '@mui/material'
import { ItemDetail } from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { dataBase } from '../../firebase/Firebase'
import { doc, getDoc, collection } from 'firebase/firestore'

const ItemDetailContainer = () => {
  const { id } = useParams()
  const [product, setProduct] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const collectionProductos = collection(dataBase, 'productos')
    const docReferencia = doc(collectionProductos, id)
    getDoc(docReferencia)
      .then((result) => {
        setProduct({
          id: result.id,
          ...result.data(),
        })
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
        <h1>Error</h1>
      ) : (
        <ItemDetail producto={product} />
      )}
    </>
  )
}

export default ItemDetailContainer
