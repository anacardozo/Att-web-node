// importando express
import express from "express"

//criando rota
// carregando na variavel router o express.Router(),responsável por gerenciar as rotas da aplicação
// não carrega o express inteiro, só uma parte

const router = express.Router()

// ROTA DE PRODUTOS
router.get("/onibus", (req, res) => {
  //const produtos = ["Computador", "Celular", "Tablet", "Notebook"];
  //Array de objetos com produtos
  const onibus = [
    { Nome: "Ideale 800", Marca: "Marcopolo", Preco: "874.900" },
    { Nome: "Apache vip 15", Marca: "Caio", Preco: "539.900" },
    { Nome: "Campione Invictus", Marca: "Comil", Preco: "250.000" },
    { Nome: "Daily Minibus", Marca: "Iveco", Preco: "230.000" },
    { Nome: "Mega BRT", Marca: "Neobus", Preco: "253.387" },
  ];
  res.render("onibus", {
    onibus: onibus,
  });
});

// exportando o objeto router

export default router