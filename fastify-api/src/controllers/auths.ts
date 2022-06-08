import * as bcrypt from 'bcrypt'
import * as jwt from 'jsonwebtoken'
import { FastifyReply, FastifyRequest } from "fastify"
import User from '../models/User'
import { extractBearerToken, isAuth, isValidLoginForm, isValidRegisterForm } from "../validations/auths"
import dotenv from 'dotenv'
dotenv.config

export const getCurrentUser = async (req: FastifyRequest, res: FastifyReply) => {
    if (await isAuth(req.headers.authorization)) {
        const token: any = req.headers.authorization && extractBearerToken(req.headers.authorization)
        if (!token) res.send({ currentUser: null })
        try {
            const extractedToken: any = jwt.verify(token, process.env.SECRET_TOKEN as string)
            const currentUser: any = await User.findByPk(extractedToken.id)
            res.send({ currentUser: currentUser })
        } catch (err) {
            res.send({ currentUser: null })
        }
    } else {
        res.send({ currentUser: null })
    }
}

export const login = async (req: FastifyRequest, res: FastifyReply) => {
    if (!await isAuth(req.headers.authorization)) {
        if (await isValidLoginForm(req.body)) {
            const body: any = req.body
            const user: any = await User.findOne({ where: { email: body.email } })
            const token: any = jwt.sign({ id: user.id }, process.env.SECRET_TOKEN as string)
            res.send({ token: token, currentUser: user })
        } else {
            res.send('Le formulaire est invalide')
        }
    } else { res.send('Vous êtes connecté') }
}

export const register = async (req: FastifyRequest, res: FastifyReply) => {
    if (!await isAuth(req.headers.authorization)) {
        if (await isValidRegisterForm(req.body)) {
            const body: any = req.body
            const salt: any = bcrypt.genSaltSync(10)
            const hashedPassword: any = bcrypt.hashSync(body.password, salt)
            const data: any = {
                lastname: body.lastname,
                firstname: body.firstname,
                email: body.email,
                password: hashedPassword
            }
            await User.create(data)
                .then(() => {
                    res.send('Le compte a été créé avec succès')
                })
                .catch((err) => {
                    res.send('Une erreur est survenue lors de la création du compte')
                })
        } else {
            res.send('Le formulaire est invalide')
        }
    } else { res.send('Vous êtes connecté') }
}