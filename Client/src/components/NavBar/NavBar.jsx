import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const NavBar = () => {
  const { pathname } = useLocation();

  return (
    <>
      <div>
        <Link to="/about">
          <button>About</button>
        </Link>
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/favorites">
          <button>Favorites</button>
        </Link>
        {pathname === "/" && <SearchBar />}
      </div>
    </>
  );
};

export default NavBar;
