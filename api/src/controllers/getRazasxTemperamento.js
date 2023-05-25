require('dotenv').config();
const {
 LLAVE_API
} = process.env;
const axios = require("axios");
const URL = "https://api.thedogapi.com/v1/breeds";
const getRazasxTemperamento = async (req, res) => {
    try {
      const {temperamento} = req.params;
      const {data} = await axios.get(URL);
      //const filtrar=data.filter(dog => dog.temperament.includes(temperamento));
     var dataTemperamentos=[];
      for(var i=0;i<data.length;i++){
        if(data[i].temperament==undefined){
            continue;
        }
        if(data[i].temperament.includes(temperamento)){
            dataTemperamentos.push(data[i]); 
        }
     }
      res.status(200).json(dataTemperamentos);
    } catch (error) {
      res.status(500).json(error) 
    }
}
module.exports = getRazasxTemperamento;