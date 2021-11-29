import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: "/information/:id",
    name: "Information",
    component: () => import(`@/views/Information.vue`),
  },
  {
    path: "/404",
    name: "NotFound",
    component: () => import(`@/views/NotFound.vue`),
  },
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

/* router.beforeEach((to, from, next) => {

  if(estaMelo() != 'estaMelo'){
    return next({name: 'Home'})
  }
  return next()
}) */

export default router
