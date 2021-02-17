<template>
  <div class="root">
    <hidden point="mdDown">
      <v-btn
        v-if="play"
        icon
        class="btn-play"
        @click="togglePause()"
      >
        <v-icon v-if="playCtrl">mdi-pause</v-icon>
        <v-icon v-else>mdi-play</v-icon>
      </v-btn>
    </hidden>
    <v-container :class="{fixed: !isMobile}" class="banner-wrap">
      <div class="video">
        <div class="overlay" />
        <img v-if="!play || isMobile" :src="imgAPI.architect[0]" alt="cover" />
        <div v-if="yt.use">
          <youtube
            v-if="isDesktop"
            :video-id="videoId"
            :player-vars="playerVars"
            :width= "1080"
            :height="720"
            ref="youtube"
            @playing="playing"
            @ended="ended"
          />
        </div>
      </div>
      <div class="parallax">
        <cross-parallax />
      </div>
      <div class="block">
        <v-row justify="end">
          <v-col md="9" cols="12">
            <div class="paper-wrap">
              <v-card class="paper">
                <div>
                  <h4 class="use-text-title2">
                    {{ $t('architectLanding.banner_title') }}
                  </h4>
                  <p class="subtitle use-text-subtitle2">
                    {{ $t('architectLanding.banner_desc') }}
                  </p>
                  <v-btn large color="primary" class="button">
                    {{ $t('architectLanding.banner_btn') }}
                  </v-btn>
                </div>
              </v-card>
            </div>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import './banner-style.scss';
</style>

<script>
import imgAPI from '~/static/images/imgAPI'
import youtube from '~/youtube'
import CrossParallax from '../Parallax/Cross'
import Hidden from '../Hidden'

export default {
  components: {
    CrossParallax,
    Hidden
  },
  data() {
    return {
      imgAPI: imgAPI,
      videoId: 'ZbrmXvbm8GA',
      playerVars: {
        autoplay: 1,
        controls: 0,
        rel: 0,
        showinfo: 0,
        mute: 1,
        origin: 'http://localhost:8002'
      },
      yt: youtube,
      play: false,
      playCtrl: true,
      cover: imgAPI.architect[0]
    }
  },
  methods: {
    playing() {
      this.play = true
      this.playCtrl = true
    },
    ended() {
      this.player.playVideo()
    },
    togglePause() {
      this.playCtrl = !this.playCtrl
      if (this.playCtrl) {
        this.player.playVideo()
      } else {
        this.player.pauseVideo()
      }
    }
  },
  computed: {
    player() {
      return this.$refs.youtube.player
    },
    isDesktop() {
      const lgUp = this.$store.state.breakpoints.lgUp
      return lgUp.indexOf(this.$mq) > -1
    },
    isMobile() {
      const mdDown = this.$store.state.breakpoints.mdDown
      return mdDown.indexOf(this.$mq) > -1
    }
  }
}
</script>
