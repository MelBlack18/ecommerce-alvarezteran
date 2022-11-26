import React, {useEffect, useState}  from 'react'
import {useParams} from 'react-router-dom';
import {getDoc, doc} from 'firebase/firestore';
import {ordenesDb} from '../../services/firebaseConfig';
import CartCard from '../Cart/CartCard';

const OrderPlaced = () => {
  const { id } = useParams()
  const order = doc(ordenesDb, id)
  const [orden, setOrden] = useState({})
  const [loading, setLoading] = useState(true)

useEffect(() => {
  getDoc(order)
      .then((res)=>{
        setOrden({id: id, ...res.data()})
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(()=>{
        setLoading(false)
    })
},[id])

if (loading) {
  return (
      <div>
          <h1>Cargando...</h1>
      </div>
  )
} 

  return (
    <div>
      <h2>Orden Número {orden.id}</h2>
      <h4>Fecha de Creación: {orden.fecha.toDate().toDateString()}</h4>
      <h4>Estado: {orden.estado}</h4>
      <h3>Productos en la Orden:</h3>
      {orden.items.map((producto) => {
          return <div className="item" key={producto.id}>
          <CartCard cartItem={producto} />
          </div>
      })}
      <h3>Total Abonado: ${orden.total}</h3>
    </div>
  )
}

export default OrderPlaced