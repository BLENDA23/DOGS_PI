const buscarAllTemperamentosDB = require("../handlers/buscarAllTemperamentos");

const getAllTemperamentoDB = async (req, res) => { 
  try {
    const resultado = await buscarAllTemperamentosDB();
    res.json(resultado); // Enviar la respuesta al cliente como JSON
  } catch (error) {
    console.error('Error no hay temperamentos en la db', error);
    res.status(500).json({ error: 'Error no hay temperamentos en la db' }); // Enviar un mensaje de error al cliente
  }
};

module.exports = getAllTemperamentoDB; 
