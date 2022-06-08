import { FastifyInstance } from "fastify"
import { login, register } from "../controllers/auths"

const router = (server: FastifyInstance, opts: any, done: () => void) => {
    server.post("/login", login)
    server.post("/register", register)
    done()
}

export default router