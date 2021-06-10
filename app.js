const express = require("express");
const handlebars = require("express-handlebars");
const app = express();
const admin = require("./routes/admin");

app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Rotas
app.use("/admin", admin);

//Server
const PORT = 8081;
app.listen(PORT, () => console.log("Servidor rodando"));
