import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ItemDetailContainer from './components/Product/ItemDetailContainer';
import ItemListContainer from './components/Product/ItemListContainer';
import Header from './components/Main/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/category/:id' element={ <ItemListContainer />} />
        <Route path='/item/:id' element={ <ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App; 