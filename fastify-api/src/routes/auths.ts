import { FastifyInstance } from "fastify"
import { login } from "../controllers/auths"

const router = (server: FastifyInstance, opts: any, done: () => void) => {
    server.post("/login", login)
    done()
}

export default router