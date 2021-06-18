import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/auth/Login.vue'
import FAQPage from '../views/pages/faq.vue'
import SyaratPage from '../views/pages/syarat.vue'
import ProductDetail from '../views/products/ProductDetail.vue'
import Cart from '../views/products/Cart.vue'
import Profile from '../views/profile/Profile.vue'
import result from '../views/products/result.vue'
import Register from '../views/auth/Register.vue'
import Compare from '../views/products/Compare.vue'
import Cari from '../views/products/cari.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/FAQ',
    name: 'FAQ',
    component: FAQPage
  },
  {
    path: '/terms',
    name: 'Terms',
    component: SyaratPage
  },
  {
    path: '/product/:idProduct',
    name: 'ProductDetail',
    component: ProductDetail,
  },
  {
    path: '/cari/:id',
    name: 'Cari',
    component: Cari,
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart,
  },
  {
    path: '/my-account',
    name: 'Profile',
    component: Profile,
  },
  {
    path: '/kategori/:id',
    name: 'Kategori',
    component: result,
  },
  {
    path: '/register-merchant',
    name: 'Register',
    component: Register,
  },
  {
    path: '/compare',
    name: 'Compare',
    component: Compare,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  // scrollBehavior (to, from, savedPosition) {
  //   return { x: 0, y: 0 };
  // }
})

export default router
