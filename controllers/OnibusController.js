// importando express
import express from "express"
import Onibus from "../models/Onibus.js"
const router = express.Router()

// ROTA DE MOTOS
router.get("/onibus", function (req, res) {
  Onibus.findAll().then((onibus) => {
    res.render("onibus", {
      onibus: onibus,
    });
  }).catch((erro) => {
    console.log(erro);
  });
});

//ROTA DE CADASTRO DE CARROS
router.post("/onibus/new", (req, res) => {
  const nome = req.body.nome;
  const marca = req.body.marca;
  const preco = req.body.preco;

  Onibus.create({
    nome: nome,
    marca: marca,
    preco: preco,
  }).then(() => {
    res.redirect("/onibus");
  }).catch((erro) => {
    console.log(erro);
  });
});

// exportando o objeto router
export default router;