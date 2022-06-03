export const emailRules = [
    (v: string) => !!v || "L'e-mail est requis",
    (v: string) => /.+@.+\..+/.test(v) || "Le format de l'e-mail doit être valide",
    (v: string) => v && v.length <= 100 || "L'e-mail doit faire maximum 100 caractères",
]

export const passwordRules = [
    (v: string) => !!v || "Le mot de passe est requis",
    (v: string) => (/[A-Z]/.test(v) && /[a-z]/.test(v) && /[0-9]/.test(v) && /[^A-Za-z0-9]/.test(v)) ||
        "Le mot de passe doit contenir : une majuscule, une minuscule, un chiffre, un caractère spécial",
    (v: string) => v && v.length > 7 || "Le mot de passe doit faire minimum 8 caractères",
    (v: string) => v && v.length <= 60 || "Le mot de passe doit faire maximum 60 caractères",
]

export const lastNameRules = [
    (v: string) => !!v || "Le nom est requis",
    (v: string) => v && v.charAt(0) == v.charAt(0).toUpperCase() || "Le nom doit commencer par une majuscule",
    (v: string) => v && v.length <= 50 || "Le nom doit faire maximum 50 caractères",
]

export const firstNameRules = [
    (v: string) => !!v || "Le prénom est requis",
    (v: string) => v && v.charAt(0) == v.charAt(0).toUpperCase() || "Le prénom doit commencer par une majuscule",
    (v: string) => v && v.length <= 50 || "Le prénom doit faire maximum 50 caractères",
]