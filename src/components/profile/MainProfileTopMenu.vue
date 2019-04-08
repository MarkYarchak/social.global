<template>
  <div id="main-profile_top-menu">
    <div class="menu-tabs">
      <v-tabs
        v-model="active"
        slider-color="none"
      >
        <v-tab
          v-for="(item, key) in topIcons"
          :key="key"
          class="main-profile_top-menu animated slideInDown"
        >
          <div class="main-profile_top-menu__one-icon-box one-icon-box">
            <div class="one-icon-box__one-icon">
              <i
                :class="item.icon"
                data-fa-transform="grow-5"
              ></i>
            </div>
            <div class="one-icon-box__text">
              {{ item.text }}
            </div>
          </div>
        </v-tab>
        <v-tab-item
          v-for="(item, key) in topIcons"
          :key="key"
        >
          <v-card flat>
            <div class="tab-view">
              <MainProfileUserTab v-if="item.text === 'Profile'" />
            </div>
          </v-card>
        </v-tab-item>
      </v-tabs>
    </div>
  </div>
</template>

<script>
import MainProfileUserTab from './MainProfileUserTab';

export default {
  name: 'MainProfileTopMenu',
  components: {
    MainProfileUserTab,
  },
  data() {
    return {
      active: null,
      topIcons: [
        {
          icon: 'fas fa-user fa-lg',
          text: 'Profile',
        },
        {
          icon: 'fas fa-sticky-note fa-lg',
          text: 'Public notes',
        },
        {
          icon: 'fas fa-user-friends fa-lg',
          text: 'Friends',
        },
        {
          icon: 'fas fa-music fa-lg',
          text: 'Noted music',
        },
        {
          icon: 'fas fa-users fa-lg',
          text: 'Noted groups',
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
  .menu-tabs
    width 100%
  .main-profile_top-menu
    display flex
    flex-direction column
    justify-content space-around
    align-items center
    width 100%
    background-color: #FE8C00
    //background linear-gradient(to bottom, #64C8BD, #094A6F)
    /*box-shadow 1px 0.5px 5px 0.2px grey*/
  .main-profile_top-menu__one-icon-box:not(:hover)
    transition 0.6s
  .main-profile_top-menu__one-icon-box:hover
    transition 0.2s
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
  .tab-view
    padding 20px
</style>
