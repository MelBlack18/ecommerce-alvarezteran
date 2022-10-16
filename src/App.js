import './App.css';
import Header from './components/Header';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <>
      <Header />
      <ItemListContainer greeting={"Pastelería y Panadería para la hora del té"} />
    </>
  );
}

export default App; 