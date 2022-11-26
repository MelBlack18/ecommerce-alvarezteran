import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const CartCard = ({cartItem}) => {
    return (
        <div>
            <article className="info">
                <h2>{cartItem.title}</h2>
                <h5>Precio Unitario: ${cartItem.price}</h5>
                <h5>Cantidad: {cartItem.cant}</h5>
            </article>
        </div>
    )
}

export default CartCard