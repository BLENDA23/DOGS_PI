const { Razas } = require("../db");
const register = async (nombre, altura,peso,tiempoVida,image,temperamento) => {
  //
  const [raza, created] = await Razas.findOrCreate({
    where: { nombre },
    defaults: { 
      altura,
      peso,
      tiempoVida,
      image,
    },
  });
  //si envio el temperamento lo relaciona
  if (temperamento && temperamento.length > 0) {
    await raza.addTemperamento(temperamento);
  }
  return { raza, created };
};

module.exports = register;
