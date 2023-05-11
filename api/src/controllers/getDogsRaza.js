require('dotenv').config();
const {
 LLAVE_API
} = process.env;
const axios = require("axios");
const URL = "https://api.thedogapi.com/v1/breeds";
const getDogsRaza = async (req, res) => {
//  res.send(URL+idRaza)
    try {
      const {idRaza} = req.params;
      const {data} = await axios.get(URL);
      filtrar=data.map((item)=>{
        var dataMinusculas=item.name.toLowerCase();
        var parametroMinusculas=idRaza.toLowerCase();
        if(dataMinusculas===parametroMinusculas){
          res.status(200).json(item);
        }
      });
    } catch (error) {
      res.status(500).json({message: "error 500"})
    }
  }
  module.exports = getDogsRaza;