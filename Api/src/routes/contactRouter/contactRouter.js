const express = require('express');
const Router = express.Router();
const app = express();
const { createHandlerContac } = require ('../../handlers/Contact/contactHandler');

const router = Router();
// Ruta para crear un nuevo contacto (POST /contact)
router.post('/', createHandlerContac);

module.exports = router;

