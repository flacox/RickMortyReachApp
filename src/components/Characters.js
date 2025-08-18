import Pagination from "./Pagination";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Characters(props) {
    const { characters, setCharacters, currentPage, setCurrentPage } = props;


    const navigate = useNavigate();

    const backHome = () => {
        setCharacters(null);
        navigate("/");
    }

    return (
        <div className="characters">
            <h1>Personajes de la Serie</h1>

            <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />

            <span className="back-home" onClick={backHome}>Volver a Home</span>
            
            <div className="container-characters">
                {characters.map((character, index) => (
                    <div className="character-container" key={index}>
                        <div>
                            <img src={character.image} alt={character.name} />
                        </div>
                        <div>
                            <Link className="nombrePersonaje" to={`/personaje/${character.id}`} >
                                <h3>{character.name}</h3>
                            </Link>
                            <h6>
                                {character.status === "Alive" ? (
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
                                <span className="text-gray">Episodios: </span>
                                <span>{character.episode.length}</span>
                            </p>
                            <p>
                                <span className="text-gray">Origen: </span>
                                <span>{character.origin.name}</span>
                            </p>
                            <p>
                                <span className="text-gray">Especie: </span>
                                <span>{character.species}</span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />

            <span className="back-home" onClick={backHome}>Volver a Home</span>
        </div>
    );
}