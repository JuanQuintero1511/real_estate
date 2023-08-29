const { Router } = require('express');
const { newContact } = require('../../handlers/Contact/contactHandler');

const contacRouter = Router();

contacRouter.post( "/", newContact );


module.exports = {
    contacRouter
}

