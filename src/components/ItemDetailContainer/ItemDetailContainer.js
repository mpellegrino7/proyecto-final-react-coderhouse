import React, { useState, useEffect } from 'react'
import { LinearProgress } from '@mui/material'
import { ItemDetail } from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const getItem = async () => {
      try {
        const resp = await fetch('https://fakestoreapi.com/products/2')
        const data = await resp.json()
        setProduct({ ...data, stock: Math.floor(Math.random() * 50) })
      } catch (error) {
        console.error(error)
        setError(true)
      } finally {
        setLoading(false)
      }
    }
    getItem()
  }, [])

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
