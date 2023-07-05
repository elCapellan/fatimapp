import './App.css';
import NavBar from './components/navbar/navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
function App() {
  return (
    <div className="App">
    <NavBar />
    <ItemListContainer greeting={"Bienvenidos a la tienda virtual de Librería Fátima"}/>   
    </div>
    

  );
}

export default App;
