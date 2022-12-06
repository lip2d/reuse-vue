import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DefaultLayout from '../layouts/DefaultLayout.vue'
import BlankLayout from '../layouts/BlankLayout.vue'
import PerfilLayout from '../layouts/PerfilLayout.vue'

import { auth } from "../plugins/firebase"

Vue.use(VueRouter)

const routes = [
  {
    path: "",
    component: PerfilLayout,
    children: [
      {
        path: '/profile',
        name: 'profile',
        meta: {
          requiresAuth: true
        },
        component: () => import('../views/ProfileView.vue')
      },
      {
        path: '/changepassword',
        name: 'changepassword',
        meta: {
          requiresAuth: true
        },
        component: () => import('../views/ChangePasswordView.vue')
      },
      {
        path: '/bookregister',
        name: 'bookregister',
        meta: {
          requiresAuth: true
        },
        component: () => import('../views/BookRegisterView.vue')
      },
      {
        path: '/mybooks',
        name: 'mybooks',
        meta: {
          requiresAuth: true
        },
        component: () => import('../views/MyBooks.vue')
      },
      {
        path: '/favorites',
        name: 'favorites',
        meta: {
          requiresAuth: true
        },
        component: () => import('../views/favorites.vue')
      },
    ]
  },
  {
    path: "",
    component: DefaultLayout,
    children: [
      {
        path: '/home',
        name: 'home',
        meta: {
          requiresAuth: false
        },
        component: HomeView
      },
      {
        path: '/atendimento',
        name: 'atendimento',
        meta: {
          requiresAuth: false
        },
        component: () => import('../views/atendimento.vue')
      },
      {
        path: '/book',
        name: 'book',
        meta: {
          requiresAuth: false
        },
        component: () => import('../views/Books.vue')
      },
      {
        path: '/results/:busca',
        name: 'results',
        props: true,
        meta: {
          requiresAuth: false
        },
        component: () => import('../views/resultadoPesquisa.vue')
      },
    ],
  },
  {
    path: "",
    component: BlankLayout,
    meta: {
      requiresAuth: false
    },
    children: [
      {
        path: "/login",
        name: "login",
        component: () =>
          import("../views/LoginView.vue"),
      },
      {
        path: "/register",
        name: "register",
        component: () =>
          import("../views/RegisterView.vue"),
      },],
  },];


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  let requiresAuth = to.matched.some((rec) => rec.meta.requiresAuth == true);
  let user = auth.currentUser;

  if (requiresAuth && !user) {
    next(
      "/login"
    )
  } else {
    next()
  }
})

export default router