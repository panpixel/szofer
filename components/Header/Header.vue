<template>
  <fragment>
    <v-navigation-drawer
      v-if="isMobile"
      v-model="openDrawer"
      fixed
      temporary
      class="mobile-nav"
    >
      <mobile-menu :open="openDrawer" />
    </v-navigation-drawer>
    <v-app-bar
      v-scroll="handleScroll"
      id="header"
      :class="{ fixed: fixed, 'open-drawer': openDrawer }"
      class="header"
      fixed
      app
    >
      <v-container :class="{ 'fixed-width': isDesktop }">
        <v-row>
          <v-col sm="2" cols="7" class="py-sm-0 px-0">
            <div class="logo" :class="{ invert: invert }">
              <v-btn
                v-if="isMobile"
                :class="{ 'is-active': openDrawer }"
                class="hamburger hamburger--spin mobile-menu"
                text
                icon
                @click.stop="handleToggleOpen"
              >
                <span class="hamburger-box">
                  <span class="bar hamburger-inner" />
                </span>
              </v-btn>
              <nuxt-link
                v-if="invert"
                :to="routeLink.architect.home"
              >
                <img
                  :src="logo"
                  alt="logo"
                >
                <span v-if="isDesktop">
                  {{ brand.architect.projectName }}
                </span>
              </nuxt-link>
              <scrollactive
                v-if="!invert && loaded"
                tag="span"
              >
                <a
                  href="#home"
                  class="anchor-link scrollactive-item"
                >
                  <img
                    :src="logo"
                    alt="logo"
                  >
                  <span v-if="isDesktop">
                    {{ brand.architect.projectName }}
                  </span>
                </a>
              </scrollactive>
            </div>
          </v-col>
          <v-col :sm="isTablet ? 10 : 9" cols="5" class="py-sm-0 px-0">
            <div class="header-content">
              <nav
                :class="{ invert: invert }"
                class="nav-menu"
              >
                <div v-if="isDesktop">
                  <scrollactive
                    v-if="loaded"
                    :offset="navOffset"
                    active-class="active"
                    tag="ul"
                  >
                    <li
                      v-for="(item, index) in menuList"
                      :key="index"
                    >
                      <v-btn
                        v-if="!invert"
                        :href="item.url"
                        class="anchor-link scrollactive-item"
                        text
                        @click="setOffset(item.offset)"
                      >
                        {{ $t('architectLanding.header_'+item.name) }}
                      </v-btn>
                      <v-btn
                        v-if="invert"
                        :href="'/' + item.url"
                        text
                      >
                        {{ $t('architectLanding.header_'+item.name) }}
                      </v-btn>
                    </li>
                    <li>
                      <v-btn
                        :href="routeLink.architect.contact"
                        text
                      >
                        {{ $t('architectLanding.header_contact') }}
                      </v-btn>
                    </li>
                  </scrollactive>
                </div>
              </nav>
              <nav>
                <setting-menu :invert="invert" />
              </nav>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>
  </fragment>
</template>

<style lang="scss" scoped>
@import './header-style.scss';
</style>

<script>
import logo from '~/static/images/architect-logo.svg'
import link from '~/static/text/link'
import brand from '~/static/text/brand'
import navMenu from './menu'
import Settings from './Settings'
import MobileMenu from './MobileMenu'

let counter = 0
function createData(name, url, offset) {
  counter += 1
  return {
    id: counter,
    name,
    url,
    offset
  }
}

export default {
  components: {
    'setting-menu': Settings,
    MobileMenu
  },
  props: {
    invert: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      logo: logo,
      routeLink: link,
      loaded: false,
      brand: brand,
      section: 0,
      fixed: false,
      openDrawer: null,
      navOffset: 20,
      menuList: [
        createData(navMenu[0], '#' + navMenu[0]),
        createData(navMenu[1], '#' + navMenu[1]),
        createData(navMenu[2], '#' + navMenu[2]),
        createData(navMenu[3], '#' + navMenu[3]),
        createData(navMenu[4], '#' + navMenu[4])
      ]
    }
  },
  mounted() {
    this.loaded = true
  },
  methods: {
    handleScroll: function() {
      if (window.scrollY > 80) {
        return (this.fixed = true)
      }
      return (this.fixed = false)
    },
    setOffset: function(offset) {
      this.navOffset = offset
    },
    handleToggleOpen: function() {
      this.openDrawer = !this.openDrawer
    }
  },
  computed: {
    isMobile() {
      const smDown = this.$store.state.breakpoints.smDown
      return smDown.indexOf(this.$mq) > -1
    },
    isTablet() {
      const mdDown = this.$store.state.breakpoints.mdDown
      return mdDown.indexOf(this.$mq) > -1
    },
    isDesktop() {
      const mdUp = this.$store.state.breakpoints.mdUp
      return mdUp.indexOf(this.$mq) > -1
    }
  }
}
</script>
