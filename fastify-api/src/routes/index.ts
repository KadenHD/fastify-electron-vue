import { FastifyInstance } from "fastify"
import userRoutes from "./users"
import authRoutes from "./auths"

const router = (server: FastifyInstance, opts: any, done: () => void) => {
    server.register(authRoutes, { prefix: '/auths' })
    server.register(userRoutes, { prefix: '/users' })
    done()
}

export default router