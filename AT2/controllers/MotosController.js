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

//ROTA DE EXCLUSÃO DE CARROS
router.get("/motos/delete/:id", (req, res) => {
  const id = req.params.id;
  Motos.destroy({
    where: {
      id: id,
    },
  }).then(() => {
    res.redirect("/motos");
  }).catch((erro) => {
    console.log(erro);
  });
});

//ROTA DE EDIÇÃO DE CARROS
router.get("/motos/edit/:id", (req, res) => {
  const id = req.params.id;
  Motos.findByPk(id).then(function (moto) {
    res.render("motosEdit", {
      moto: moto,
    });
  }).catch((erro) => {
    console.log(erro);
  });
});

//ROTA DE ALTERAÇÃO DE CARROS
router.post("/motos/update/:id", (req, res) => {
  const id = req.body.id;
  const nome = req.body.nome;
  const marca = req.body.marca;
  const preco = req.body.preco;
  Motos.update({
    nome: nome,
    marca: marca,
    preco: preco,    
  },
  {where: {id: id} }
).then(() => {
  res.redirect("/motos");
}).catch((erro) => {
  console.log(erro);
});
});

// exportando o objeto router
export default router;