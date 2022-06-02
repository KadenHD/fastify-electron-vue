import Sequelize from "sequelize"
import database from "../database.config"

const User = database.define("user", {
    id: {
        type: Sequelize.STRING(36),
        primaryKey: true
    },
    lastname: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    firstname: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    email: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
    password: {
        type: Sequelize.STRING(60),
        allowNull: false
    }
})

export default User