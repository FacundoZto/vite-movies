const search = (name) => {
  return async (dispatch) => {
    try {
      let response = await fetch(`http://localhost:3001/movies/${name}`);
      let movie = await response.json();

      if (!movie.imdbID) {
        throw new Error("Movie not found");
      } else {
        dispatch({
          type: "SEARCH",
          payload: movie,
        });
      }
    } catch (error) {
      alert("Movie not found");
      throw new Error("Movie not found: " + error.message);
    }
  };
};

const close = (id) => {
  return {
    type: "CLOSE",
    payload: id,
  };
};

const filterMovie = (genre) => {
  return {
    type: "FILTER",
    payload: genre,
  };
};

const orderMovie = (order) => {
  return {
    type: "ORDER",
    payload: order,
  };
};

const addFav = (movie) => {
  const endpoint = "http://localhost:3001/movies/fav";

  return async (dispatch) => {
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(movie),
      });

      const fav = await response.json();

      dispatch({
        type: "ADD_FAV",
        payload: fav,
      });
    } catch (error) {
      throw Error(error.message);
    }
  };
};

const removeFav = (id) => {
  const endpoint = `http://localhost:3001/movies/fav/${id}`;

  return async (dispatch) => {
    try {
      const response = await fetch(endpoint, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
        },
      });
      const data = await response.json();

      dispatch({
        type: "REMOVE_FAV",
        payload: data,
      });
    } catch (error) {
      throw Error(error.message);
    }
  };
};

const filterGenre = (genre) => {
  return {
    type: "FILTER_FAV",
    payload: genre,
  };
};

const orderYear = (order) => {
  return {
    type: "ORDER_FAV",
    payload: order,
  };
};

export {
  search,
  close,
  filterMovie,
  orderMovie,
  addFav,
  removeFav,
  filterGenre,
  orderYear,
};
