import Sequelize from "sequelize";
import connection from "../config/sequelize-config.js";

const Onibus = connection.define("onibus", {
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

Onibus.sync({force:false})

export default Onibus;