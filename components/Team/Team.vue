<template>
  <div class="root">
    <div class="deco" />
    <v-container v-if="loaded" :class="{ 'fixed-width': isDesktop }">
      <u-animate-container>
        <u-animate
          :offset="-10"
          name="fadeInUpShort"
          delay="0.2s"
          duration="0.6s"
        >
          <title-main
            :head="$t('architectLanding.team_title')"
            :desc="$t('architectLanding.team_desc')"
          />
        </u-animate>
      </u-animate-container>
      <div class="team-wrap">
        <u-animate-container>
          <v-row :class="[ isMobile ? 'spacing2' : 'spacing6' ]">
            <v-col
              v-for="(item, index) in team"
              :key="index"
              md="4"
              cols="6"
            >
              <u-animate
                :offset="-10"
                :delay="(0.2 + (0.1 * index)) + 's'"
                name="fadeInUpShort"
                duration="0.3s"
              >
                <div>
                  <profile-card
                    :photo="item.photo"
                    :name="item.name"
                    :title="item.title"
                  />
                </div>
              </u-animate>
            </v-col>
          </v-row>
        </u-animate-container>
      </div>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import './team-style.scss';
</style>

<script>
import imgAPI from '~/static/images/imgAPI'
import ProfileCard from '../Cards/Profile'
import Title from '../Title'

const team = [
  {
    photo: imgAPI.architect[9],
    name: 'John Doe',
    title: 'chairman'
  },
  {
    photo: imgAPI.architect[10],
    name: 'jane Doe',
    title: 'Chief Executive Officer'
  },
  {
    photo: imgAPI.architect[11],
    name: 'James Doe',
    title: 'Chief Marketing Officer'
  },
  {
    photo: imgAPI.architect[12],
    name: 'Jihan Doe',
    title: 'Chief Operation Officer'
  },
  {
    photo: imgAPI.architect[13],
    name: 'Johan Doe',
    title: 'Senior Architect'
  },
  {
    photo: imgAPI.architect[14],
    name: 'Jena Doe',
    title: 'Senior Architect'
  }
]

export default {
  components: {
    'title-main': Title,
    ProfileCard
  },
  data: () => ({
    loaded: false,
    team: team,
    imgAPI: imgAPI
  }),
  mounted() {
    this.loaded = true
  },
  computed: {
    isDesktop() {
      const mdUp = this.$store.state.breakpoints.mdUp
      return mdUp.indexOf(this.$mq) > -1
    },
    isMobile() {
      const xsDown = this.$store.state.breakpoints.xsDown
      return xsDown.indexOf(this.$mq) > -1
    }
  }
}
</script>
