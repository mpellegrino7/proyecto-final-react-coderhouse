import React from 'react'
import logo from '../../assets/logo.png'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
      <header>
        <Link to={'/'}>
          <img src={logo} alt="logo" />
        </Link>
        <Link to={'/'}>
          <h1>Mi Tienda</h1>
        </Link>
        <nav>
          <NavLink to="/category/women's clothing">Mujeres</NavLink>
          <NavLink to="/category/men's clothing">Hombres</NavLink>
          <NavLink to="/category/jewelery">Accesorios</NavLink>
        </nav>
        <Link to="/cart">
          <CartWidget />
        </Link>
      </header>
    </>
  )
}

export default NavBar
