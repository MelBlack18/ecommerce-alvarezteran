import React from 'react'
import logo from '../../src/img/logo.png'
import CartWidget from './CartWidget'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <img className='logo' src={logo} alt="Logo" />
        <ul className='menu'>
            <li><a href="#">Boxes</a></li>
            <li><a href="#">Dulce</a></li>
            <li><a href="#">Salado</a></li>
        </ul>
        <CartWidget />
    </nav>
  )
}

export default Navbar