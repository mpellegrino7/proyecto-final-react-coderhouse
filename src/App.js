import React from 'react'
import NavBar from './components/NavBar/NavBar'
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'

const mensaje = 'Hola! Estas son nuestras ofertas de la semana'

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting={mensaje} />
      <ItemDetailContainer />
    </>
  )
}

export default App
