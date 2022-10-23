import React, { useState, useEffect } from 'react'
import { ItemList } from '../ItemList/ItemList'
import { LinearProgress } from '@mui/material'
import { useParams } from 'react-router-dom'
import { API } from '../../API/api'

const ItemListContainer = ({ greeting }) => {
  const { id } = useParams()
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const url = id ? `${API.CATEGORY}${id}` : API.LIST
    const getItems = async () => {
      try {
        const respuesta = await fetch(url)
        const data = await respuesta.json()
        setProducts(data)
      } catch (err) {
        console.error(err)
        setError(true)
      } finally {
        setLoading(false)
      }
    }
    getItems()
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
