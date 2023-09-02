const {Favorite} = require('../../models/DB_connection');

const deleteFav = async (req, res) => {
    try {
      const { id } = req.params;
  
      await Favorite.destroy({ where: { id } });
  
      const allFavorites = await Favorite.findAll();
  
      return res.status(200).json(allFavorites);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Error interno del servidor" });
    }
  };
  
  module.exports = deleteFav;