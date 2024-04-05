import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { addFav, removeFav } from "../../redux/actions";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Card = (props) => {
  const { name, year, img, onClose, id } = props;
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const [state, setState] = useState(false);
  const favorites = useSelector((state) => state.favorites);

  useEffect(() => {
    favorites.forEach((m) => {
      if (m.id === id) {
        setState(true);
      }
    });
  }, [favorites, id]);

  const handleClick = () => {
    if (state) {
      setState(false);
      dispatch(removeFav(id));
    } else {
      setState(true);
      dispatch(addFav(props));
    }
  };

  return (
    <>
      <div>
        {pathname !== "/favorites" && (
          <button onClick={() => onClose(id)}>x</button>
        )}
        {state ? (
          <button onClick={handleClick}>❤️</button>
        ) : (
          <button onClick={handleClick}>🤍</button>
        )}
        <Link to={`/detail/${id}`}>
          <img alt={name} src={img} />
          <h3>{name}</h3>
          <h3>{year}</h3>
        </Link>
      </div>
    </>
  );
};

Card.propTypes = {
  name: PropTypes.string,
  year: PropTypes.string,
  img: PropTypes.string,
  onClose: PropTypes.func,
  id: PropTypes.string,
};

export default Card;
