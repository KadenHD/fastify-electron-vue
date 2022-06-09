import { isNotLogged } from "@/utils/beforeEnter";
import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";

export default [
    {
        path: "/login",
        name: "Login",
        component: Login,
        meta: {
            title: 'Connexion'
        },
        beforeEnter: isNotLogged
    },
    {
        path: "/register",
        name: "Register",
        component: Register,
        meta: {
            title: 'Inscription'
        },
        beforeEnter: isNotLogged
    },
];