const { Temperamentos } = require("../db");
const registerTemperamento = async (item2) => {
  //
  const [temperamento, created] = await Temperamentos.findOrCreate({
    where: {},
    defaults: { 
        temperamento:item2
    },
  });
  return { temperamento, created };
};

module.exports = registerTemperamento;
