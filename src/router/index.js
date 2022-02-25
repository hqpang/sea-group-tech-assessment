import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TodoView from '../views/ToDoView.vue'
import Register from '../views/RegisterView.vue'
import UserProfileView from '../views/UserProfileView.vue'
import SignInView from '../views/SignInView'
import NewTaskView from '../views/NewTaskView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/todo',
    name: 'Todo',
    component: TodoView
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/userprofile',
    name: 'UserProfile',
    component: UserProfileView
  },
  {
    path: '/signin',
    name: 'SignIn',
    component: SignInView
  },
  {
    path: '/newtask',
    name: 'NewTask',
    component: NewTaskView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
