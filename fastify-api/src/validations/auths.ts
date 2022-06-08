import * as bcrypt from 'bcrypt';
import User from '../models/User'
import { isValidLastName, isValidFirstName, isValidEmail, isValidPassword } from './inputs'

export const isNotAuth = (token: any) => {
    if (token) { return false }
    else { return true }
}

export const isAuth = (token: any) => {
    if (token) { return true }
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