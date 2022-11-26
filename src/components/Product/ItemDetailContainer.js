import React, {useEffect, useState} from 'react'
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import {doc, getDoc} from 'firebase/firestore';
import {productosDb} from '../../services/firebaseConfig';
import NotFound from './NotFound';


const ItemDetailContainer = () => {
    const [item, setItem] = useState({})
    const { id } = useParams()
    const producto = doc(productosDb, id)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getDoc(producto)
            .then((res) => {
                res.data() === undefined ? setItem({}) : setItem({id: id, ...res.data()})
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(()=>{
                setLoading(false)
            })
    },[])

    if (loading) {
        return (
            <div>
                <h1>Cargando...</h1>
            </div>
        )
    } 

    return (
        <div className="container">
            { item.id === undefined ?  <NotFound /> : <ItemDetail producto={item} /> }
        </div>
    )
}

export default ItemDetailContainer