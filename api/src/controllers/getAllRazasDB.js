const buscarRazasDB = require("../handlers/buscarRazasDB");
const getAllRazasDB = async (req, res) => { 
  try {
    const resultado = await buscarRazasDB();
    res.json(resultado); // Enviar la respuesta al cliente como JSON
  } catch (error) {
    console.error('No hay razas registradas en la db', error);
    res.status(500).json({ error: 'No hay razas registradas en la db' }); // Enviar un mensaje de error al cliente
  }
};

module.exports = getAllRazasDB; 
