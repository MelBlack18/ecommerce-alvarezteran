import React, { useState, useContext, useEffect }from 'react'
import { CartContext } from '../../context/CartContext';
import CartCard from './CartCard';
import { Link } from 'react-router-dom'

const Cart = () => {
  const [totalCart, setTotalCart] = useState()
  const {cartProds, totalCompra, cantItems, eliminarProd, borrarCarrito, widget} = useContext(CartContext)

  useEffect(() => {
    setTotalCart(totalCompra(cartProds))
  }, [totalCart])

  const eliminarDelCart = (producto) => {
    eliminarProd(producto.id)
    setTotalCart(totalCart-producto.cant*producto.price)
    widget(-producto.cant)
  }

  const vaciarCart = () => {
    borrarCarrito()
    widget(-cantItems)
    setTotalCart(0)
  }

  if (cantItems === 0) {
    return <div>Tu carrito está vacío, empezá tu compra <Link to="/">aquí</Link> </div>
  }

  return (
    <div className="cart-list">
        {cartProds.map((producto) => {
            return <div className="item" key={producto.id}>
            <CartCard cartItem={producto} />
            <button onClick={() => eliminarDelCart(producto)} >Eliminar Producto</button>
            </div>
        })}
        <button onClick={vaciarCart}> Vaciar Carrito </button>
        <article>
          <h2>Total de la Compra: $ {totalCart}</h2>
          <Link to="/checkout" className='boton-chko'>Finalizar Compra</Link>
        </article>
    </div>
  )
}

export default Cart