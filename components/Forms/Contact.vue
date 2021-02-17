<template>
  <div class="page-wrap">
    <hidden point="mdDown">
      <div class="bg-deco" />
    </hidden>
    <div class="parallax">
      <cross-parallax />
    </div>
    <v-snackbar
      :timeout="4000"
      top
      right
      v-model="snackbar"
      class="notification"
    >
      <div class="action">
        Message Sent
      </div>
      <v-btn
        text
        icon
        @click="snackbar = false"
      >
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-snackbar>
    <hidden point="mdUp">
      <div class="logo logo-header">
        <nuxt-link :to="routeLink.architect.home">
          <img :src="logo" alt="logo">
          <span class="use-text-title">
            {{ brand.architect.projectName }}
          </span>
        </nuxt-link>
      </div>
    </hidden>
    <v-container class="max-lg inner-wrap">
      <v-btn
        :href="routeLink.architect.home"
        icon
        class="backtohome"
      >
        <i class="ion-ios-home-outline" />
        <i class="ion-ios-arrow-thin-left" />
      </v-btn>
      <v-row>
        <v-col lg="1" cols="12" class="hidden-xs-only">&nbsp;</v-col>
        <v-col lg="5" cols="12" class="wrap-deco">
          <hidden point="mdDown">
            <div class="frm-deco" />
          </hidden>
          <v-card class="form-box fragment-fadeUp">
            <div class="full-form-wrap">
              <div class="form">
                <title-main
                  :desc="$t('common.contact_subtitle')"
                  head="Contact Us"
                />
                <v-form
                  ref="form"
                  v-model="valid"
                >
                  <v-row class="spacing6">
                    <v-col cols="12" sm="12" class="px-6">
                      <v-text-field
                        v-model="name"
                        :rules="nameRules"
                        :label="$t('common.form_name')"
                        required
                      />
                    </v-col>
                    <v-col cols="12" sm="12" class="px-6">
                      <v-text-field
                        v-model="email"
                        :rules="emailRules"
                        :label="$t('common.form_email')"
                        required
                      />
                    </v-col>
                    <v-col cols="12" sm="12" class="px-6">
                      <v-text-field
                        v-model="phone"
                        :label="$t('common.form_phone')"
                      />
                    </v-col>
                    <v-col cols="12" class="px-6">
                      <v-textarea
                        v-model="message"
                        rows="6"
                        :label="$t('common.form_message')"
                      />
                    </v-col>
                  </v-row>
                  <div class="form-control-label">
                    <v-checkbox
                      v-model="checkbox"
                      color="secondary"
                      :rules="[v => !!v || 'You must agree to continue!']"
                      :label="$t('common.form_terms')"
                      required
                    />
                    <span>
                      <a href="#" class="link">
                        {{ $t('common.form_privacy') }}
                      </a>
                    </span>
                  </div>
                  <div class="btn-area">
                    <v-btn
                      :block="isMobile"
                      large
                      color="primary"
                      @click="validate"
                    >
                      {{ $t('common.form_send') }}
                      <v-icon class="right-icon">mdi-send</v-icon>
                    </v-btn>
                  </div>
                </v-form>
              </div>
            </div>
          </v-card>
        </v-col>
        <v-col lg="6" cols="12">
          <hidden point="mdDown">
            <v-card class="map" raised>
              <GMap
                ref="gMap"
                :center="{lat: locations[0].lat, lng: locations[0].lng}"
                :options="{fullscreenControl: false}"
                :zoom="6"
              >
                <GMapMarker
                  ref="gMarker"
                  v-for="location in locations"
                  :key="location.id"
                  :position="{lat: location.lat, lng: location.lng}"
                >
                  <GMapInfoWindow>
                    <div class="bubel">
                      <h6 class="title pb-2 px-3">
                        Head Quarter
                      </h6>
                      <v-row class="ma-3">
                        <v-col item sm="6" cols="12" class="pa-0">
                          <p>
                            <v-icon class="icon">mdi-phone</v-icon>
                            +98 765 432 10
                          </p>
                        </v-col>
                        <v-col item sm="6" cols="12" class="pa-0">
                          <p>
                            <v-icon class="icon">mdi-email</v-icon>
                            hello@luxi.com
                          </p>
                        </v-col>
                        <v-col item sm="12" cols="12" class="pa-0">
                          <p>
                            <v-icon class="icon">mdi-map-marker</v-icon>
                            Lorem ipsum street Block C - Vestibullum Building
                          </p>
                        </v-col>
                      </v-row>
                    </div>
                  </GMapInfoWindow>
                </GMapMarker>
              </GMap>
            </v-card>
          </hidden>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import './form-style.scss';
</style>

<script>
import logo from '~/static/images/architect-logo.svg'
import brand from '~/static/text/brand'
import routeLink from '~/static/text/link'
import Title from '../Title'
import CrossParallax from '../Parallax/Cross'
import Hidden from '../Hidden'

export default {
  components: {
    'title-main': Title,
    CrossParallax,
    Hidden
  },
  data: () => ({
    currentLocation: {},
    locations: [
      {
        lat: 44.933076,
        lng: 15.629058
      }
    ],
    logo: logo,
    brand: brand,
    routeLink: routeLink,
    valid: true,
    snackbar: false,
    name: '',
    nameRules: [v => !!v || 'Name is required'],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
    ],
    phone: '',
    company: '',
    message: '',
    checkbox: false
  }),
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true
      }
    }
  },
  computed: {
    isMobile() {
      const smDown = this.$store.state.breakpoints.smDown
      return smDown.indexOf(this.$mq) > -1
    }
  }
}
</script>
