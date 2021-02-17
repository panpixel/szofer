<template>
  <div class="root">
    <v-container class="max-md">
      <div id="watched_counter" />
      <div class="counter-wrap">
        <v-card class="paper">
          <v-row
            align="center"
            justify="center"
            class="spacing6"
          >
            <v-col md="4" class="pa-6">
              <div class="counter-item">
                <i class="ion-ios-people-outline" />
                <div class="text" v-if="loaded">
                  <h4 class="use-text-title">
                    <span
                      v-countUp:onWindowScroll.once="{
                        watchedElId: 'watched_counter',
                        startValue: 0,
                        endValue: 20,
                        options: { duration: 1 }
                      }"
                    />
                  </h4>
                  <h6 class="use-text-subtitle2">
                    {{ $t('architectLanding.counter_expert') }}
                  </h6>
                </div>
              </div>
            </v-col>
            <v-col md="4" class="pa-6">
              <div class="counter-item">
                <i class="ion-ios-briefcase-outline" />
                <div class="text" v-if="loaded">
                  <h4 class="use-text-title">
                    <span
                      v-countUp:onWindowScroll.once="{
                        watchedElId: 'watched_counter',
                        startValue: 0,
                        endValue: 123,
                        options: { duration: 1 }
                      }"
                    />
                  </h4>
                  <h6 class="use-text-subtitle2">
                    {{ $t('architectLanding.counter_completed') }}
                  </h6>
                </div>
              </div>
            </v-col>
            <v-col md="4" class="pa-6">
              <div class="counter-item">
                <i class="ion-ios-heart-outline" />
                <div class="text" v-if="loaded">
                  <h4 class="use-text-title">
                    <span
                      v-countUp:onWindowScroll.once="{
                        watchedElId: 'watched_counter',
                        startValue: 0,
                        endValue: 89,
                        options: { duration: 1 }
                      }"
                    />
                  </h4>
                  <h6 class="use-text-subtitle2">
                    {{ $t('architectLanding.counter_happy') }}
                  </h6>
                </div>
              </div>
            </v-col>
          </v-row>
        </v-card>
      </div>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import 'counter-style.scss';
</style>

<script>
export default {
  data() {
    return {
      loaded: false
    }
  },
  mounted() {
    this.loaded = true
  }
}
</script>
