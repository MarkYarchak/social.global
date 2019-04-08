<template>
  <div id="main-profile_user-tab">
    <div class="main-profile_user-tab">
      <div class="user-tab__top-flat">
        <div class="main-profile-user-tab__main-photo-box main-photo-box">
          <div
            :style="{'background-image': `url(${user.avatar})`}"
            class="main-photo-box__main-photo"
          ></div>
        </div>
        <div class="user-tab__main-text-box main-text-box">
          <div class="main-text-box__title-box title-box">
            <div class="title-box__name-box name-box">
              <div class="name-box__name">
                {{ user.firstName }} {{ user.lastName }}
              </div>
            </div>
            <div class="title-box__username-box username-box">
              <div class="username-box__username">
                {{ user.username }}
              </div>
            </div>
          </div>
          <MainProfileCounts />
          <div class="main-text-box__black-screen"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import MainProfileCounts from './MainProfileCounts';

export default {
  name: 'MainProfileUserTab',
  components: {
    MainProfileCounts,
  },
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
  @import url('https://fonts.googleapis.com/css?family=Roboto+Condensed|Rubik');
  .user-tab__top-flat
    display flex
  .main-profile-user-tab__main-photo-box
    padding-right 50px
  .main-photo-box__main-photo
    width 300px
    height 370px
    background center center/cover no-repeat coral
    border-radius 5px
  .user-tab__main-text-box
    width 100%
  .main-text-box__black-screen
    display none
    position fixed
    width 100%
    height 100%
    background-color: rgba(0,0,0,0.27)
  .main-text-box__title-box
    font-family: 'Rubik', sans-serif;
    display flex
    justify-content center
    flex-direction column
    align-items center
  .name-box__name
    font-weight bold
    font-size 40px
    line-height 40px
  .username-box__username
    font-size 20px
</style>
