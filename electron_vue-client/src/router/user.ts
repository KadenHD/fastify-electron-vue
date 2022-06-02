import Users from "@/views/Users.vue"

export default [
    {
        path: '/users',
        name: 'Users',
        component: Users,
        meta: {
            title: 'Utilisateurs'
        },
        // beforeEnter: ,
    },
]