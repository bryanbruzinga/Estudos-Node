const mongoose = require("mongoose");

//Configurações Mongoose
mongoose
  .connect("mongodb://localhost/aprendendo", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDb conectado");
  })
  .catch((error) => {
    console.log("Houve um erro na conexão com MongoDb: " + error);
  });

// Model - Usuarios
// Definindo o model
const UsuarioSchema = mongoose.Schema({
  nome: {
    type: String,
    require: true,
  },
  sobrenome: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  idade: {
    type: Number,
    require: true,
  },
  pais: {
    type: String,
  },
});

//Collection
mongoose.model("usuarios", UsuarioSchema);

const bryan = mongoose.model("usuarios");

new bryan({
  nome: "Bryan",
  sobrenome: "Da Silva",
  email: "bryanbruzinga1990@gmail.com",
  idade: 30,
  pais: "Brasil",
})
  .save()
  .then(() => {
    console.log("Usuário criado com sucesso");
  })
  .catch((err) => console.log("Ihh problema: " + err));
