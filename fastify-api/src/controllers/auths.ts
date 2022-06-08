import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify"

export const login = async (server: FastifyInstance, req: FastifyRequest, res: FastifyReply) => {
    const token = server.jwt.sign({ "username": "Adam Smith" })
    console.log(token)
    res.send({ token })
}