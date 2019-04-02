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
import FixedHigh from '../fixed_high/FixedHigh';
import FixedLeft from '../fixed_left/FixedLeft';

export default {
  name: 'FullSignUpPage',
  components: {
    FixedHigh,
    FixedLeft,
  },
  // beforeCreate() {
  //   this.$router.push('/profile');
  // },
};
</script>

<style
  lang="stylus"
        scoped>
  .box-view_content
    margin-left 320px
</style>
