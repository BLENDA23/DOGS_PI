const { Razas } = require("../db");
const register = async (nombre, altura,peso,tiempoVida,image) => {
  //
  const [raza, created] = await Razas.findOrCreate({
    where: { nombre },
    defaults: { 
      altura:altura,
      peso:peso,
      tiempoVida:tiempoVida,
      image:image
    },
  });
  return { raza, created };
};

module.exports = register;
