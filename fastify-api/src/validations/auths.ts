import * as bcrypt from 'bcrypt'
import User from '../models/User'
import jwt from 'jsonwebtoken'
import { isValidLastName, isValidFirstName, isValidEmail, isValidPassword } from './inputs'
import dotenv from 'dotenv'
dotenv.config()

export const extractBearerToken = (headerValue: any) => {
    if (typeof headerValue != 'string') return false
    const matches = headerValue.match(/(bearer)\s+(\S+)/i)
    return matches && matches[2]
}

export const isAuth = async (token: any) => {
    const extractedToken: any = token && extractBearerToken(token)
    if (extractedToken) {
        const decriptedToken: any = jwt.verify(extractedToken, process.env.SECRET_TOKEN as string)
        const user: any = await User.findByPk(decriptedToken.id)
        if (user) {
            return true
        } else {
            return false
        }
    }
    else {
        return false
    }
}

export const isValidLoginForm = async (body: any) => {
    if (!body) { return false }
    const { email, password }: any = body
    if (isValidEmail(email) && isValidPassword(password) && await isExistingEmail(email) && await isMatchingPassword(email, password)) {
        return true
    }
    else {
        return false
    }
}

export const isValidRegisterForm = async (body: any) => {
    if (!body) { return false }
    const { lastname, firstname, email, password }: any = body
    if (isValidLastName(lastname) && isValidFirstName(firstname) && isValidEmail(email) && isValidPassword(password) && !await isExistingEmail(email)) {
        return true
    }
    else {
        return false
    }
}

const isExistingEmail = async (email: string) => {
    if (await User.findOne({ where: { email: email } })) {
        return true
    } else {
        return false
    }
}

const isMatchingPassword = async (email: string, password: string) => {
    const user: any = await User.findOne({ where: { email: email } })
    const match: boolean = await bcrypt.compare(password, user.password)
    if (match) {
        return true
    } else {
        return false
    }
}