const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "razas",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      nombre : {
        type: DataTypes.STRING,
        allowNull: false,
      },
      altura : {
        type: DataTypes.STRING,
        allowNull: false,
      },
      peso : {
        type: DataTypes.STRING,
        allowNull: false,
      },
      tiempoVida: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};
