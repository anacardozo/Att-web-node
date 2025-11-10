// importando express
import express from "express"
import Carros from "../models/Carros.js"
import { where } from "sequelize";
const router = express.Router()

// ROTA DE CARROS
router.get("/carros", function (req, res) {
  Carros.findAll().then((carros) => {
    res.render("carros", {
      carros: carros,
    });
  }).catch((erro) => {
    console.log(erro);
  });
});

//ROTA DE CADASTRO DE CARROS
router.post("/carros/new", (req, res) => {
  const nome = req.body.nome;
  const modelo = req.body.modelo;
  const marca = req.body.marca;
  const preco = req.body.preco;

  Carros.create({
    nome: nome,
    modelo: modelo,
    marca: marca,
    preco: preco,
  }).then(() => {
    res.redirect("/carros");
  }).catch((erro) => {
    console.log(erro);
  });
});

//ROTA DE EXCLUSÃO DE CARROS
router.get("/carros/delete/:id", (req, res) => {
  const id = req.params.id;
  Carros.destroy({
    where: {
      id: id,
    },
  }).then(() => {
    res.redirect("/carros");
  }).catch((erro) => {
    console.log(erro);
  });
});

//ROTA DE EDIÇÃO DE CARROS
router.get("/carros/edit/:id", (req, res) => {
  const id = req.params.id;
  Carros.findByPk(id).then(function (carro) {
    res.render("carrosEdit", {
      carro: carro,
    });
  }).catch((erro) => {
    console.log(erro);
  });
});

//ROTA DE ALTERAÇÃO DE CARROS
router.post("/carros/update/:id", (req, res) => {
  const id = req.body.id;
  const nome = req.body.nome;
  const modelo = req.body.modelo;
  const marca = req.body.marca;
  const preco = req.body.preco;
  Carros.update({
    nome: nome,
    modelo: modelo,
    marca: marca,
    preco: preco,    
  },
  {where: {id: id} }
).then(() => {
  res.redirect("/carros");
}).catch((erro) => {
  console.log(erro);
});
});

// exportando o objeto router
export default router;