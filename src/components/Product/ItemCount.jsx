import React, {useState, useEffect, useContext} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import {CartContext} from '../../context/CartContext';
import {useParams} from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

const ItemCount = ({max, onAdd}) => {
    const {isInCart, cantInCart, eliminarProd, widget} = useContext(CartContext)
    const { id } = useParams()
    const current = isInCart(id) ? cantInCart(id) : 0
    const [count, setCount] = useState(current)

    useEffect(() => {
        if (count !== 0 && count !== cantInCart(id)) {
            onAdd(count)
        } else if (count === 0 && isInCart(id)) {
            eliminarProd(id)
        }
    }, [count])

    const toastBorrar = () => {toast.error( count === 1 ? 'Se eliminó el producto del carrito' : 'Se eliminó una unidad del carrito',
        {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });}
        
    const toastSumar = () => {toast.success( count === 0 ? 'Se añadió el producto del carrito' : 'Se sumó una unidad del carrito', 
        {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });}

    const restar = () => {
        setCount(count-1)
        widget(-1)
        toastBorrar()
    }

    const sumar = () => {
        setCount(count+1)
        widget(1)
        toastSumar()
    }

    return (
        <div>
            <section className='botones'>
                <button onClick={restar} disabled={count <= 0}> - </button> 
                <input className='cantidad' type='text' disabled={true} value={count} />
                <button onClick={sumar} disabled={count === max}> + </button>
            </section>
            <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            />
        </div>
    )
}

export default ItemCount