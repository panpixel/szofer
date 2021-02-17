<template>
  <v-card class="general-card">
    <figure>
      <img :src="img" :alt="title" />
    </figure>
    <v-card class="desc">
      <h6 class="title pb-2">{{ title }}</h6>
      <p class="use-text-paragraph">
        {{ desc }}
      </p>
      <v-btn class="button" color="secondary">
        See Detail
      </v-btn>
    </v-card>
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
