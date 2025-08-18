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

  const fecha = new Date(personaje.created).toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });



  if (!personaje) return <p>Cargando...</p>;

  return (
    <div className="App">
      <header className="App-header">
        <div className="personaje-container">
          <div className="card-detalle">
            <img src={personaje.image} alt={personaje.name} className="card-img" />
            <div className="card-info">
              <h2>{personaje.name}</h2>
              <p><strong>Estado: </strong>
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
              </p>
              <p><strong>Especie:</strong> {personaje.species}</p>
              <p><strong>Género:</strong> {personaje.gender}</p>
              <p><strong>Origen:</strong> {personaje.origin?.name}</p>
              <p><strong>Ubicación:</strong> {personaje.location?.name}</p>
              <p>
                <strong>Creado:</strong>{" "}
                {new Date(personaje.created).toLocaleDateString("es-ES", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit"
                })}
              </p>
            </div>
          </div>
        </div>
        <Link className="back-home" to="/personajes" style={{ color: "white" }}>Volver a personajes</Link>
      </header>


    </div>


  )
}

