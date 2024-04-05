import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// eslint-disable-next-line no-undef
const apiKey = process.env.REACT_APP_API_KEY;

const Detail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?i=${id}&apikey=${apiKey}`)
      .then((response) => response.json())
      .then((data) => data.Title && setMovie(data));
    return setMovie({});
  }, [id]);

  return (
    <>
      {movie.Title && (
        <div>
          <img alt={movie?.Title} src={movie?.Poster} />
          <div>
            {movie.Type === "movie" ? (
              <h4>Movie: {movie?.Title}</h4>
            ) : (
              <h4>Serie: {movie?.Title}</h4>
            )}
            <h4>Year: {movie?.Year}</h4>
            <h4>Genre: {movie?.Genre}</h4>
            <h4>Director: {movie?.Director}</h4>
            <h4>Writer: {movie?.Writer}</h4>
            <h4>Actors: {movie?.Actors}</h4>
            <h4>Country: {movie?.Country}</h4>
            <h4>Rating: {movie?.imdbRating}</h4>
            <h4>Awards: {movie?.Awards}</h4>
          </div>
        </div>
      )}
    </>
  );
};

export default Detail;
