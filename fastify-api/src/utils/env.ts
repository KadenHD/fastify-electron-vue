import dotenv from 'dotenv'
dotenv.config()

export const env = {
    secret: {
        iv: process.env.SECRET_IV as string || '',
        crypto: process.env.SECRET_CRYPTO as string || '',
        token: process.env.SECRET_TOKEN as string || '',
    },
    server: {
        port: process.env.SERVER_PORT as string || '',
    },
    db: {
        name: process.env.DB_NAME as string || '',
        user: process.env.DB_USER as string || '',
        pass: process.env.DB_PASS as string || '',
        host: process.env.DB_HOST as string || '',
    }
}