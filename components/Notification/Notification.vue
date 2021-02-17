<template>
  <v-snackbar
    :timeout="-1"
    v-model="snackbar"
    class="notification"
  >
    <div class="action">
      {{ $t('common.notif_msg') }}
    </div>
    <v-btn
      color="secondary"
      class="button"
      @click="snackbar = false"
    >
      {{ $t('common.accept') }}
    </v-btn>
  </v-snackbar>
</template>

<style lang="scss" scoped>
@import './notification-style.scss';
</style>

<script>
import brand from '~/static/text/brand'

export default {
  data() {
    return {
      snackbar: true
    }
  }
}
</script>
