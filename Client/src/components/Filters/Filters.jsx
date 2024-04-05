import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  filterGenre,
  orderYear,
  filterMovie,
  orderMovie,
} from "../../redux/actions";

const Filters = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const handleFilter = (e) => {
    let genre = e.target.value;
    if (pathname === "/favorites") {
      dispatch(filterGenre(genre));
    }
    if (pathname === "/") {
      dispatch(filterMovie(genre));
    }
  };

  const handleOrder = (e) => {
    let order = e.target.value;
    if (pathname === "/favorites") {
      dispatch(orderYear(order));
    }
    if (pathname === "/") {
      dispatch(orderMovie(order));
    }
  };

  return (
    <>
      <div>
        <select
          name=""
          id=""
          onChange={handleFilter}
          defaultValue="Filter by genre"
        >
          <option disabled>Filter by genre</option>
          <option value="Action">Action</option>
          <option value="Adventure">Adventure</option>
          <option value="Animation">Animation</option>
          <option value="Comedy">Comedy</option>
          <option value="Drama">Drama</option>
          <option value="Documentary">Documentary</option>
          <option value="History">History</option>
          <option value="Mystery">Mystery</option>
          <option value="Music">Music</option>
          <option value="Romance">Romance</option>
          <option value="Short">Short</option>
          <option value="Thriller">Thriller</option>
          <option value="War">War</option>
          <option value="All">All</option>
        </select>

        <select onChange={handleOrder} defaultValue="Order by year">
          <option disabled>Order by year</option>
          <option value="recent">recent</option>
          <option value="older">older</option>
        </select>
      </div>
    </>
  );
};

export default Filters;
