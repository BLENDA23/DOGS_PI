const buscarRazasDB = require("../handlers/buscarTemperamentosDB");
const getTemperamentoDB = async (req, res) => { 
  try {
    const { temperamento } = req.params;
    const temMinuscula=temperamento.toLowerCase();
    const resultado = await buscarRazasDB(temMinuscula);
    res.json(resultado); // Enviar la respuesta al cliente como JSON
  } catch (error) {
    console.error('Error al buscar por temperamento:', error);
    res.status(500).json({ error: 'Error al buscar por temperamento' }); // Enviar un mensaje de error al cliente
  }
};

module.exports = getTemperamentoDB; 
