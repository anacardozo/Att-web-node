// importando express
import express from "express"
import Motos from "../models/Motos.js"
const router = express.Router()

// ROTA DE MOTOS
router.get("/motos", function (req, res) {
  Motos.findAll().then((motos) => {
    res.render("motos", {
      motos: motos,
    });
  }).catch((erro) => {
    console.log(erro);
  });
});

//ROTA DE CADASTRO DE CARROS
router.post("/motos/new", (req, res) => {
  const nome = req.body.nome;
  const marca = req.body.marca;
  const preco = req.body.preco;

  Motos.create({
    nome: nome,
    marca: marca,
    preco: preco,
  }).then(() => {
    res.redirect("/motos");
  }).catch((erro) => {
    console.log(erro);
  });
});

// exportando o objeto router
export default router;