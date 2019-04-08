<template>
  <div id="fixed-left_user-box">
    <div class="fixed-left__profile-box profile-box">
      <div class="profile-box__avatar-box avatar-box">
        <div
          :style="{'background-image': `url(${user.avatar})`}"
          class="avatar-box__avatar"
        ></div>
      </div>
      <div class="profile-box__title-box title-box">
        <div class="title-box__header-box header-box">
          <div
            class="header-box__header"
            @click="$router.push(`/${user.username}`)"
          >
            {{ user.firstName }} {{ user.lastName }}
          </div>
        </div>
        <div class="title-box__subheader-box subheader-box">
          <div
            class="subheader-box__subheader"
            @click="$router.push(`/${user.username}`)"
          >
            {{ user.username }}
          </div>
        </div>
      </div>
      <div class="profile-box__small-menu-switcher-box small-menu-switcher-box">
        <button
          class="small-menu-switcher-box__small-menu-switcher small-menu-switcher"
          @focus="showProfileBoxSmallMenu = true"
          @blur="showProfileBoxSmallMenu = false"
        >
          <i class="fas fa-ellipsis-v"></i>
        </button>
      </div>
      <div
        v-if="showProfileBoxSmallMenu"
        class="profile-box__small-menu-box small-menu-box"
      >
        <div class="small-menu-box__small-menu_list small-menu_list">
          <div
            v-for="(items, key) in smallManuList"
            :key="key"
            class="small-menu_list__one-item one-item"
          >
            {{ items.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'FixedLeftUserBox',
  data() {
    return {
      showProfileBoxSmallMenu: false,
      smallManuList: [
        {
          name: 'Edit profile',
          path: '',
        },
        {
          name: 'Change status',
          path: '',
        },
        {
          name: 'Settings',
          path: '',
        },
      ],
    };
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
  .fixed-left__profile-box
    display flex
    padding 15px 5px 15px 15px
  /*.profile-box__avatar-box*/
  /*  margin-right 15px*/
  .avatar-box__avatar
    background center center/cover no-repeat grey
    border-radius 50%
    width 60px
    height 60px
  .profile-box__title-box
    font-family: 'Rubik', sans-serif;
    //font-family: 'Roboto Condensed', sans-serif;
    margin 0 15px
    letter-spacing -0.3px
    display flex
    flex-direction column
    justify-content center
    width 100%
  .title-box__header-box
    display flex
    /*justify-content center*/
  .header-box__header
    cursor pointer
    font-size 20px
    font-weight bold
    line-height 20px
  .title-box__subheader-box
    display flex
  .subheader-box__subheader
    cursor pointer
  .small-menu-switcher-box__small-menu-switcher
    height 25px
    width 25px
    border-radius 50%
    display flex
    justify-content center
    align-items center
  .small-menu-switcher-box__small-menu-switcher:focus
    outline none
  .small-menu-switcher-box__small-menu-switcher:not(:active)
    transition 0.6s
  .small-menu-switcher-box__small-menu-switcher:active
    background-color #ff6f09
    transition 0.2s
  .profile-box__small-menu-box
    position fixed
    background-color #ffb351
    left 280px
    //left 297px
    user-select none
    -moz-user-select none
    -ms-user-select none
    -webkit-user-select none
  .small-menu_list__one-item
    cursor pointer
    line-height 15px
    padding 7px 12px 7px 8px
  .small-menu_list__one-item:hover
    transition 0.2s
    background-color #ff9a27
  .small-menu_list__one-item:not(:hover)
    transition 0.8s
</style>
