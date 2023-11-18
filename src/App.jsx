import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles/App.css";
import { Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Home from "./views/Home";
import Pokemons from "./views/pokemons";
import Pokemon from "./views/Pokemon";
import NotFound from "./views/NotFound";

function App() {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemons/" element={<Pokemons />} />
        <Route path="/pokemons/:name" element={<Pokemon />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
