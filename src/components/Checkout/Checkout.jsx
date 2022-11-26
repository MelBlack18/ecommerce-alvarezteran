import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import {useState, useContext} from 'react';
import { Link } from 'react-router-dom';
import {CartContext} from '../../context/CartContext';
import { db } from '../../services/firebaseConfig';

const Checkout = () => {
  const {cartProds, totalCompra, borrarCarrito, cantItems, widget} = useContext(CartContext)

  const [data, setData] = useState({
    nombre:"Nombre", 
    apellido:"Apellido", 
    telefono:"Telefono", 
    email:"Email",
    email2:"Repetir Email"
  })

  const [idCompra, setIdCompra] = useState("")
  const [checkout, setCheckout] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  }

  const enviarDatos = (e) => {
    e.preventDefault()

    const compra = collection(db,"ordenes")
    const ordenCompleta = { 
      comprador: data,
      items: cartProds,
      total: totalCompra(cartProds),
      fecha: serverTimestamp(),
      estado : "generada"
    }

    addDoc(compra, ordenCompleta)
      .then((res) => {
        setIdCompra(res.id)
        borrarCarrito()
        widget(-cantItems)
        setCheckout(true)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  if (checkout) {
    return(
      <div>Gracias por tu compra, tu codigo de seguimiento es el <Link to={`/order/${idCompra}`}>{idCompra}</Link></div>
    )
  }

  return (
    <div>
      <h1>Checkout</h1>
      <h2>Resumen de la compra</h2>

      {cartProds.map((producto) => {
            return <div key={producto.id}>
              <p>{producto.title}</p>
              <p>${producto.price}.- x {producto.cant} unidades = ${producto.price*producto.cant}.-</p>
            </div>
        })}
      <p>Total a Pagar: ${totalCompra(cartProds)}.-</p>

      <h2>Datos del Comprador</h2>

      <form onSubmit={enviarDatos}>
        <input type="text" name='nombre' value={data.nombre} onChange={handleChange} />
        <input type="text" name='apellido' value={data.apellido} onChange={handleChange} />
        <input type="text" name='telefono' value={data.telefono} onChange={handleChange} />
        <input type="text" name='email' value={data.email} onChange={handleChange} />
        <input type="text" name='email2' value={data.email2} onChange={handleChange} />
        <input type="submit" value="Terminar Compra" disabled={data.email === data.email2 ? false : true} />
      </form>

    </div>
  )
}

export default Checkout