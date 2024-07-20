import Vue from "vue"
import VueRouter from "vue-router"
import HomeView from "../views/HomeView.vue"
// let obj = {
//   HomeView,
// }
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
  {
    path: "/demo3",
    name: "demo3",
    component: () => import("../views/demo3/index"),
    children: [
      {
        path: "/demo3-1",
        name: "demo3-1",
        component: () => import("../views/demo3/demo3-1.vue"),
      },
      {
        path: "/demo3-2",
        name: "demo3-2",
        component: () => import("../views/demo3/demo3-2.vue"),
      },
    ],
  },
  {
    path: "/demo4",
    name: "demo4",
    component: () => import("../views/demo4.vue"),
  },
  {
    path: "/demo5",
    name: "demo5",
    component: () => import("../views/demo5.vue"),
  },
  {
    path: "/demo6",
    name: "demo6",
    component: () => import("../views/demo6.vue"),
  },
  {
    path: "/demo7",
    name: "demo7",
    component: () => import("../views/demo7.vue"),
  },
  {
    path: "/demo8",
    name: "demo8",
    component: () => import("../views/demo8.vue"),
  },
]

const router = new VueRouter({
  routes,
})

export default router
