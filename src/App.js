
import './App.css';
import NavBar from './components/NavBar/NavBar.js';
import ItemListConteiner from './components/ItemListConteiner/ItemListConteiner';
import ItemCount from './components/ItemCount/ItemCount';



function App() {
  return (
    <div className="App">
     <NavBar/>
     <ItemListConteiner greeting={'Bienvenidos'}/>
     <ItemCount initial={1} stock={10} onAdd={(quantity)=>console.log('la cantidad agregada', quantity)}/>
    </div>
  );
}

export default App;
