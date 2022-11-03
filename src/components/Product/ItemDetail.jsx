import React from 'react'

const ItemDetail = ({producto}) => {
    return (
        <article>
            <h1>{producto.title}</h1>
            <img src={producto.img} alt={producto.title} width="500px" />
            <div>
                <p>{producto.descripcion}</p>
                <h3>${producto.price}</h3>
            </div>
        </article>
    );
}

export default ItemDetail