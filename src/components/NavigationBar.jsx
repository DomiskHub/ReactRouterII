import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

function NavigationBar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Link to="/">
            <img className="pokeball-img" src="/pokeball.png"></img>
          </Link>
          <Nav>
            <NavLink className={({ isActive }) => (isActive ? "poke-nav" : undefined)} to="/">
              Home
            </NavLink>
            <NavLink className={({ isActive }) => (isActive ? "poke-nav" : undefined)} to="/pokemons">
              Pokemons
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
      <br />
    </>
  );
}

export default NavigationBar;
