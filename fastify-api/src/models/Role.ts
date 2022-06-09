import Sequelize from "sequelize"
import database from "../configs/database"

const Role = database.define("role", {
    id: {
        type: Sequelize.STRING(1),
        primaryKey: true
    },
    label: {
        type: Sequelize.STRING(20),
        allowNull: false
    }
})

export default Role