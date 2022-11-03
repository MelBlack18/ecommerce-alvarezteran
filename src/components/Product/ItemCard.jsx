import React from 'react'
import { Link } from 'react-router-dom';

const ItemCard = ({producto}) => {
    return (
        <div className="item">
            <img src={producto.img} width="200px" alt={producto.title} />
            <article className="info">
                <h2>{producto.title}</h2>
                <h5>${producto.price}</h5>
                <Link to={`/item/${producto.id}`}>Ver Más</Link>
            </article>
            
        </div>
    );
};

export default ItemCard