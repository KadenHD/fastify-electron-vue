import * as bcrypt from 'bcrypt'
import * as jwt from 'jsonwebtoken'
import { FastifyReply, FastifyRequest } from "fastify"
import { User, Role } from '../models/Models'
import { extractBearerToken, isAuth, isValidLoginForm, isValidRegisterForm } from "../validations/auths"
import { decryptUser, encrypt, encryptUser } from '../utils/crypto'
import { env } from '../utils/env'

export const getCurrentUser = async (req: FastifyRequest, res: FastifyReply) => {
    if (await isAuth(req.headers.authorization)) {
        const token: any = req.headers.authorization && extractBearerToken(req.headers.authorization)
        if (!token) res.send({ currentUser: null })
        try {
            const extractedToken: any = jwt.verify(token, env.secret.token)
            const currentUser: any = decryptUser(await User.findByPk(extractedToken.id, {
                include: [
                    { model: Role }
                ]
            }))
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
            const user: any = decryptUser(await User.findOne({
                where: { email: encrypt(body.email) },
                include: [
                    { model: Role }
                ]
            }))
            const token: any = jwt.sign({ id: user.id }, env.secret.token)
            res.code(200).send({ token: token, currentUser: user })
        } else {
            res.code(400).send('Le formulaire est invalide')
        }
    } else { res.code(400).send('Vous êtes connecté') }
}

export const register = async (req: FastifyRequest, res: FastifyReply) => {
    if (!await isAuth(req.headers.authorization)) {
        if (await isValidRegisterForm(req.body)) {
            const body: any = req.body
            const hashedPassword: string = bcrypt.hashSync(body.password, bcrypt.genSaltSync(10))
            const data: any = {
                lastname: body.lastname,
                firstname: body.firstname,
                email: body.email,
                password: hashedPassword,
                roleId: '2'
            }
            await User.create(encryptUser(data))
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