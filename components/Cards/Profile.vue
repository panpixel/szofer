<template>
  <div class="profile-card">
    <v-card class="paper">
      <img :src="photo" :alt="name" />
    </v-card>
    <h5 class="use-text-subtitle">{{ name }}</h5>
    <p class="use-text-caption">{{ title }}</p>
  </div>
</template>

<style lang="scss" scoped>
@import './card-style';
</style>

<script>
export default {
  props: {
    photo: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  }
}
</script>
