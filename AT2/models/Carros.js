import Sequelize from "sequelize";
import connection from "../config/sequelize-config.js";

const Carros = connection.define("carros", {
    nome:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    modelo:{
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

Carros.sync({force:false})

export default Carros;