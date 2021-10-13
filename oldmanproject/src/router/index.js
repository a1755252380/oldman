import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/index.vue")
  },
  {
    path: "/index",
    name: "About",

    component: () => import("../views/index.vue")
  },

  {
    path: "/text",
    name: "About",

    component: () => import("../components/Voice_assistant.vue")
  },
  {
    path: "/Individual",
    name: "Individual",

    component: () => import("../views/Individual.vue")
  }
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
})

export default router
