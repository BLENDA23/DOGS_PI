require('dotenv').config();
const {
 LLAVE_API
} = process.env;
const axios = require("axios");
const URL = "https://api.thedogapi.com/v1/breeds/search?q=";
const getDogsRaza = async (req, res) => {
//  res.send(URL+idRaza)
    try {
      const {idRaza} = req.params;
      const {data} = await axios.get(URL+idRaza);
      //const { id,name,bred_for,breed_group } = data;
      res.status(200).json(data);
     // res.send(URL+idRaza)
    } catch (error) {
      res.status(500).json({message: "error 500"})
    }
  }
  module.exports = getDogsRaza;