import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../img/logo.png'
import CartWidget from '../Cart/CartWidget'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <Link to="/" className='linklogo'><img className='logo' src={logo} alt="Logo" /></Link>
        <ul className='menu'>
            <li><NavLink to="/category/boxes">Boxes</NavLink></li>
            <li><NavLink to="/category/dulce">Dulce</NavLink></li>
            <li><NavLink to="/category/salado">Salado</NavLink></li>
        </ul>
        <CartWidget />
    </nav>
  )
}

export default Navbar