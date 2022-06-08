import { Sequelize } from "sequelize"
import dotenv from 'dotenv'
dotenv.config()

const database = new Sequelize(
    process.env.DB_NAME as string,
    process.env.DB_USER as string,
    process.env.DB_PASS as string,
    {
        timezone: '+00:00',
        dialect: 'mysql',
        host: process.env.DB_HOST as string,
        logging: false /* Uncomment while on prod to avoid database logs (true by default)) */
    }
)

export default database