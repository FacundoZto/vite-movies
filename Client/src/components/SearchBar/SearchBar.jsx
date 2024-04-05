import { search } from "../../redux/actions";
import { useState } from "react";
import { useDispatch } from "react-redux";

const SearchBar = () => {
  const [movie, setMovie] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setMovie(e.target.value);
  };

  const handleClick = () => {
    dispatch(search(movie));
    setMovie("");
  };

  return (
    <>
      <div>
        <input type="search" value={movie} onChange={handleChange} />
        <button onClick={handleClick}>search</button>
      </div>
    </>
  );
};

export default SearchBar;
