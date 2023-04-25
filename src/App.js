
import './App.css';
import NavBar from './components/NavBar/NavBar.js';
import ItemListConteiner from './components/ItemListConteiner/ItemListConteiner';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import{ BrowserRouter, Routes, Route } from 'react-router-dom'



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListConteiner/>}/>
          <Route path='/category/:categoryId' element={<ItemListConteiner/>}/>
          <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
          <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
        </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
