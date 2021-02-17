<template>
  <div class="main-wrap">
    <contact-frm />
  </div>
</template>

<style lang="scss" scoped>
.main-wrap {
  position: relative;
  width: 100%;
  overflow: hidden;
  @include use-theme(
    background,
    $light-background-paper,
    $dark-background-default
  );
}
</style>

<script>
import brand from '~/static/text/brand'
import ContactFrm from '~/components/Forms/Contact'

export default {
  components: {
    ContactFrm
  },
  head() {
    return {
      title: brand.architect.name + ' - Contact'
    }
  }
}
</script>
