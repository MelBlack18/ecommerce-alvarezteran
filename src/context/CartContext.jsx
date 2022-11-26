import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({children}) => {
    const [cartProds, setCartProds] = useState([])
    const [cantItems, setCantItems] = useState(0)

    const addToCart = (cant, currentItem) => {
        const copiaCart = [...cartProds]

        if (isInCart(currentItem.id)) {

            const mapeo = copiaCart.map((prod) => {
                if (prod.id === currentItem.id) { prod.cant = cant } 

                return{
                    cant : prod.cant,
                    ...prod
                }
            })
            setCartProds(mapeo)

        } else {
            setCartProds([...cartProds,{cant, ...currentItem}])

        }
    }

    const isInCart = (id) => {
        return cartProds.some((prod)=> prod.id === id)
    }

    const cantInCart = (id) => {
        const index = cartProds.findIndex(prod => prod.id === id)
        const cant = cartProds.map((prod) => prod.id === id ? prod.cant : 0)
        return cant[index]
    }

    const totalCompra = (prods) => {
        const subtotal = prods.map((prod)=> prod.cant * prod.price)
        const total = subtotal.reduce((a,b)=> a+b,0)
        return total
    }

    const borrarCarrito = () => {
        setCartProds([])
    }

    const eliminarProd = (id) => {
        const filtro = cartProds.filter((prod) => prod.id !== id)
        setCartProds(filtro)
    }

    const widget = (cant) => {
        setCantItems(cantItems+cant)
    }

    return (
        <CartContext.Provider value={{cartProds, addToCart, isInCart, cantInCart, cantItems, totalCompra, borrarCarrito, eliminarProd, widget}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider