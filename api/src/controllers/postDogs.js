const register = require("../handlers/registerDogs");

const postDogs = async (req, res) => { 
  try {

    const { nombre, altura,peso,tiempoVida,image,temperamento } = req.body;
    // Divide el string de temperamento en un array utilizando la coma como separador
    const temperamentosArray = temperamento.split(",");

    const { raza, created } = await register(nombre, altura,peso,tiempoVida,image,temperamentosArray );
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
