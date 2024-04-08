require("dotenv").config();

const apiKey = process.env.REACT_APP_API_KEY;
const URL = "https://www.omdbapi.com";

const getMovie = async (request, response) => {
  try {
    const { name } = request.params;
    const info = await fetch(`${URL}/?t=${name}&apikey=${apiKey}`);
    const data = await info.json();

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
  } catch (error) {
    return response.status(500).send(error.message);
  }
};

module.exports = { getMovie };
