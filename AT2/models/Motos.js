import Sequelize from "sequelize";
import connection from "../config/sequelize-config.js";

const Motos = connection.define("motos", {
    nome:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    marca:{ 
    type: Sequelize.STRING,
    allowNull: false,
    },
    preco:{ 
    type: Sequelize.FLOAT,
    allowNull: false,
    },
});

Motos.sync({force:false})

export default Motos;