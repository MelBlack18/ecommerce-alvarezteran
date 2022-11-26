import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'

const CartCard = ({cartItem}) => {
    return (
        <div>
            <article className="info">
                <h2>{cartItem.title}</h2>
                <h5>Precio Unitario: ${cartItem.price}</h5>
                <h5>Cantidad: {cartItem.cant}</h5>
                <Link to={`/item/${cartItem.id}`}>Agregar más unidades</Link>
            </article>
        </div>
    )
}

export default CartCard