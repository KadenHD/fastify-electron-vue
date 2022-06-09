import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "@/views/Home.vue";
import User from "@/views/User.vue";
import Admin from "@/views/Admin.vue";
import NotFound from '@/views/NotFound.vue';
import authRouter from '@/router/auth';
import { homeRedirections } from "@/utils/beforeEnter";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  ...authRouter,
  {
    path: "/",
    name: "Default",
    redirect: { name: 'Home' }
  },

  {
    path: "/admin",
    name: "Admin",
    component: Admin,
  },
  {
    path: "/user",
    name: "User",
    component: User,
  },

  {
    path: "/home",
    name: "Home",
    component: Home,
    meta: {
      title: 'Home'
    },
    beforeEnter: homeRedirections,
  },
  {
    path: '/404',
    name: 'NotFound',
    component: NotFound,
    meta: {
      title: '404',
    }
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: { name: 'NotFound' }
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.afterEach((to) => {
  Vue.nextTick(() => {
    const meta: any = to.meta;
    document.title = meta.title;
  });
});

export default router;
