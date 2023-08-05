const express = require("express");
const server = require("./src/routes/app.js");

console.log("Database Connect");
server.listen(3001, () => {
  console.log("% listening at http://localhost:3001");
});

