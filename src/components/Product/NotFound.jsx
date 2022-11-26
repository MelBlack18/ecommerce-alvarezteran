import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
        <p>Parece que el producto que estás buscando no existe</p>
        <Link to="/">Volver a la Home</Link>
    </div>
  )
}

export default NotFound