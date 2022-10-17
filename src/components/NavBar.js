import React from 'react'
import logo from '../assets/logo.png'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import './NavBar.css'

const NavBar = () => {
  return (
    <>
      <header>
        <img src={logo} alt="logo" />
        <h1>Mi Tienda</h1>
        <nav>
          <a href="">Categoría 1</a>
          <a href="">Categoría 2</a>
          <a href="">Categoría 3</a>
          <a href="">Categoría 4</a>
        </nav>
        <ShoppingCartIcon sx={{ fontSize: 40 }} />
      </header>
    </>
  )
}

export default NavBar
