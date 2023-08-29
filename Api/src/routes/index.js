const { Router } = require ('express');
const contacRouter = require ('../routes/contactRouter/contactRouter');


const router = Router();
router.use ('/contact', contacRouter);

