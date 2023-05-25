const { Temperamentos } = require("../db");
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const buscarTodosTemperamentosDB = async (temperamento) => {
    try {
        const resultado = await Temperamentos.findAll();
        return resultado;
      } catch (error) {
        console.error('Error al buscar todos los temperamentos:', error);
        throw error; // Opcional: puedes lanzar el error para que se maneje en un nivel superior
      }
  };
  
  module.exports = buscarTodosTemperamentosDB;
  