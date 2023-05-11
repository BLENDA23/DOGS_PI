require('dotenv').config();
const registerTemperamento = require("../handlers/registerTemperamentos");
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
//        const { temperamento, created } = await registerTemperamento(item="asd");

        for(var j=0;j<arregloSinRepetidos.length;j++){
          item2=arregloSinRepetidos[j];
          const { temperamento, created } = await registerTemperamento(item2);
        }
       res.status(200).json( "arregloSinRepetidos[1]" );      
    } catch (error) {
      res.status(500).json({message: "error 500."});
    }
}
module.exports = getTemperaments;