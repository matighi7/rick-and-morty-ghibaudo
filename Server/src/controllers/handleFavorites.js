let myFavorites = [];

const postFav = (req, res) => {
  const character = req.body;
  myFavorites.push(character);
  res.json(myFavorites);
};

const deleteFav = (req, res) => {
  const charId = parseInt(req.params.id);
  myFavorites = myFavorites.filter(character => character.id !== charId);
  res.json(myFavorites);
};

module.exports = { postFav, deleteFav, myFavorites};