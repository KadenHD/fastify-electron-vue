import { FastifyInstance } from "fastify"
import { findAll, findOne, createOne, updateOne, deleteOne } from "../controllers/users"

const router = (server: FastifyInstance, opts: any, done: () => void) => {
    server.post("/", createOne)
    server.get("/", findAll)
    server.get("/:id", findOne)
    server.patch("/:id", updateOne)
    server.delete("/:id", deleteOne)
    done()
}

export default router