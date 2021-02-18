<template>
  <div class="root">
    <div class="decoration">
      <svg fill="#cccccc">
        <use xlink:href="/images/saas/deco-med-bg.svg#main" />
      </svg>
    </div>
    <v-container :class="{ fixed: isDesktop }">
      
             <title-main
        :head="$t('architectLanding.pricing_title')"
        :desc="$t('architectLanding.pricing_subtitle')"
      />
      </v-container>
      <v-container class="fixed-width">
      <v-row class="spacing8 grid">
        <v-col md="4" cols="12">
      <div class="pricing-wrap">
        <u-animate-container>
          <u-animate
            :offset="-10"
            name="fadeInUpShort"
            delay="0.2s"
            duration="0.4s"
            class="item"
          >
            <pricing-card
              :price="0"
              :feature-list="feature.basic"
              title="Podstawowa"
              desc="Interdum et malesuada fames ac ante ipsum primis in faucibus. "
              type="basic"
            />
          </u-animate>
          <u-animate
            :offset="-10"
            name="fadeInUpShort"
            delay="0.4s"
            duration="0.4s"
            class="item"
          >
            <pricing-card
              :price="600"
              :feature-list="feature.best"
              title="Najlepsza opcja"
              desc="Interdum et malesuada fames ac ante ipsum primis in faucibus. "
              type="value"
            />
          </u-animate>
          <u-animate
            :offset="-10"
            name="fadeInUpShort"
            delay="0.6s"
            duration="0.4s"
            class="item"
          >
            <pricing-card
              :price="54"
              :feature-list="feature.pro"
              title="Pro"
              desc="Interdum et malesuada fames ac ante ipsum primis in faucibus. "
            />
          </u-animate>
          <u-animate
            :offset="-10"
            name="fadeInUpShort"
            delay="0.8s"
            duration="0.4s"
            class="item"
          >
            <pricing-card
              :price="99"
              :feature-list="feature.enterprise"
              title="Premium"
              desc=" Interdum et malesuada fames ac ante ipsum primis in faucibus. "
            />
          </u-animate>
        </u-animate-container>
      </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import './pricing-plan-style.scss';
</style>

<script>
import Title from '../Title'
import PricingCard from '../Cards/Pricing'

const featureList = {
  basic: [
    'Nam sollicitudin dignissim',
    'Cras convallis lacus',
    'Quisque ut metus'
  ],
  best: [
    '4 godziny',
    'Przyjazd po Pana Młodego',
    'Przejazd do Pani Młodej',
    'Przejazd do Kościoła lub Urzędu Stanu Cywilnego',
    'Przejazd na salę Weselną'
  ],
  pro: [
    'Nam sollicitudin dignissim',
    'Cras convallis lacus',
    'Nulla lobortis nunc',
    'Vitae scelerisque',
    'Duis sed augue'
  ],
  enterprise: [
    'Nam sollicitudin dignissim',
    'Pellentesque ac bibendum ',
    'Vestibulum consequat',
    'Donec commodo',
    'Duis tristique metus'
  ]
}

export default {
  components: {
    'title-main': Title,
    PricingCard
  },
  data() {
    return {
      feature: featureList
    }
  },
  computed: {
    isDesktop() {
      const lgUp = this.$store.state.breakpoints.lgUp
      return lgUp.indexOf(this.$mq) > -1
    }
  }
}
</script>
