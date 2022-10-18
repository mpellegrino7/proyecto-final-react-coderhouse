import React from 'react'
import NavBar from './components/NavBar/NavBar'
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

const mensaje = 'Hola! Estas son nuestras ofertas de la semana'

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting={mensaje} />
    </>
  )
}

export default App
