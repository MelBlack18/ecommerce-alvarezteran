import React from 'react';
import ItemCard from './ItemCard';

const ItemList = ({items}) => {
    return (
        <div className="item-list">
            {items.map((producto) => {
                return <ItemCard producto={producto} key={producto.id} />;
            })}
        </div>
    );
}

export default ItemList