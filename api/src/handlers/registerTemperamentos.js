const { Temperamentos } = require("../db");
const registerTemperamento = async (tempe) => {
  //
  const [temperamento, created] = await Temperamentos.bulkCreate(tempe)
  return { temperamento, created };
};

module.exports = registerTemperamento;
