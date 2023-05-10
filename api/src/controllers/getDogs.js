require('dotenv').config();
const {
 LLAVE_API
} = process.env;
const axios = require("axios");
const URL = "https://api.thedogapi.com/v1/breeds";
const getDogs = async (req,res) => {
 // res.send("todos los perros")
    try {
        const {data} = await axios.get(URL+LLAVE_API)
        //const { id,name } = data;
        res.status(200).json( data );
    } catch (error) {
      res.status(500).json({message: "error 500"});
    }
}
module.exports = getDogs;