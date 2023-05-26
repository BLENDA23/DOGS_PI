const { Razas } = require("../db");
const { Temperamentos } = require("../db");
const Sequelize = require('sequelize');
const buscarTodosTemperamentosDB = async () => {
    try {
        const resultado = await Razas.findAll({
          include: [{ model: Temperamentos,through: 'temperamentosxrazas' }],
        })
        return resultado;
      } catch (error) {
        console.error('Error al buscar todos los temperamentos:', error);
        throw error; // Opcional: puedes lanzar el error para que se maneje en un nivel superior
      }
  };
  module.exports = buscarTodosTemperamentosDB;
  