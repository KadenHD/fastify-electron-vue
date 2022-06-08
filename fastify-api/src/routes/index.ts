import { FastifyInstance } from "fastify"
import authRoutes from "./auths"

const router = (server: FastifyInstance, opts: any, done: () => void) => {
    server.register(authRoutes, { prefix: '/auths' })
    done()
}

export default router