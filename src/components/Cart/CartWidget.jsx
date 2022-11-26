import React, { useContext } from 'react'
import {BsFillCartFill} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'

const CartWidget = () => {

  const {cantItems} = useContext(CartContext)

  return (
      <Link to="/cart" className='cart-widget'>
          <BsFillCartFill />
          <p>{ cantItems===0 ? " " : cantItems }</p>
      </Link>
  )
}

export default CartWidget