// Importando o Express (framework)
//2 formas diferentes de importar o express
// const express = require("express"); //Common JS MOdules
import express from "express" //ES6 modules
// Iniciando o express na variável app
const app = express();

//Importando os Controllers (onde estão as rotas e onde é tratado as requisições)
import CarrosController from "./controllers/CarrosController.js"
import MotosController from "./controllers/MotosController.js"
import OnibusController from "./controllers/OnibusController.js"

//CONFIGURANDO O EJS
app.set("view engine", "ejs");

//DEFININDO A PASTA PUBLIC para ARQUIVOS Estáticos
app.use(express.static('public'));

//DEFININDO O USO DAS ROTAS QUE ESTÃO NOS CONTROLLERS
app.use("/", CarrosController)
app.use("/", MotosController)
app.use("/", OnibusController)

// Criando a primeira rota do site (ROTA PRINCIPAL)
// REQ = Trata a requisição (está enviando uma requisição ao servidor) / RES = Trata a resposta (resposta do servidor)
app.get("/", (req, res) => {
  res.render("index");
});

// app.get("/", (req, res) => {
//   res.send(
//     "<h1>Hello Word! Bem vindo ao meu primeiro site com node.js e express!! =)</h1>"
//   );
// });


//ROTA DE PERFIL
//:user -> é um parâmetro da rota (OBRIGATÓRIO)
//:user? -> é um parâmetro da rota (OPCIONAL)
// app.get("/perfil/:user", (req, res) => {
  //parametro user
  // o que estiver depois da barra ele vai guardar dentro da variavel user
  // const user = req.params.user
  // res.render("perfil", {
    // Enviando variaveis para a pagina ejs (HTML)
    // user: user,
    // o user que está de azul é o que vai ser enviado para a página ejs, que vai puxar o valor
    // o segundo é o valor que estou atribuindo a ele (esta guardando o "Ana")
//   });
// });

// Iniciando o sevidor HTTP
// O servidor escutará na porta 8080
const port = 8080;

// port - a porta que ele vai escutar, e cria uma função para ele tratar o erro que pode acontecer durante a execução
app.listen(port, (error) => {
  if (error) {
    console.log(
      `Não foi possível iniciar o servidor. Ocorreu um erro! ${error}`
    );
  } else {
    console.log(`Servidor inciado com sucesso em: http://localhost:${port}`);
  }
});
