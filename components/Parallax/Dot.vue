<template>
  <div class="parallax-wrap dots-wrap">
    <div class="inner-parallax">
      <div class="figure">
        <div v-if="loaded">
          <parallax
            :speed-factor="0.5"
            :section-height="800"
            direction="down"
          >
            <svg
              fill="#cccccc"
              width="902px"
              height="1042px"
              class="parallax-vertical parallax-dot"
            >
              <use xlink:href="/images/decoration/dot-deco.svg#dot" />
            </svg>
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
