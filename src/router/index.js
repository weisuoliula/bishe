import Vue from "vue";
import VueRouter from "vue-router";
import indexPage from "./indexpage"
Vue.use(VueRouter);
const router = new VueRouter({
  mode: "hash",
  routes: [{
      path: "/",
      redirect: "/log"
    },
    {
      path: "/log",
      component: _ => import("@pages/login"),
      name: "log",
      meta: {
        flag: true,
        requireAuth: false
      }
    },
    {
      path: "/sign",
      component: _ => import("@pages/sign"),
      name: "sign",
      meta: {
        flag: true,
        requireAuth: false
      }
    },
    {
      path: "/index",
      component: _ => import("@pages/indexlist"),
      name: "indexList",
      meta: {
        flag: true,
        requireAuth: false
      }
    },
    indexPage
  ]
})
export default router