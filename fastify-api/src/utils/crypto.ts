import CryptoJS from "crypto-js"
import { env } from "./env"

const secret: any = CryptoJS.enc.Base64.parse(env.secret.crypto) /* length = 22 */
const iv: any = CryptoJS.enc.Base64.parse(env.secret.iv) /* length = 22 */

export const encrypt = (text: string) => {
    return CryptoJS.AES.encrypt(text, secret, { iv: iv }).toString()
}

export const decrypt = (text: string) => {
    return CryptoJS.AES.decrypt(text, secret, { iv: iv }).toString(CryptoJS.enc.Utf8)
}

export const encryptUser = (user: any) => {
    user.lastname = encrypt(user.lastname)
    user.firstname = encrypt(user.firstname)
    user.email = encrypt(user.email)
    return user
}

export const decryptUser = (user: any) => {
    user.lastname = decrypt(user.lastname)
    user.firstname = decrypt(user.firstname)
    user.email = decrypt(user.email)
    return user
}