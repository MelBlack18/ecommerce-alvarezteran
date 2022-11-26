import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext';
import ItemCount from './ItemCount';

const ItemDetail = ({producto}) => {

    const {addToCart} = useContext(CartContext)

    const onAdd = (qty) =>{
        addToCart(qty, producto)
    }
    
    return (
        <article>
            <h1>{producto.title}</h1>
            <img src={producto.img} alt={producto.title} width="500px" />
            <div>
                <p>{producto.descripcion}</p>
                <h3>${producto.price}</h3>
                <ItemCount max={producto.stock} onAdd={onAdd} />
            </div>
        </article>
    );
}

export default ItemDetail