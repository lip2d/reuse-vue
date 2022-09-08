import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DefaultLayout from '../layouts/DefaultLayout.vue'
import BlankLayout from '../layouts/BlankLayout.vue'

Vue.use(VueRouter)

const routes = [{
    path: "",
    component: DefaultLayout,
    children: [{
        path: '/',
        name: 'home',
        component: HomeView
      },
      {
        path: '/home',
        name: 'home',
        component: () => import('../views/HomeView.vue')
      },
      {
        path: '/profile',
        name: 'profile',
        component: () => import('../views/ProfileView.vue')
      },
      {
        path: '/changepassword',
        name: 'changepassword',
        component: () => import('../views/ChangePasswordView.vue')
      },
      {
        path: '/bookregister',
        name: 'bookregister',
        component: () => import('../views/BookRegisterView.vue')
      },

    ],
  },
  {
    path: "",
    component: BlankLayout,
    children: [{
      path: "/login",
      name: "login",
      component: () =>
        import("../views/LoginView.vue"),
    }, ],
  },
  {
    path: "",
    component: BlankLayout,
    children: [{
      path: "/register",
      name: "register",
      component: () =>
        import("../views/RegisterView.vue"),
    }, ],
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router