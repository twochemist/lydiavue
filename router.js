import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _45dddb83 = () => interopDefault(import('..\\pages\\About.vue' /* webpackChunkName: "pages/About" */))
const _61e995b7 = () => interopDefault(import('..\\pages\\Articles.vue' /* webpackChunkName: "pages/Articles" */))
const _4851db16 = () => interopDefault(import('..\\pages\\Contact.vue' /* webpackChunkName: "pages/Contact" */))
const _9d2b1518 = () => interopDefault(import('..\\pages\\Projects.vue' /* webpackChunkName: "pages/Projects" */))
const _23b8d330 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/About",
    component: _45dddb83,
    name: "About"
  }, {
    path: "/Articles",
    component: _61e995b7,
    name: "Articles"
  }, {
    path: "/Contact",
    component: _4851db16,
    name: "Contact"
  }, {
    path: "/Projects",
    component: _9d2b1518,
    name: "Projects"
  }, {
    path: "/",
    component: _23b8d330,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
