import './App.css';
import NavBar from './components/navbar/navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemContador from './components/ItemContador/ItemContador';
function App() {
  return (
    <div className="App">
    <NavBar />
    <ItemListContainer greeting={"Bienvenidos a la tienda virtual de Librería Fátima"}/>  
    <ItemContador initial={1} stock={10} onAdd={(quantity) => console.log("Cantidad agregada ", quantity)}/>
    </div>
  );
}

export default App;
