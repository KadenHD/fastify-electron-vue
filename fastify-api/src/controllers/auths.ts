import * as bcrypt from 'bcrypt'
import { FastifyReply, FastifyRequest } from "fastify"
import User from '../models/User'
import { isNotAuth, isValidLoginForm, isValidRegisterForm } from "../validations/auths"

export const login = async (req: FastifyRequest, res: FastifyReply) => {
    if (isNotAuth(req.headers.authorization)) {
        if (await isValidLoginForm(req.body)) {
            const body: any = req.body
            const data: any = await User.findOne({ where: { email: body.email } })
            // créer le token de session et l'envoyer
            res.send({ token: 'token', currentUser: data })
        } else {
            res.send('Le formulaire est invalide')
        }
    } else { res.send('Vous êtes connecté') }
}

export const register = async (req: FastifyRequest, res: FastifyReply) => {
    if (isNotAuth(req.headers.authorization)) {
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