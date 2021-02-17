<template>
  <div class="root">
    <v-dialog
      v-model="dialog"
      max-width="690"
    >
      <v-card class="video-popup">
        <v-card-title class="headline">
          <h2 class="title-main">
            {{ $t('architectLanding.featured_video') }}
            <v-btn icon @click="handleVideoClose()">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </h2>
        </v-card-title>
        <div class="text-center" v-if="yt">
          <youtube
            :video-id="videoId"
            :player-vars="playerVars"
            :width= "640"
            :height="360"
            ref="youtube"
          />
        </div>
      </v-card>
    </v-dialog>
    <v-container class="fixed-width">
      <v-row class="spacing6">
        <v-col class="pa-6" lg="7" md="10" cols="12">
          <div class="video-carousel" v-if="loaded">
            <slick ref="slick" :options="slickOptions">
              <v-card class="item">
                <img :src="imgAPI.architect[4]" alt="cover" />
                <v-btn
                  icon
                  class="play-btn"
                  @click="handleVideoOpen('ZGn8kSV9gAA')"
                >
                  <v-icon>mdi-play</v-icon>
                </v-btn>
              </v-card>
              <v-card class="item">
                <img :src="imgAPI.architect[5]" alt="cover" />
                <v-btn
                  icon
                  class="play-btn"
                  @click="handleVideoOpen('85V_u_R0zxM')"
                >
                  <v-icon>mdi-play</v-icon>
                </v-btn>
              </v-card>
              <v-card class="item">
                <img :src="imgAPI.architect[6]" alt="cover" />
                <v-btn
                  icon
                  class="play-btn"
                  @click="handleVideoOpen('ZGn8kSV9gAA')"
                >
                  <v-icon>mdi-play</v-icon>
                </v-btn>
              </v-card>
              <v-card class="item">
                <img :src="imgAPI.architect[7]" alt="cover" />
                <v-btn
                  icon
                  class="play-btn"
                  @click="handleVideoOpen('85V_u_R0zxM')"
                >
                  <v-icon>mdi-play</v-icon>
                </v-btn>
              </v-card>
            </slick>
          </div>
        </v-col>
        <v-col class="pa-6" lg="5" md="10" cols="12">
          <u-animate-container>
            <u-animate
              :offset="-200"
              name="fadeInLeftShort"
              delay="0.3s"
              duration="0.6s"
            >
              <div>
                <title-main
                  :head="$t('architectLanding.featured_title')"
                  :desc="$t('architectLanding.featured_subtitle')"
                />
                <p class="use-text-paragraph">
                  {{ $t('architectLanding.featured_desc1') }}
                </p>
                <p class="use-text-paragraph">
                  {{ $t('architectLanding.featured_desc2') }}
                </p>
              </div>
            </u-animate>
          </u-animate-container>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import './feature-style.scss';
</style>

<script>
import imgAPI from '~/static/images/imgAPI'
import youtube from '~/youtube'
import Title from '../Title'

export default {
  components: {
    'title-main': Title,
    Slick: () => import('vue-slick')
  },
  data() {
    return {
      dialog: false,
      imgAPI: imgAPI,
      yt: youtube,
      loaded: false,
      videoId: 'ZGn8kSV9gAA',
      slickOptions: {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 750,
        fade: true,
        arrows: false
      },
      playerVars: {
        autoplay: 0,
        controls: 1,
        rel: 0,
        showinfo: 1,
        mute: 0,
        origin: 'http://localhost:8002'
      }
    }
  },
  mounted() {
    this.loaded = true
  },
  methods: {
    handleVideoOpen(id) {
      this.videoId = id
      this.dialog = true
      if (this.yt.use) {
        setTimeout(() => {
          this.player = this.$refs.youtube.player
          this.player.playVideo()
        }, 100)
      }
    },
    handleVideoClose() {
      this.dialog = false
      this.player.pauseVideo()
    }
  },
  computed: {
    player() {
      return this.$refs.youtube.player
    }
  }
}
</script>
