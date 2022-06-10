import { Sequelize } from "sequelize"
import { env } from "../utils/env"

const database = new Sequelize(
    env.db.name,
    env.db.user,
    env.db.pass,
    {
        timezone: '+00:00',
        dialect: 'mysql',
        host: env.db.host,
        logging: false /* Uncomment while on prod to avoid database logs (true by default)) */
    }
)

export default database