<template>
  <div class="root">
    <div class="bg-deco">
      <img :src="imgAPI.architect[8]" alt="3d home model" />
    </div>
    <v-container class="fixed-width">
      <v-row justify="center">
        <v-col md="7" cols="12" class="py-0">
          <title-main
            :head="$t('architectLanding.about_title')"
            dark
          />
          <p class="use-text.paragraph">
            {{ $t('architectLanding.about_desc') }}
          </p>
        </v-col>
        <v-col md="5" cols="12" class="illus-wrap py-0">
          <hidden point="smDown">
            <div>
              <img :src="imgAPI.architect[8]" alt="3d home model" class="illustration" />
            </div>
          </hidden>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import './about-style.scss';
</style>

<script>
import imgAPI from '~/static/images/imgAPI'
import Hidden from '../Hidden'
import Title from '../Title'

export default {
  components: {
    Hidden,
    'title-main': Title
  },
  data: () => ({
    imgAPI: imgAPI
  })
}
</script>
