<template>
  <div class="root">
    <div class="parallax-wrap">
      <dot-parallax />
    </div>
    <v-container>
      <div class="floating-title">
        <title-main
          :head="$t('architectLanding.project_title')"
          :desc="$t('architectLanding.project_desc')"
        />
      </div>
    </v-container>
    <div class="slider-wrap">
      <div class="carousel" v-if="loaded">
        <slick ref="slick" :options="slickOptions">
          <div class="props item-props-first">
            <div :style="{display: isDesktop ? 'block' : 'none'}" />
          </div>
          <div
            v-for="(item, index) in projectData"
            :key="index"
            class="item"
          >
            <general-card
              :img="item.img"
              :title="item.title"
              :desc="item.desc"
            />
          </div>
        </slick>
      </div>
      <v-btn
        icon
        fab
        class="nav prev"
        @click="prev()"
      >
        <i class="ion-ios-arrow-left" />
      </v-btn>
      <v-btn
        icon
        fab
        class="nav next"
        @click="next()"
      >
        <i class="ion-ios-arrow-right" />
      </v-btn>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './project-style.scss';
</style>

<script>
import imgAPI from '~/static/images/imgAPI'
import GeneralCard from '../Cards/General'
import Title from '../Title'
import DotParallax from '../Parallax/Dot'

const projectData = [
  {
    img: imgAPI.architect[1],
    title: 'Vivamus sit amet',
    desc:
      'Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat…'
  },
  {
    img: imgAPI.architect[2],
    title: 'Vivamus sit amet',
    desc:
      'Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat…'
  },
  {
    img: imgAPI.architect[3],
    title: 'Vivamus sit amet',
    desc:
      'Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat…'
  },
  {
    img: imgAPI.architect[1],
    title: 'Vivamus sit amet',
    desc:
      'Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat…'
  },
  {
    img: imgAPI.architect[2],
    title: 'Vivamus sit amet',
    desc:
      'Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat…'
  },
  {
    img: imgAPI.architect[3],
    title: 'Vivamus sit amet',
    desc:
      'Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat…'
  }
]

export default {
  components: {
    'title-main': Title,
    DotParallax,
    GeneralCard,
    Slick: () => import('vue-slick')
  },
  data() {
    return {
      imgAPI: imgAPI,
      loaded: false,
      projectData: projectData,
      slickOptions: {
        dots: false,
        infinite: false,
        speed: 500,
        autoplay: false,
        slidesToShow: 4,
        arrows: false,
        variableWidth: true,
        responsive: [
          {
            breakpoint: 1100,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      }
    }
  },
  mounted() {
    this.loaded = true
    setTimeout(() => {
      if (this.$vuetify.rtl) {
        const lastSlide = Math.floor(this.projectData.length - 2)
        this.$refs.slick.goTo(lastSlide)
      }
    }, 200)
  },
  computed: {
    isDesktop() {
      const mdUp = this.$store.state.breakpoints.mdUp
      return mdUp.indexOf(this.$mq) > -1
    }
  },
  methods: {
    next: function() {
      this.$refs.slick.next()
    },
    prev: function() {
      this.$refs.slick.prev()
    }
  }
}
</script>
