<template>
  <div id="main-profile_top-menu">
    <div class="main-profile_top-menu animated slideInDown">
      <router-link
        v-for="(item, key) in topIcons"
        :key="key"
        :to="item.path"
        exact
        active-class="active"
        tag="div"
        class="main-profile_top-menu__one-icon-box one-icon-box"
      >
        <div class="one-icon-box__one-icon">
          <i :class="item.icon"></i>
        </div>
        <div class="one-icon-box__text">
          {{ item.text }}
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainProfileTopMenu',
  data() {
    return {
      topIcons: [
        {
          icon: 'fas fa-user fa-lg',
          text: 'Profile',
          path: '',
        },
        {
          icon: 'fas fa-sticky-note fa-lg',
          text: 'Public notes',
          path: '',
        },
        {
          icon: 'fas fa-user-friends fa-lg',
          text: 'Friends',
          path: '',
        },
        {
          icon: 'fas fa-music fa-lg',
          text: 'Liked music',
          path: '',
        },
        {
          icon: 'fas fa-users fa-lg',
          text: 'Groups',
          path: '',
        },
      ],
    };
  },
};
</script>

<style
  lang="stylus"
        scoped>
  #main-profile_top-menu
    display flex
    /*margin 0 0 0 5px*/
  .main-profile_top-menu
    display flex
    justify-content space-around
    align-items center
    width 100%
    height: 60px
    background-color: #FE8C00
    //background linear-gradient(to bottom, #64C8BD, #094A6F)
    /*box-shadow 1px 0.5px 5px 0.2px grey*/
  .main-profile_top-menu__one-icon-box:not(:hover)
    transition 0.6s
  .main-profile_top-menu__one-icon-box:hover
    transition 0.2s
    background-color: yellow
  .main-profile_top-menu__one-icon-box
    padding 7px
    border-radius 5px
    display flex
    justify-content center
    flex-direction column
    align-items center
    cursor pointer
  .one-icon-box__one-icon
    display flex
    justify-content center
  .one-icon-box__text
    font-weight bold
    padding-top 4px
</style>
