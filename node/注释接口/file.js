import Vue from "vue"
import VueRouter from "vue-router"
import HomeView from "../views/HomeView.vue"
import pay from "../views/pay.vue"
// import Homebaby from "../views/Homebaby.vue"
let obj = {
  HomeView,
  pay,
}
Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/TreeDemo",
    name: "TreeDemo",
    component: () => import("../views/TreeDemo.vue"),
  },
  {
    path: "/demo1",
    name: "demo1",
    component: () => import("../views/demo1.vue"),
  },
  {
    path: "/demo2",
    name: "demo2",
    component: () => import("../views/demo2.vue"),
  },
]

const router = new VueRouter({
  routes,
})

export default router
