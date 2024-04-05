const initialState = {
  movies: [],
  allMovies: [],
  favorites: [],
  allFavorites: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SEARCH": {
      const repeated = state.movies.some(
        (m) => m.imdbID === action.payload.imdbID
      );
      if (!repeated) {
        return {
          ...state,
          movies: [...state.allMovies, action.payload],
          allMovies: [...state.allMovies, action.payload],
        };
      } else {
        return {
          ...state,
        };
      }
    }

    case "CLOSE":
      return {
        ...state,
        movies: state.movies.filter((m) => m.imdbID !== action.payload),
        allMovies: state.allMovies.filter((m) => m.imdbID !== action.payload),
      };

    case "FILTER":
      if (action.payload === "All") {
        return {
          ...state,
          movies: state.allMovies,
        };
      } else {
        let copyMovies = [...state.allMovies].filter((m) =>
          m.Genre.includes(action.payload)
        );
        return {
          ...state,
          movies: copyMovies,
        };
      }

    case "ORDER":
      {
        let copyOrder = [...state.allMovies];
        if (action.payload === "older") {
          return {
            ...state,
            movies: copyOrder.sort((a, b) => a.Year - b.Year),
          };
        }
        if (action.payload === "recent") {
          return {
            ...state,
            movies: copyOrder.sort((a, b) => b.Year - a.Year),
          };
        }
      }
      break;

    case "ADD_FAV":
      return {
        ...state,
        favorites: action.payload,
        allFavorites: action.payload,
        //favorites: [...state.allFavorites, action.payload],
        //allFavorites: [...state.allFavorites, action.payload],
      };

    case "REMOVE_FAV":
      return {
        ...state,
        favorites: action.payload,
        allFavorites: action.payload,
        //favorites: state.favorites.filter((m) => m.id !== action.payload),
        //allFavorites: state.allFavorites.filter((m) => m.id !== action.payload),
      };

    case "FILTER_FAV":
      if (action.payload === "All") {
        return {
          ...state,
          favorites: state.allFavorites,
        };
      } else {
        let copyFav = [...state.allFavorites].filter((m) =>
          m.genre.includes(action.payload)
        );
        return {
          ...state,
          favorites: copyFav,
        };
      }

    case "ORDER_FAV":
      {
        let copyOrder = [...state.allFavorites];
        if (action.payload === "older") {
          return {
            ...state,
            favorites: copyOrder.sort((a, b) => a.year - b.year),
          };
        }
        if (action.payload === "recent") {
          return {
            ...state,
            favorites: copyOrder.sort((a, b) => b.year - a.year),
          };
        }
      }
      break;

    default:
      return {
        ...state,
      };
  }
};

export default reducer;
