import Vue from 'vue'
import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from '..\\layouts\\error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'
import { createStore } from './store.js'

/* Plugins */

import nuxt_plugin_plugin_39f51021 from 'nuxt_plugin_plugin_39f51021' // Source: .\\vuetify\\plugin.js (mode: 'all')
import nuxt_plugin_pluginrouting_678599ba from 'nuxt_plugin_pluginrouting_678599ba' // Source: .\\nuxt-i18n\\plugin.routing.js (mode: 'all')
import nuxt_plugin_pluginmain_bce379a8 from 'nuxt_plugin_pluginmain_bce379a8' // Source: .\\nuxt-i18n\\plugin.main.js (mode: 'all')
import nuxt_plugin_nuxtgooglemaps_2914cc7e from 'nuxt_plugin_nuxtgooglemaps_2914cc7e' // Source: .\\nuxt-google-maps.js (mode: 'all')
import nuxt_plugin_nuxtmq_88396644 from 'nuxt_plugin_nuxtmq_88396644' // Source: .\\nuxt-mq.js (mode: 'all')
import nuxt_plugin_vuewowconfig_32ee3066 from 'nuxt_plugin_vuewowconfig_32ee3066' // Source: ..\\plugins\\vue-wow-config (mode: 'all')
import nuxt_plugin_vuefragmentconfig_12a6b83c from 'nuxt_plugin_vuefragmentconfig_12a6b83c' // Source: ..\\plugins\\vue-fragment-config (mode: 'all')
import nuxt_plugin_countupconfig_ca7ae10a from 'nuxt_plugin_countupconfig_ca7ae10a' // Source: ..\\plugins\\countup-config (mode: 'client')
import nuxt_plugin_vueyoutubeconfig_52b5d649 from 'nuxt_plugin_vueyoutubeconfig_52b5d649' // Source: ..\\plugins\\vue-youtube-config (mode: 'client')
import nuxt_plugin_i18nconfig_ad306bc6 from 'nuxt_plugin_i18nconfig_ad306bc6' // Source: ..\\plugins\\i18n-config.js (mode: 'all')
import nuxt_plugin_carousselconfig_6e4e7344 from 'nuxt_plugin_carousselconfig_6e4e7344' // Source: ..\\plugins\\caroussel-config (mode: 'client')
import nuxt_plugin_vuescrollnav_65918480 from 'nuxt_plugin_vuescrollnav_65918480' // Source: ..\\plugins\\vue-scroll-nav (mode: 'client')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","appear":false,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext)

  const store = createStore(ssrContext)
  // Add this.$router into store actions/mutations
  store.$router = router

  // Fix SSR caveat https://github.com/nuxt/nuxt.js/issues/3757#issuecomment-414689141
  const registerModule = store.registerModule
  store.registerModule = (path, rawModule, options) => registerModule.call(store, path, rawModule, Object.assign({ preserveState: process.client }, options))

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"htmlAttrs":{"dir":"ltr"},"title":"Auto do Ślubu - woj. Śląskie, Małopolskie","meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"name":"description","content":"Wynajem samochodu do ślubu wraz z kierowcą. VOLVO XC60 z roku 2020 w stylizacji r-design."},{"name":"msapplication-TileColor","content":"#FFFFFF"},{"name":"msapplication-TileImage","content":"\u002Ffavicons\u002Fms-icon-144x144.png"},{"name":"theme-color","content":"#212121"},{"property":"author","content":"panpixel.studio"},{"property":"og:site_name","content":"panpixel.studio"},{"property":"og:locale","content":"en_US"},{"property":"og:type","content":"website"},{"property":"twitter:site","content":"panpixel.studio"},{"property":"twitter:domain","content":"panpixel.studio"},{"property":"twitter:creator","content":"panpixel.studio"},{"property":"twitter:card","content":"summary"},{"property":"twitter:image:src","content":"\u002Fimages\u002Flogo.png"},{"property":"og:url","content":"panpixel.studio"},{"property":"og:title","content":"Auto do Ślubu"},{"property":"og:description","content":"Wynajem samochodu do ślubu wraz z kierowcą. VOLVO XC60 z roku 2020 w stylizacji r-design."},{"name":"twitter:site","content":"panpixel.studio"},{"name":"twitter:card","content":"summary_large_image"},{"name":"twitter:image","content":"\u002Fstatic\u002Fimages\u002Flogo-szoferwkapeluszu.png"},{"property":"og:image","content":"\u002Fstatic\u002Fimages\u002Flogo-szoferwkapeluszu.png"},{"property":"og:image:width","content":"1200"},{"property":"og:image:height","content":"630"}],"link":[{"rel":"shortcut icon","href":"\u002Ffavicons\u002Ffavicon.ico"},{"rel":"apple-touch-icon","sizes":"57x57","href":"\u002Ffavicons\u002Fapple-icon-57x57.png"},{"rel":"apple-touch-icon","sizes":"60x60","href":"\u002Ffavicons\u002Fapple-icon-60x60.png"},{"rel":"apple-touch-icon","sizes":"72x72","href":"\u002Ffavicons\u002Fapple-icon-72x72.png"},{"rel":"apple-touch-icon","sizes":"76x76","href":"\u002Ffavicons\u002Fapple-icon-76x76.png"},{"rel":"apple-touch-icon","sizes":"114x114","href":"\u002Ffavicons\u002Fapple-icon-114x114.png"},{"rel":"apple-touch-icon","sizes":"120x120","href":"\u002Ffavicons\u002Fapple-icon-120x120.png"},{"rel":"apple-touch-icon","sizes":"144x144","href":"\u002Ffavicons\u002Fapple-icon-144x144.png"},{"rel":"apple-touch-icon","sizes":"152x152","href":"\u002Ffavicons\u002Fapple-icon-152x152.png"},{"rel":"apple-touch-icon","sizes":"180x180","href":"\u002Ffavicons\u002Fapple-icon-180x180.png"},{"rel":"icon","type":"image\u002Fpng","sizes":"192x192","href":"\u002Ffavicons\u002Fandroid-icon-192x192.png"},{"rel":"icon","type":"image\u002Fpng","sizes":"32x32","href":"\u002Ffavicons\u002Ffavicon-32x32.png"},{"rel":"icon","type":"image\u002Fpng","sizes":"96x96","href":"\u002Ffavicons\u002Ffavicon-96x96.png"},{"rel":"icon","type":"image\u002Fpng","sizes":"16x16","href":"\u002Ffavicons\u002Ffavicon-16x16.png"},{"rel":"manifest","href":"\u002Ffavicons\u002Fmanifest.json"},{"rel":"stylesheet","href":"https:\u002F\u002Ffonts.googleapis.com\u002Fcss?family=Lato:400,700,900&display=swap"},{"rel":"stylesheet","href":"https:\u002F\u002Ffonts.googleapis.com\u002Ficon?family=Material+Icons"},{"rel":"stylesheet","href":"https:\u002F\u002Fcode.ionicframework.com\u002Fionicons\u002F2.0.1\u002Fcss\u002Fionicons.min.css"},{"rel":"stylesheet","type":"text\u002Fcss","href":"https:\u002F\u002Ffonts.googleapis.com\u002Fcss?family=Roboto:100,300,400,500,700,900&display=swap"},{"rel":"stylesheet","type":"text\u002Fcss","href":"https:\u002F\u002Fcdn.jsdelivr.net\u002Fnpm\u002F@mdi\u002Ffont@latest\u002Fcss\u002Fmaterialdesignicons.min.css"}],"style":[],"script":[]},

    store,
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  // Make app available into store via this.app
  store.app = app

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    store,
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  })

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`)
    }

    key = '$' + key
    // Add into app
    app[key] = value
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value
    }

    // Add into store
    store[key] = app[key]

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue.prototype, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  // Inject runtime config as $config
  inject('config', config)

  if (process.client) {
    // Replace store state before plugins execution
    if (window.__NUXT__ && window.__NUXT__.state) {
      store.replaceState(window.__NUXT__.state)
    }
  }

  // Add enablePreview(previewData = {}) in context for plugins
  if (process.static && process.client) {
    app.context.enablePreview = function (previewData = {}) {
      app.previewData = Object.assign({}, previewData)
      inject('preview', previewData)
    }
  }
  // Plugin execution

  if (typeof nuxt_plugin_plugin_39f51021 === 'function') {
    await nuxt_plugin_plugin_39f51021(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginrouting_678599ba === 'function') {
    await nuxt_plugin_pluginrouting_678599ba(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginmain_bce379a8 === 'function') {
    await nuxt_plugin_pluginmain_bce379a8(app.context, inject)
  }

  if (typeof nuxt_plugin_nuxtgooglemaps_2914cc7e === 'function') {
    await nuxt_plugin_nuxtgooglemaps_2914cc7e(app.context, inject)
  }

  if (typeof nuxt_plugin_nuxtmq_88396644 === 'function') {
    await nuxt_plugin_nuxtmq_88396644(app.context, inject)
  }

  if (typeof nuxt_plugin_vuewowconfig_32ee3066 === 'function') {
    await nuxt_plugin_vuewowconfig_32ee3066(app.context, inject)
  }

  if (typeof nuxt_plugin_vuefragmentconfig_12a6b83c === 'function') {
    await nuxt_plugin_vuefragmentconfig_12a6b83c(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_countupconfig_ca7ae10a === 'function') {
    await nuxt_plugin_countupconfig_ca7ae10a(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vueyoutubeconfig_52b5d649 === 'function') {
    await nuxt_plugin_vueyoutubeconfig_52b5d649(app.context, inject)
  }

  if (typeof nuxt_plugin_i18nconfig_ad306bc6 === 'function') {
    await nuxt_plugin_i18nconfig_ad306bc6(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_carousselconfig_6e4e7344 === 'function') {
    await nuxt_plugin_carousselconfig_6e4e7344(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vuescrollnav_65918480 === 'function') {
    await nuxt_plugin_vuescrollnav_65918480(app.context, inject)
  }

  // Lock enablePreview in context
  if (process.static && process.client) {
    app.context.enablePreview = function () {
      console.warn('You cannot call enablePreview() outside a plugin.')
    }
  }

  // If server-side, wait for async component to be resolved first
  if (process.server && ssrContext && ssrContext.url) {
    await new Promise((resolve, reject) => {
      router.push(ssrContext.url, resolve, () => {
        // navigated to a different route in router guard
        const unregister = router.afterEach(async (to, from, next) => {
          ssrContext.url = to.fullPath
          app.context.route = await getRouteData(to)
          app.context.params = to.params || {}
          app.context.query = to.query || {}
          unregister()
          resolve()
        })
      })
    })
  }

  return {
    store,
    app,
    router
  }
}

export { createApp, NuxtError }
