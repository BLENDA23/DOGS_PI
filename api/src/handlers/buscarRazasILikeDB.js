const { Razas,Temperamentos } = require("../db");
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const buscarRazasILikeDB = async (nameQuery) => {
    try {
      const dbFiltered = await Razas.findAll({
        where: {
          nombre: {
            [Op.like]: `%${nameQuery}%`,
          },
        },
        include: [{
          model: Temperamentos,
        }],
      });
      return dbFiltered;
      } catch (error) {
        console.error('Error al buscar las razas en la db', error);
        throw error;
      }
  };
  module.exports = buscarRazasILikeDB;
  