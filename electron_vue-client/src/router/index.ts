import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "@/views/Home.vue";
import NotFound from '@/views/NotFound.vue';
import authRouter from '@/router/auth';
import userRouter from '@/router/user';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  ...authRouter,
  ...userRouter,
  {
    path: "/",
    redirect: { name: 'Home' }
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
    meta: {
      title: 'Home'
    },
    // beforeEnter: ,
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
