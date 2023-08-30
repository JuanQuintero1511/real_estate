const { Router } = require ('express');
const { router } = require ('../controllers/contactController/contactController');


const router = Router();
router.use ('/contact', router);

