require('dotenv').config();
const { Temperamentos } = require("../db");
const {
 LLAVE_API
} = process.env;
const axios = require("axios");
const URL = "https://api.thedogapi.com/v1/breeds";
const getTemperaments = async (req,res) => {
    try {
        const {data} = await axios.get(URL)
        tam=data.length;
        var temperamentos=[];
        for(var i=0;i<tam;i++){
          temperamentos.push(data[i].temperament)
        }
       texto=temperamentos.toString();
       aArray=texto.split(',');
       let setSinRepetidos = new Set(aArray);
       let arregloSinRepetidos = Array.from(setSinRepetidos);
        //creando temperamentos
        for(var j=0;j<arregloSinRepetidos.length;j++){
          const [temperamento, created]= await Temperamentos.findOrCreate({
            where: {},
            default:{
              temperamento : arregloSinRepetidos[j]
            }
          });
        }
       res.status(200).json({message: "se registro con exito"});      
    } catch (error) {
      res.status(500).json({message: "error 500."});
    }
}
module.exports = getTemperaments;