import fastify, { FastifyInstance } from 'fastify'
import * as msg from './utils/chalk'
import ip from 'ip'
import defaultRoutes from './routes/index'
import database from './configs/database'
import { env } from './utils/env'

const start = async () => {

    const server: FastifyInstance = fastify()

    server.register(require("@fastify/cors"), { origin: "*" })

    /* Set the database connection */
    console.log(`${msg.infoMsg("Connecting to Database...")}`)
    try {
        await database.sync()
    } catch {
        console.log(`${msg.errorMsg('An error occured during Database configuration !')}`)
        process.exit(1)
    } finally {
        console.log(`${msg.successMsg('Connected to Database !')}`)
    }

    /* Set the routes */
    console.log(`${msg.infoMsg("Linking the routes...")}`)
    try {
        server.register(defaultRoutes, { prefix: '/api' })
    } catch {
        console.log(`${msg.errorMsg('An error occured during routes configuration !')}`)
        process.exit(1)
    } finally {
        console.log(`${msg.successMsg('Routes are set !')}`)
    }

    /* Set the server */
    console.log(`${msg.infoMsg("Launching the server...")}`)
    server.listen(env.server.port, (err, address) => {
        if (err) {
            console.error(msg.errorMsg(err.toString()))
            process.exit(1)
        }
        else {
            console.log(`${msg.successMsg('Server launched !')}`)
            console.log(`${msg.infoMsg("Local")}  ➞  ${address}`)
            console.log(`${msg.infoMsg("Public")} ➞  http://${ip.address()}:${env.server.port}`)
        }
    })
}

start()

export default start