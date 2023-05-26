const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const getDogsRaza=require('../controllers/getDogsRaza');
const getDogs=require('../controllers/getDogs');
const getDogsNameLike=require('../controllers/getDogsNameLike');
const postDogs=require('../controllers/postDogs');
const getTemperaments=require('../controllers/getTemperaments');
const getDogsDetail=require('../controllers/getDogsDetail');
const getTemperamentoDB=require('../controllers/getTemperamentoDB');
const getAllTemperamentoDB=require('../controllers/getAllTemperamentoDB');
const getRazasxTemperamento=require('../controllers/getRazasxTemperamento');
const getAllRazasDB=require('../controllers/getAllRazasDB');
const router = Router(); 
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get("/dogs/:idRaza",getDogsRaza);//para el buscador busqueda exacta
router.get("/dogs",getDogs); //todos los perros
router.get("/dogsRaza",getDogsNameLike);//todos los parecidos
router.post("/dogsP/",postDogs);//creacion de perros
router.get("/temperaments",getTemperaments); //inserta temperamentos a la bd
router.get("/dogsDetail/:idRaza",getDogsDetail); // para el detalle de las cartas
router.get("/temperamentosDB/:temperamento",getTemperamentoDB);//para peticion a la bd
router.get("/razasxtemperamentos/:temperamento",getRazasxTemperamento);//presenta todos las razas que tengan ese temperamento
router.get("/temperamentosDB",getAllTemperamentoDB);//todas los temperamentos en la db
router.get("/razasDB",getAllRazasDB);//todas las razas de la db
module.exports = router;
