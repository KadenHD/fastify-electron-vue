import { FastifyInstance } from "fastify"
import { findAll, findOne } from "../controllers/users"

const router = (server: FastifyInstance, opts: any, done: () => void) => {
    server.get("/", findAll)
    server.get("/:id", findOne)
    done()
}

export default router