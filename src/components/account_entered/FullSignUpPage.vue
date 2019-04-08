<template>
  <div id="full-sign-up-page">
    <FixedLeft />
    <FixedHigh />
    <div class="box-view_content">
      <router-view />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import FixedHigh from '../fixed_high/FixedHigh';
import FixedLeft from '../fixed_left/FixedLeft';

export default {
  name: 'FullSignUpPage',
  components: {
    FixedHigh,
    FixedLeft,
  },
  computed: {
    ...mapGetters([
      'user',
    ]),
  },
  beforeCreate() {
    if (this.$router.currentRoute.fullPath === '/') this.$router.push(`/${this.$store.state.user.username}`);
  },
};
</script>

<style
  lang="stylus"
        scoped>
  .box-view_content
    margin-left 300px
</style>
