<template>
  <div id="full-sign-up-page">
    <div class="container-page">
      <FixedHigh />
      <div class="box-view_content">
        <FixedLeft />
        <router-view />
      </div>
    </div>
<!--    <div-->
<!--      style="min-width: 31.7%; min-height: 100%; position: fixed; right: 0"-->
<!--    >-->
<!--      <FastNoteMax />-->
<!--    </div>-->
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import FixedHigh from '../fixed_high/FixedHigh';
import FixedLeft from '../fixed_left/FixedLeft';
import FastNoteMax from './FastNoteMax';

export default {
  name: 'FullAccountPage',
  components: {
    FixedHigh,
    FixedLeft,
    FastNoteMax,
  },
  computed: {
    ...mapGetters([
      'user',
    ]),
  },
  beforeCreate() {
    if (this.$router.currentRoute.fullPath === '/') this.$router.replace(`/${this.$store.state.user.username}`);
  },
};
</script>

<style
  lang="stylus"
        scoped>
  #full-sign-up-page
    display flex
    justify-content: center
  .container-page
    max-width 1300px
    min-width 1300px
  .box-view_content
    display: flex

</style>
