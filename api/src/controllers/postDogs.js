const register = require("../handlers/registerDogs");

const postDogs = async (req, res) => { 
  try {
    const { nombre, altura,peso,tiempoVida,image,temperamento } = req.body;
    if (nombre === "")
      res.status(400).json({ message: "Faltan datos" });
    const { raza, created } = await register(nombre, altura,peso,tiempoVida,image,temperamento);
    if (!created) {
      res.status(409).json({ message: "registro ya existente" });
      
    } else {
      res.status(200).json(raza);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = postDogs;
