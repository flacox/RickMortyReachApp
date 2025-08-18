import { useParams, Link } from "react-router-dom"
import { useEffect, useState } from "react"

export default function DetallePersonaje() {
  const { id } = useParams();
  const [personaje, setPersonaje] = useState(id);

  // const reqApiPersonaje = async () => {
  //   const api = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
  //   const personajeApi = await api.json();
  //   setPersonaje(personajeApi);
  // };

  // useEffect(() => {
  //   reqApiPersonaje();
  // }, []);
  
 useEffect(() => {
  fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then((res) => res.json())
    .then((data) => setPersonaje(data))
    .catch((err) => console.error(err));
}, [id]); 



  if (!personaje) return <p>Cargando...</p>;

  return (
    <div className="App">
      <header className="App-header">
        <div className="personaje-container">
          <h1>Detalles del Personaje</h1>
          <h2>{personaje.name}</h2>
          <div>
            <img src={personaje.image} alt={personaje.image} />
          </div>
          <h6>
            {personaje.status === "Alive" ? (
              <>
                <span className="alive" />
                Alive
              </>
            ) : (
              <>
                <span className="dead" />
                Dead
              </>
            )}
          </h6>
          <p>
            <span className="text-gray">Especie: </span>
            <span>{personaje.species}</span>
          </p>
          <p>
            <span className="text-gray">Genero: </span>
            <span>{personaje.gender}</span>
          </p>
        </div>
        <Link className="back-home" to="/personajes">Volver a personajes</Link>
      </header>


    </div>


  )
}

