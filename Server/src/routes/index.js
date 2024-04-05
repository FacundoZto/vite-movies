const { Router } = require("express");
const { getMovie } = require("../controllers/getMovie");
const { postFav, deleteFav } = require("../controllers/handleFav");

const router = Router();

router.get("/:name", getMovie);

router.post("/fav", postFav);

router.delete("/fav/:id", deleteFav);

module.exports = { router };
