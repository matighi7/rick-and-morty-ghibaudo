const { Favorite } = require('../../models/DB_connection');

const postFav = async (req, res) => {
  
    const { name, status, image, species, gender } = req.body;
try{
    if (![name || status || image || species || gender].every(Boolean))
      return res.status(401).send("Faltan datos");
    
    await Favorite.findOrCreate({
      where: { name,  
        status,
        image,
        species,
        gender, 
        }
    });

    const allFavorites = await Favorite.findAll();

    return res.status(200).json(allFavorites);
  } catch (error) {
    console.error(error);
    return res.status(500).json({error: error.message});
  }
};

module.exports = postFav;




