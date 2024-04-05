import Card from "../Card/Card";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { close } from "../../redux/actions";

const Cards = () => {
  const movies = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  const onClose = (id) => {
    dispatch(close(id));
  };

  return (
    <>
      {movies.map((m) => (
        <Card
          key={m.imdbID}
          id={m.imdbID}
          name={m.Title}
          year={m.Year}
          img={m.Poster}
          genre={m.Genre}
          onClose={onClose}
        />
      ))}
    </>
  );
};

Cards.propTypes = {
  movies: PropTypes.array,
};

export default Cards;
