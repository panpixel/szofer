<template>
  <div class="root">
    <div class="parallax-wrap">
      <v-parallax
        :src="imgAPI.architect[15]"
        :height="570"
      />
    </div>
    <v-container class="fixed-width">
      <v-card class="form">
        <h4 class="use-text-title2">
          {{ $t('architectLanding.subscribe_title') }}
        </h4>
        <p class="use-text-subtitle2">
          {{ $t('architectLanding.subscribe_subtitle') }}
        </p>
        <form>
          <v-text-field
            :label="$t('architectLanding.subscribe_input')"
            class="field"
          />
          <v-btn large color="secondary" class="button">
            {{ $t('architectLanding.subscribe_subscribe') }}
          </v-btn>
        </form>
      </v-card>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import './subscribe-style.scss';
</style>

<script>
import imgAPI from '~/static/images/imgAPI'

export default {
  data: () => ({
    imgAPI: imgAPI
  })
}
</script>
