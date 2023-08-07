const server = require('./src/routes/app.js');

const { conn } = require('./src/routes/db.js');

// conn.sync({ alter: true }).then(() => {
conn.sync({ force: true }).then(() => {
  console.log('Database connected');
  server.listen(3001, () => {
    console.log("% listening at http://localhost:3001");
  });
})
