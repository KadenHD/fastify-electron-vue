import Sequelize from "sequelize"
import database from "../configs/database"

const User = database.define("user", {
    id: {
        type: Sequelize.STRING(36), /* default length for a uuid4 string */
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
    },
    lastname: {
        type: Sequelize.STRING(88), /* max length for a 50 length encryption method */
        allowNull: false
    },
    firstname: {
        type: Sequelize.STRING(88), /* max length for a 50 length encryption method */
        allowNull: false
    },
    email: {
        type: Sequelize.STRING(152), /* max length for a 100 length encryption method */
        allowNull: false
    },
    password: {
        type: Sequelize.STRING(60), /* default length for a bcrypt hash with a 10 salt  */
        allowNull: false
    }
})

export default User