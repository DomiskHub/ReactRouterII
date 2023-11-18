import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      <h1>¡Bienvenido maestro pokemon!</h1>
      <img className="pikachu" src="https://pbs.twimg.com/tweet_video_thumb/E7UTSSuVUAEg74n.jpg" alt="pikachu pic" />
      <Link className="go-to" to="/pokemons">
        Ir a Pokemones
      </Link>
    </div>
  );
};

export default Home;
