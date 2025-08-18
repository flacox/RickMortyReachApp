import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Inicio from './Pages/Inicio';
import Personajes from './Pages/Personajes';
import './App.css';
import DetallePersonaje from './Pages/DetallePersonaje';

function App() {
  
  return(
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/personajes' element={<Personajes />} />
        <Route path='/personaje/:id' element={<DetallePersonaje />} />
      </Routes>
    </Router>
  
  );
}

export default App;
