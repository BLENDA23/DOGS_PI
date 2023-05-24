const { Temperamentos } = require("../db");
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const buscarTemperamentosDB = async (temperamento) => {
    try {
        const resultado = await Temperamentos.findAll({
            where: {
                temperamento: {
                    //PARA PODER UZAR OP SE TIENE QUE REQUERIR 
                    [Op.like]: `%${temperamento}%`,
                },
              },
        });
        return resultado;
      } catch (error) {
        console.error('Error al buscar por temperamento:', error);
        throw error; // Opcional: puedes lanzar el error para que se maneje en un nivel superior
      }
  };
  
  module.exports = buscarTemperamentosDB;
  