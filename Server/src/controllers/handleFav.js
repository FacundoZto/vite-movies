let favorites = [];

const postFav = (req, res) => {
  const movie = req.body;

  const repeated = favorites.find((m) => m.id === movie.id);

  !repeated && favorites.push(movie);
  return res.status(200).json(favorites);
};

const deleteFav = (req, res) => {
  const { id } = req.params;
  favorites = favorites.filter((m) => m.id != id);

  return res.status(200).json(favorites);
};

module.exports = { postFav, deleteFav };
