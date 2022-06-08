const regex_email: any = () => { return /.+@.+\..+/; };
const regex_password: any = () => { return /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.*\d).*$/; }; /* at least one Uppercase, one Lowercase, one special char and one number in any order.*/
const regex_name: any = () => { return /^(?=^[a-zA-Z-]*$)(?=.*[A-Z]+[a-z][A-Z]*)/; }; /* Start with one Uppercase, one Lowercase just after, white space, special char and number not allowed only hyphen.*/
const regex_min: any = (v: String) => { return new RegExp("^.{" + v + ",9999}$", "g"); };
const regex_max: any = (v: String) => { return new RegExp("^.{0," + v + "}$", "g"); };

export const isValidLastName = (key: any) => {
    const type: boolean = typeof key === 'string'
    const format: boolean = regex_name().test(key)
    const max: boolean = regex_max("50").test(key)
    if (key && type && format && max) {
        return true
    } else { return false }
}

export const isValidFirstName = (key: any) => {
    const type: boolean = typeof key === 'string'
    const format: boolean = regex_name().test(key)
    const max: boolean = regex_max("50").test(key)
    if (key && type && format && max) {
        return true
    } else { return false }
}

export const isValidEmail = (key: any) => {
    const type: boolean = typeof key === 'string'
    const format: boolean = regex_email().test(key)
    const max: boolean = regex_max("100").test(key)
    if (key && type && format && max) {
        return true
    } else { return false }
}

export const isValidPassword = (key: any) => {
    const type: boolean = typeof key === 'string'
    const format: boolean = regex_password().test(key)
    const min: boolean = regex_min("8").test(key)
    const max: boolean = regex_max("60").test(key)
    if (key && type && format && min && max) {
        return true
    } else { return false }
}