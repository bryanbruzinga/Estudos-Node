const express = require("express");
const handlebars = require("express-handlebars");
const app = express();
const admin = require("./routes/admin");
const path = require("path");
const mongoose = require("mongoose");

app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Mongoose
mongoose
  .connect("mongodb://localhost/blogapp", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Conectado ao MongoDB");
  })
  .catch((err) => {
    console.log("Erro ao se conectar ao MongoDB: " + err);
  });

//Public
app.use(express.static(path.join(__dirname, "public")));

//Rotas
app.use("/admin", admin);

//Server
const PORT = 8081;
app.listen(PORT, () => console.log("Servidor rodando"));
