const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const getDogsRaza=require('../controllers/getDogsRaza');
const getDogs=require('../controllers/getDogs');
const getDogsNameLike=require('../controllers/getDogsNameLike');
const postDogs=require('../controllers/postDogs');
const getTemperaments=require('../controllers/getTemperaments');
const router = Router();
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get("/dogs/:idRaza",getDogsRaza);
router.get("/dogs",getDogs);
router.get("/dogsRaza",getDogsNameLike);
router.post("/dogs/",postDogs);
router.get("/temperaments",getTemperaments);
module.exports = router;
