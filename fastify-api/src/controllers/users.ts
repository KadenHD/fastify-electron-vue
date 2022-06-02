import { FastifyReply, FastifyRequest } from "fastify"
import { User } from "../models/Models"

export const createOne = async (req: FastifyRequest, res: FastifyReply) => {
    console.log({ body: req.body })
    /*
    User.create()
        .then(() => {

        })
        .catch(() => {

        });
    */
}

export const findAll = async (req: FastifyRequest, res: FastifyReply) => {
    const data = await User.findAll()
    return res.send(data)
}

export const findOne = async (req: FastifyRequest, res: FastifyReply) => {
    const params: any = req.params
    const data = await User.findByPk(params.id)
    return res.send(data)
}

export const updateOne = async (req: FastifyRequest, res: FastifyReply) => {
    console.log({ body: req.body, params: req.params })
}

export const deleteOne = async (req: FastifyRequest, res: FastifyReply) => {
    console.log({ params: req.params })
}