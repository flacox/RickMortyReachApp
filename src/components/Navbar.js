import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className='navbar'>
        <div>
            <Link to="/">Inicio</Link>
            <Link to="/personajes">Personajes</Link>
            <Link to="/episodios">Episodios</Link>
        </div>
    </nav>
  );
}
