import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Inicio from './Pages/Inicio';
import Personajes from './Pages/Personajes';
import Episodios from './Pages/Episodios';
import './App.css';

function App() {
  
  return(
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/personajes' element={<Personajes />} />
        <Route path='/episodios' element={<Episodios />} />
      </Routes>
    </Router>
  
  );
}

export default App;
