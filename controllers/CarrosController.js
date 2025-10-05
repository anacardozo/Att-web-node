// importando express
import express from "express"

//criando rota
// carregando na variavel router o express.Router(),responsável por gerenciar as rotas da aplicação
// não carrega o express inteiro, só uma parte
const router = express.Router()

// ROTA DE CLIENTES
router.get("/carros", (req, res) => {
  const carros = [
    { Nome: "Jeep Compass", Modelo: "SUV", Marca: "Jeep", Preco: "149.990" },
    { Nome: "Audi A7", Modelo: "Sedã-coupê", Marca: "Audi", Preco: "450.000" },
    { Nome: "Civic g10", Modelo: "Sport", Marca: "Honda", Preco: "150.000" },
    { Nome: "Celta", Modelo: "hatchback", Marca: "Chevrolet", Preco: "15.000" },
    { Nome: "Corsa", Modelo: "sedan", Marca: "Chevrolet", Preco: "28.000" },
  ];
  res.render("carros", {
    carros: carros,
  });
});

// exportando o objeto router
export default router;