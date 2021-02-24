<template>
  <div>
    <div class="main-wrap">
      <header-main />
      <div class="container-wrap">
        <section id="home">
          <video-banner />
        </section>
        <section id="services" class="space-top-short">
          <services />
        </section>
        <section id="project" :class="[isMobile ? 'space-top-short' : 'space-top']">
          <project />
        </section>
        <section id="featured" :class="[isMobile ? 'space-top-short' : 'space-top']">
          <featured />
        </section>
        <section id="about">
          <div :class="[isTablet ? 'space-top-short' : 'space-top']">
            <about />
          </div>
     
          <div>
            <counter />
          </div>
        </section>
        <section id="pricing" class="space-top">
          <pricing-plan />
        </section>
        <section id="faq" class="space-top-short">
          <faq />
        </section> 
        <div id="blog" class="space-top-short">
          <blog />
        </div>
        <section id="subscribe" class="space-top-short">
          <subscribe-form />
        </section>
        <footer-main />
      </div>
      <hidden point="mdDown">
        <page-nav />
      </hidden>
      <hidden point="mdDown">
        <notification />
      </hidden>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '~/assets/styles';

@function section-margin($margin) {
  @return $margin * 20;
}
.main-wrap {
  position: relative;
  width: 100%;
  overflow: hidden;
  .theme--dark & {
    background-color: $dark-background-default;
  }
  .theme--light & {
    background-color: $light-background-paper;
  }
}
.space-bottom {
  padding-bottom: section-margin($spacing1);
  @include breakpoints-down(md) {
    padding-bottom: section-margin(6px);
  }
}
.space-bottom-short {
  padding-bottom: section-margin($spacing1 / 2);
}
.space-top {
  padding-top: section-margin($spacing1);
  @include breakpoints-down(md) {
    padding-top: section-margin(6px);
  }
}
.space-top-short {
  padding-top: section-margin($spacing1 / 2);
}
.container-wrap {
  > section {
    position: relative;
  } 
}
</style>

<script>
import Header from '~/components/Header'
import VideoBanner from '~/components/VideoBanner'
import Services from '~/components/Services'
import Project from '~/components/Project'
import Featured from '~/components/Featured'
import About from '~/components/About'
import PricingPlan from '~/components/PricingPlan'
import Faq from '~/components/Faq' 
import Counter from '~/components/Counter'
import Blog from '~/components/Blog'
import SubscribeForm from '~/components/SubscribeForm'
import Footer from '~/components/Footer'
import Hidden from '~/components/Hidden'
import PageNav from '~/components/PageNav'
import Notification from '~/components/Notification'
import brand from '~/static/text/brand'

export default {
  components: {
    'header-main': Header,
    VideoBanner,
    Services,
    Project,
    Featured,
    About,
    PricingPlan,
    Faq, 
    Counter,
    Blog,
    SubscribeForm,
    'footer-main': Footer,
    PageNav,
    Hidden,
    Notification
  },
  head() {
    return {
      title: brand.architect.name + ' - samochód do Ślubu'
    }
  },
  computed: {
    isTablet() {
      const mdDown = this.$store.state.breakpoints.mdDown
      return mdDown.indexOf(this.$mq) > -1
    },
    isMobile() {
      const xsDown = this.$store.state.breakpoints.xsDown
      return xsDown.indexOf(this.$mq) > -1
    }
  }
}
</script>
