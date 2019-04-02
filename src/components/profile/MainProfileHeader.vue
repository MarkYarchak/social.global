<template>
  <div id="main-profile-header">
    <div class="main-profile-header">
      <div class="main-profile-header__main-photo-box main-photo-box">
        <div
          :style="{'background-image': `url(${user.avatar})`}"
          class="main-photo-box__main-photo"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'MainProfileHeader',
  computed: {
    ...mapGetters([
      'user',
    ]),
  },
};
</script>

<style
  lang="stylus"
        scoped>
  #main-profile-header
    padding 20px
  .main-photo-box__main-photo
    width 300px
    height 370px
    background center center/cover no-repeat coral
</style>
