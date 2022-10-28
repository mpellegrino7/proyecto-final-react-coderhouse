import React from 'react'
import { useContext } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { Context } from '../CartContext/CartContext'

const CartWidget = () => {
  const { cantidad } = useContext(Context)
  return (
    <div>
      {cantidad > 0 && <p>{cantidad}</p>}
      <ShoppingCartIcon sx={{ fontSize: 40 }} />
    </div>
  )
}

export default CartWidget
