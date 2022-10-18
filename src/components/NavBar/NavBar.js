import React from 'react'
import logo from '../../assets/logo.png'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'

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
        <CartWidget />
      </header>
    </>
  )
}

export default NavBar
