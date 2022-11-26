import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ItemDetailContainer from './components/Product/ItemDetailContainer';
import ItemListContainer from './components/Product/ItemListContainer';
import Cart from './components/Cart/Cart';
import CartProvider from './context/CartContext';
import Checkout from './components/Checkout/Checkout';
import OrderPlaced from './components/Checkout/OrderPlaced'
import Navbar from './components/Main/Navbar';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:id' element={ <ItemListContainer /> } />
          <Route path='/item/:id' element={ <ItemDetailContainer />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/order/:id' element={<OrderPlaced />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App; 