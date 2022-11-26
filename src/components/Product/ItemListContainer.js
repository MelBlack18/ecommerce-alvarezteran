import React, {useEffect, useState} from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import {getDocs, query, where} from 'firebase/firestore';
import {productosDb} from '../../services/firebaseConfig';

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const { id } = useParams();
    
    const filtro = id ? query(productosDb, where("category", "==", id)) : productosDb

    useEffect(() => {
        getDocs(filtro)
            .then((res)=>{
                const productos =  res.docs.map((prod)=>{
                    return {
                        id : prod.id,
                        ...prod.data()
                    }
                })
                setItems(productos);
            })
            .catch((error) => {
                console.log(error);
            })
    },[id])

    return (
        <div className="container">
            <ItemList items={items} />
        </div>
    );
}

export default ItemListContainer