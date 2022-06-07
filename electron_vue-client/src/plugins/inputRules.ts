
const regex_email = () => { return /.+@.+\..+/; };
const regex_password = () => { return /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.*\d).*$/; }; /* at least one Uppercase, one Lowercase, one special char and one number in any order.*/
const regex_name = () => { return /^(?=^[a-zA-Z-]*$)(?=.*[A-Z]+[a-z][A-Z]*)/; }; /* Start with one Uppercase, one Lowercase just after, white space, special char and number not allowed only hyphen.*/
const regex_min = (a: String) => { return new RegExp("^.{" + a + ",9999}$", "g"); };
const regex_max = (a: String) => { return new RegExp("^.{0," + a + "}$", "g"); };

export const emailRules = [
    (v: string) => !!v || "L'e-mail est requis",
    (v: string) => regex_email().test(v) || "Le format de l'e-mail doit être valide",
    (v: string) => regex_max("100").test(v) || "L'e-mail doit faire maximum 100 caractères",
]

export const passwordRules = [
    (v: string) => !!v || "Le mot de passe est requis",
    (v: string) => regex_password().test(v) || "Le mot de passe doit contenir : une majuscule, une minuscule, un chiffre, un caractère spécial",
    (v: string) => regex_min("8").test(v) || "Le mot de passe doit faire minimum 8 caractères",
    (v: string) => regex_max("60").test(v) || "Le mot de passe doit faire maximum 60 caractères",
]

export const lastNameRules = [
    (v: string) => !!v || "Le nom est requis",
    (v: string) => regex_name().test(v) || "Le nom doit commencer par une majuscule",
    (v: string) => regex_max("50").test(v) || "Le nom doit faire maximum 50 caractères",
]

export const firstNameRules = [
    (v: string) => !!v || "Le prénom est requis",
    (v: string) => regex_name().test(v) || "Le prénom doit commencer par une majuscule",
    (v: string) => regex_max("50").test(v) || "Le prénom doit faire maximum 50 caractères",
]