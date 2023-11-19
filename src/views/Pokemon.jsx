import Card from "react-bootstrap/Card";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Pokemon() {
  const [pokemon, setPokemon] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { name } = useParams();
  const { types, stats } = pokemon || {};

  const getPokemon = async () => {
    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const json = await res.json();
      setPokemon(json);
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    } catch (error) {
      console.log("error");
    }
  };
  useEffect(() => {
    getPokemon();
  }, []);

  if ((!pokemon, isLoading)) {
    return (
      <div className="card-container">
        <div className="pokemon"></div>
      </div>
    );
  }
  console.log(pokemon);
  return (
    <div className="card-container">
      <Card>
        <Card.Img className="card-img" variant="top" src={pokemon.sprites.front_default} />
        <Card.Body className="card-body">
          <h1 className="poke-name">{pokemon.name}</h1>
          <h2>Type:</h2>
          <Card.Text> {types && types.map((type, index) => <li key={index}>{type.type.name}</li>)}</Card.Text>
          <h2>Stats:</h2>
          <Card.Text> {stats && stats.map((stat, index) => <li key={index}>{`${stat.stat.name}: ${stat.base_stat} `}</li>)}</Card.Text>
          <h2>Weight:</h2>
          <Card.Text>
            <li>{pokemon.weight}</li>
          </Card.Text>
          <h2>Height:</h2>
          <Card.Text>
            <li>{pokemon.height}</li>
          </Card.Text>
        </Card.Body>
      </Card>
      <Link className="back" to="/pokemons">
        Volver &lt;-{" "}
      </Link>
    </div>
  );
}

export default Pokemon;
