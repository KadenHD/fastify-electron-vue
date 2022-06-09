const regex_email = () => { return /.+@.+\..+/; };
const regex_password = () => { return /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.*\d).*$/; }; /* at least one Uppercase, one Lowercase, one special char and one number in any order.*/
const regex_name = () => { return /^(?=^[a-zA-Z-é]*$)(?=.*[A-Z]+[a-z][A-Z]*)/; }; /* Start with one Uppercase, one Lowercase just after, white space, special char and number not allowed only hyphen.*/
const regex_min = (v: String) => { return new RegExp("^.{" + v + ",9999}$", "g"); };
const regex_max = (v: String) => { return new RegExp("^.{0," + v + "}$", "g"); };

export const emailRule = [
    (v: string) => !!v || "L'e-mail est requis",
    (v: string) => regex_email().test(v) || "Le format de l'e-mail doit être valide",
    (v: string) => regex_max("100").test(v) || "L'e-mail doit faire maximum 100 caractères",
];

export const passwordRule = [
    (v: string) => !!v || "Le mot de passe est requis",
    (v: string) => regex_password().test(v) || "Le mot de passe doit contenir : une majuscule, une minuscule, un chiffre, un caractère spécial",
    (v: string) => regex_min("8").test(v) || "Le mot de passe doit faire minimum 8 caractères",
    (v: string) => regex_max("60").test(v) || "Le mot de passe doit faire maximum 60 caractères",
];

export const lastNameRule = [
    (v: string) => !!v || "Le nom est requis",
    (v: string) => regex_name().test(v) || "Le nom doit commencer par une majuscule",
    (v: string) => regex_max("50").test(v) || "Le nom doit faire maximum 50 caractères",
];

export const firstNameRule = [
    (v: string) => !!v || "Le prénom est requis",
    (v: string) => regex_name().test(v) || "Le prénom doit commencer par une majuscule",
    (v: string) => regex_max("50").test(v) || "Le prénom doit faire maximum 50 caractères",
];