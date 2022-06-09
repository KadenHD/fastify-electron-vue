import CryptoJS from "crypto-js"
import dotenv from 'dotenv'
dotenv.config()

const secret: any = process.env.SECRET_CRYPTO;

export const encrypt = (text: string) => {
    const hash: any = CryptoJS.SHA256(secret);
    const ciphertext: any = CryptoJS.AES.encrypt(text, hash, {
        mode: CryptoJS.mode.ECB,
    });
    return ciphertext.toString();
};

export const decrypt = (text: string) => {
    const hash: any = CryptoJS.SHA256(secret);
    const bytes: any = CryptoJS.AES.decrypt(text, hash, {
        mode: CryptoJS.mode.ECB,
    });
    return bytes.toString(CryptoJS.enc.Utf8);
};

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