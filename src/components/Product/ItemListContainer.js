import React, {useEffect, useState} from 'react';
import { getProducts } from '../../mock/products';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        getProducts(id)
            .then((res) => {
                setItems(res);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [id]);

    return (
        <div className="container">
            <ItemList items={items} />
        </div>
    );
}

export default ItemListContainer