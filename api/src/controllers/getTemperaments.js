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
        var a1=aArray.map(item=>{
          return item.trim();
        })
       let setSinRepetidos = new Set(a1);
       let arregloSinRepetidos = Array.from(setSinRepetidos);
        //creando temperamentos
       var arregloBulkCreate=[];
       for(var i=0;i<arregloSinRepetidos.length;i++){
        arregloBulkCreate.push({temperamento:arregloSinRepetidos[i].toLowerCase() })
       } 
      
       const { temperamento, created } = await registerTemperamento(arregloBulkCreate);
  
       res.status(200).json( arregloBulkCreate );      
    } catch (error) {
      res.status(500).json({message: "error 500."});
    }
}
module.exports = getTemperaments;