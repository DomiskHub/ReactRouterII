import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const Pokemons = () => {
  const [pokemons, setPokemons] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState("");

  const navigate = useNavigate();
  const goDetails = () => {
    navigate(`/pokemons/${selectedPokemon}`);
  };

  const getData = async () => {
    try {
      const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0");
      const json = await res.json();
      setPokemons(json.results);
    } catch (error) {
      console.log("error");
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const handleSelect = (e) => {
    setSelectedPokemon(e.target.value);
  };
  return (
    <div className="select">
      <div className="select-sel">
        <h1>Selecciona un pokemon</h1>
        <Form.Select className="select-size" aria-label="Select a Pokémon" onChange={handleSelect} value={selectedPokemon}>
          <option>Select a Pokémon</option>
          {pokemons &&
            pokemons.map((pokemon) => (
              <option className="poke-select" key={pokemon.name} value={pokemon.name}>
                {pokemon.name}
              </option>
            ))}
        </Form.Select>
        <Button onClick={goDetails} variant="dark">
          Ver Detalle
        </Button>
      </div>
      <Link className="back" to="/">
        Volver &lt;-{" "}
      </Link>
    </div>
  );
};

export default Pokemons;
