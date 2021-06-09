const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/aprendendo")
  .then(() => {
    console.log("MongoDb conectado");
  })
  .catch((error) => {
    console.log("Houve um erro na conexão com MongoDb: " + error);
  });
