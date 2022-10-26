import React from 'react'
import NavBar from './components/NavBar/NavBar'
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Cart } from './components/Cart/Cart'
import CartProvider from './components/CartContext/CartContext'

const mensaje = 'Hola! Estas son nuestras ofertas de la semana'

function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route
              path="/"
              element={<ItemListContainer greeting={mensaje} />}
            />
            <Route
              path="/category/:id"
              element={<ItemListContainer greeting={mensaje} />}
            />
            <Route path="/product/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
  )
}

export default App
