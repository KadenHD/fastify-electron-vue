import { FastifyInstance } from "fastify"
import { getCurrentUser, login, register } from "../controllers/auths"

const router = (server: FastifyInstance, opts: any, done: () => void) => {
    server.get("/getCurrentUser", getCurrentUser)
    server.post("/login", login)
    server.post("/register", register)
    done()
}

export default router