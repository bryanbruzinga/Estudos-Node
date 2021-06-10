const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const Post = require("./models/Post");

//Config
// Template Engine

app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
//Parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Rotas
app.get("/", (req, res) => {
  Post.findAll({ order: [["id", "DESC"]] }).then((posts) =>
    res.render("home", { posts: posts })
  );
});

app.get("/cad", (req, res) => res.render("formulario"));

app.post("/add", (req, res) => {
  Post.create({
    titulo: req.body.titulo,
    conteudo: req.body.conteudo,
  })
    .then(() => {
      res.redirect("/");
    })
    .catch((erro) => {
      res.send(`Houve um erro: ${erro}`);
    });
});

app.get("/deletar/:id", (req, res) => {
  Post.destroy({ where: { id: req.params.id } })
    .then(() => {
      res.send("Postagem deletada com sucesso!");
    })
    .catch((erro) => {
      res.send("Esta postagem não existe!");
    });
});

app.listen(8081, () => {
  console.log("servidor rodando na rul http://localhost:8081 ");
});
