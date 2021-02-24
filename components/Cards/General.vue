<template>
  <v-card class="general-card">
    <figure>
      <img :src="img" :alt="title" />
    </figure>
   
  </v-card>
</template>

<style lang="scss" scoped>
@import './card-style';
</style>

<script>
export default {
  props: {
    img: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    desc: {
      type: String,
      required: true
    }
  }
}
</script>
