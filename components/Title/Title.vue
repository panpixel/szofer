<template>
  <div class="title-main" :class="{ dark: dark}">
    <h4 class="use-text-title2">
      {{ head }}
    </h4>
    <p class="desc use-text-subtitle2">
      {{ desc }}
    </p>
  </div>
</template>

<style lang="scss" scoped>
@import './title-style';
</style>

<script>
export default {
  props: {
    head: {
      type: String,
      required: true
    },
    desc: {
      type: String,
      default: ''
    },
    dark: {
      type: Boolean,
      default: false
    }
  }
}
</script>
