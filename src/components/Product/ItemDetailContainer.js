import React, {useEffect, useState} from 'react'
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { getProduct } from '../../mock/products';

const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        getProduct(id)
        .then((res) => {
            setItem(res);
        })
        .catch((error) => {
            console.log(error);
        });
    },[]);

    return (
        <div className="container">
            <ItemDetail producto={item} />
        </div>

    );
}

export default ItemDetailContainer