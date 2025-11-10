// importando express

import express from "express"

//criando rota
// carregando na variavel router o express.Router(),responsável por gerenciar as rotas da aplicação
// não carrega o express inteiro, só uma parte

const router = express.Router()

//ROTA DE PEDIDOS
router.get("/motos", (req, res) => {
  const motos = [
    { Nome: "CG 160 Titan", Marca: "Honda", Preco: "19.230" },
    { Nome: "Fazer 250", Marca: "Yamaha", Preco: "26.900" },
    { Nome: "R 1250 GS", Marca: "BMW", Preco: "90.000" },
    { Nome: "Hayabuza", Marca: "Suzuki", Preco: "124.500" },
    { Nome: "Biz", Marca: "Honda", Preco: "16.770" },
  ];
  res.render("motos", {
    motos: motos,
  });
});

export default router