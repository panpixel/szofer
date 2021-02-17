<template>
  <div class="parallax-wrap cross-wrap">
    <div class="inner-parallax">
      <div class="figure">
        <div v-if="loaded">
          <parallax
            :speed-factor="0.5"
            :section-height="2500"
            direction="down"
          >
            <div class="parallax-cross">&nbsp;</div>
          </parallax>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import './parallax-style.scss';
</style>

<script>
import Parallax from 'vue-parallaxy'
export default {
  components: {
    Parallax
  },
  data() {
    return {
      loaded: false
    }
  },
  mounted() {
    this.loaded = true
  }
}
</script>
