import CryptoJS from "crypto-js"
import dotenv from 'dotenv'
dotenv.config()

const secret: any = CryptoJS.enc.Utf8.parse(process.env.SECRET_CRYPTO as string);
const iv: any = CryptoJS.enc.Base64.parse(process.env.SECRET_CRYPTO as string);

export const encrypt = (key: any) => {
    return (
        CryptoJS.AES.encrypt(
            key, secret, { iv: iv }
        ).toString()
    )
}

export const decrypt = (key: any) => {
    return (
        CryptoJS.enc.Utf8.stringify(
            CryptoJS.AES.decrypt(
                { ciphertext: CryptoJS.enc.Base64.parse(key) } as any,
                secret,
                {
                    iv: iv
                }
            )
        )
    )
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