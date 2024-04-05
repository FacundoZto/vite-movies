require("dotenv").config();

const apiKey = process.env.REACT_APP_API_KEY;
const URL = "https://www.omdbapi.com";

const getMovie = (request, response) => {
  const { name } = request.params;

  fetch(`${URL}/?t=${name}&apikey=${apiKey}`) //`https://www.omdbapi.com/?t=${name}&apikey=${apiKey}`
    .then((res) => res.json())
    .then((data) => {
      if (data.imdbID) {
        const movie = {
          Title: data.Title,
          Year: data.Year,
          Poster: data.Poster,
          Genre: data.Genre,
          imdbID: data.imdbID,
        };
        return response.status(200).json(movie);
      }
      return response.status(404).send("Not found");
    })
    .catch((error) => {
      return response.status(500).send(error.message);
    });
};

module.exports = { getMovie };
