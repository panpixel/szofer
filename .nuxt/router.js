import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _71e1964c = () => interopDefault(import('..\\pages\\blank-page.vue' /* webpackChunkName: "pages/blank-page" */))
const _1d4d59ec = () => interopDefault(import('..\\pages\\contact.vue' /* webpackChunkName: "pages/contact" */))
const _6beef29e = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    path: "/blank-page",
    component: _71e1964c,
    name: "blank-page___en"
  }, {
    path: "/contact",
    component: _1d4d59ec,
    name: "contact___en"
  }, {
    path: "/ar/",
    component: _6beef29e,
    name: "index___ar"
  }, {
    path: "/ar/blank-page",
    component: _71e1964c,
    name: "blank-page___ar"
  }, {
    path: "/ar/contact",
    component: _1d4d59ec,
    name: "contact___ar"
  }, {
    path: "/de/",
    component: _6beef29e,
    name: "index___de"
  }, {
    path: "/de/blank-page",
    component: _71e1964c,
    name: "blank-page___de"
  }, {
    path: "/de/contact",
    component: _1d4d59ec,
    name: "contact___de"
  }, {
    path: "/id/",
    component: _6beef29e,
    name: "index___id"
  }, {
    path: "/id/blank-page",
    component: _71e1964c,
    name: "blank-page___id"
  }, {
    path: "/id/contact",
    component: _1d4d59ec,
    name: "contact___id"
  }, {
    path: "/pt/",
    component: _6beef29e,
    name: "index___pt"
  }, {
    path: "/pt/blank-page",
    component: _71e1964c,
    name: "blank-page___pt"
  }, {
    path: "/pt/contact",
    component: _1d4d59ec,
    name: "contact___pt"
  }, {
    path: "/zh/",
    component: _6beef29e,
    name: "index___zh"
  }, {
    path: "/zh/blank-page",
    component: _71e1964c,
    name: "blank-page___zh"
  }, {
    path: "/zh/contact",
    component: _1d4d59ec,
    name: "contact___zh"
  }, {
    path: "/",
    component: _6beef29e,
    name: "index___en"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
