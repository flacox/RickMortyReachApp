
import imageRickMorty from './img/rick-morty.png';
import './App.css';
import { useState, useEffect } from 'react';
import Characters from './components/Characters';

function App() {
  const [characters, setCharacters] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);

  const reqApi = async () => {
    const api = await fetch(`https://rickandmortyapi.com/api/character/?page=${currentPage}`);
    const characterApi = await api.json();
    setCharacters(characterApi.results);
  };

  useEffect(() => {
    reqApi();
  }, [currentPage]);

 

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Rick & Morty</h1>

        {characters ? (

          <Characters characters={characters} setCharacters={setCharacters} currentPage={currentPage} setCurrentPage={setCurrentPage} />) : (
            
          <>
            <img src={imageRickMorty} alt="Rick & Morty" className='img-home' />
            <button className='btn-search' onClick={reqApi}>Buscar Personajes</button>
          </>

          )}
      </header>
    </div>
  );
}

export default App;
