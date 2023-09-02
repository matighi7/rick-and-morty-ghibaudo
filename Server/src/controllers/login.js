const {User} = require('../../models/DB_connection');

const login = async (req, res) => {
    try {
      const { email, password } = req.query;
  
      if (!email || !password) {
        return res.status(400).json({ message: "Faltan datos" });
      }
  
      const user = await User.findOne({ where: { email }});
      console.log("USER", user);
  
      if (!user) {
        return res.status(404).json({ message: "Usuario no encontrado" });
      }
  
      if (password !== user.password) {
        return res.status(403).json({ message: "Contraseña incorrecta" });
      }
  
      return res.status(200).json({ access: true });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Error interno del servidor" });
    }
  };
  
  module.exports = login;