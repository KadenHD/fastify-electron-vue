import { FastifyInstance } from "fastify"
import userRoutes from "./users"

const router = (server: FastifyInstance, opts: any, done: () => void) => {
    server.register(userRoutes, { prefix: '/users' })
    done()
}

export default router