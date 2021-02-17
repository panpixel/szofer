<template>
  <div class="root">
    <v-container>
      <title-main
        :head="$t('architectLanding.services_title')"
        :desc="$t('architectLanding.services_desc')"
      />
    </v-container>
    <v-container class="fixed-width">
      <v-row class="spacing8 grid">
        <v-col md="4" cols="12">
          <div class="figure">
            <svg class="fill">
              <use xlink:href="/images/architect/services-fill-1.svg#main" />
            </svg>
            <svg class="outline">
              <use xlink:href="/images/architect/services-outline-1.svg#main" />
            </svg>
          </div>
          <h5 class="use-text-subtitle2">
            {{ $t('architectLanding.services_item1') }}
          </h5>
          <p class="use-text-paragraph">
            {{ $t('architectLanding.services_itemdesc1') }}
          </p>
        </v-col>
        <v-col md="4" cols="12">
          <div class="figure">
            <svg class="fill">
              <use xlink:href="/images/architect/services-fill-2.svg#main" />
            </svg>
            <svg class="outline">
              <use xlink:href="/images/architect/services-outline-2.svg#main" />
            </svg>
          </div>
          <h5 class="use-text-subtitle2">
            {{ $t('architectLanding.services_item2') }}
          </h5>
          <p class="use-text-paragraph">
            {{ $t('architectLanding.services_itemdesc2') }}
          </p>
        </v-col>
        <v-col md="4" cols="12">
          <div class="figure">
            <svg class="fill">
              <use xlink:href="/images/architect/services-fill-3.svg#main" />
            </svg>
            <svg class="outline">
              <use xlink:href="/images/architect/services-outline-3.svg#main" />
            </svg>
          </div>
          <h5 class="use-text-subtitle2">
            {{ $t('architectLanding.services_item3') }}
          </h5>
          <p class="use-text-paragraph">
            {{ $t('architectLanding.services_itemdesc3') }}
          </p>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import './services-style.scss';
</style>

<script>
import Title from '../Title'

export default {
  components: {
    'title-main': Title
  }
}
</script>
