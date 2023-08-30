const { Router } = require ('express');
const { router } = require ('../routes/contactRouter/contactRouter')


const router = Router();

router.use ('/contact', router); // creacion de contacto

