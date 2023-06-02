require('dotenv').config();
const {
 LLAVE_API
} = process.env;
const buscarRazasILikeDB = require("../handlers/buscarRazasILikeDB");
const axios = require("axios");
const URL = "https://api.thedogapi.com/v1/breeds";
const getDogsNameLike = async (req, res) => {
  //http://localhost:3001/dogsRaza?name=affe
    try {
      const nameQuery=req.query.name;
      // Buscar en la API
      const { data: apiData } = await axios.get(URL);
       const apiFiltered = apiData.filter((item) => {
          const dataLowerCase = item.name.toLowerCase();
          const queryLowerCase = nameQuery.toLowerCase();
          return dataLowerCase.includes(queryLowerCase);
       });
       // Buscar en la base de datos
       const dbFiltered = await buscarRazasILikeDB(nameQuery);
       const dataFixed= await apiFiltered.map((item)=>{
        //arreglar datos de la data igual que la db
        item.nombre=item.name;
        item.altura=item.height.metric;
        item.peso=item.weight.metric,
        item.image=item.image.url
        return item;
       })
       // Combinar resultados de la API y la base de datos
      const results = [...dataFixed,...dbFiltered];

      if (results.length > 0) {
        res.status(200).json(results);
      } else {
        res.status(404).json({ message: "No se encontraron razas de perros con ese nombre." });
      }
    } catch (error) {
      res.status(500).json({ message: "Error 500" });
    }
  }
  module.exports = getDogsNameLike;