<template>
  <v-app>
    <transition name="fade">
      <div id="main-wrap" :class="{ hide: !show }">
        <v-main>
          <nuxt />
        </v-main>
      </div>
    </transition>
  </v-app>
</template>

<style lang="scss" scoped>
.hide {
  display: none;
}
</style>

<script>
export default {
  loading: false,
  data() {
    return {
      show: false
    }
  },
  mounted: function() {
    // Preloader and Progress bar setup
    this.show = true
    this.$nextTick(() => {
      setTimeout(() => this.$nuxt.$loading.finish(), 500)
      this.$nuxt.$loading.start()
    })
    const preloader = document.getElementById('preloader')
    if (preloader !== null || undefined) {
      preloader.remove()
    }
    // RTL initial
    const rtlURL = document.location.pathname.split('/')[1] === 'ar'
    this.$vuetify.rtl = rtlURL
  }
}
</script>
