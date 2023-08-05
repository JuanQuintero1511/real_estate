const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();

app.name = 'Inmobiliaria';

app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(cookieParser());
app.use(morgan('dev'));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

// Ejemplo de una ruta GET para obtener todos los usuarios
app.get('/api/users', (req, res) => {
  // Lógica para obtener los usuarios desde la base de datos
  // y enviar la respuesta en formato JSON
  const users = [
    { id: 1, name: 'Usuario 1' },
    { id: 2, name: 'Usuario 2' },
    // ... otros usuarios ...
  ];
  res.json(users);
});

// Ejemplo de una ruta POST para crear un nuevo usuario
app.post('/api/users', (req, res) => {
  // Lógica para crear un nuevo usuario en la base de datos
  // y enviar la respuesta en formato JSON con el usuario creado
  const newUser = {
    id: 3,
    name: req.body.name,
    // ... otros datos del usuario ...
  };
  res.status(201).json(newUser);
});

// Rutas adicionales...

// Error catching endware.
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || 'Algo salió mal';
  console.error(err);
  res.status(status).send(message);
});

module.exports = app;