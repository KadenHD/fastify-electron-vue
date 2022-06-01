import { FastifyReply, FastifyRequest } from "fastify"
import User from "../models/User"

export const findAll = async (req: FastifyRequest, res: FastifyReply) => {
    const data = await User.findAll()
    return res.send(data)
}

export const findOne = async (req: FastifyRequest, res: FastifyReply) => {
    const params: any = req.params
    const data = await User.findByPk(params.id)
    return res.send(data)
}