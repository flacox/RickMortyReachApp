import {useNavigate} from 'react-router-dom';
import imageRickMorty from '../img/rick-morty.png';


export default function Inicio() {

    const navigate = useNavigate();

    const irAPersonajes = () => {
        navigate("/personajes");
    }

  return (
    <div className='App'>
        <header className='App-header'>
            <h1 className='title'>Rick & Morty</h1>

            <img src={imageRickMorty} alt='Rick & Morty' className='img-home'></img>
            <button className='btn-search' onClick={irAPersonajes}>Buscar Personajes</button>
        </header>
    </div>
  )
}
