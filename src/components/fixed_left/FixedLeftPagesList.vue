<template>
  <div id="fixed-left_pages-list">
    <div class="pages-list-box">
      <div
        v-for="(pageLink, key) in pagesList"
        :key="key"
        class="pages-list-box__pages-list pages-list"
      >
        <div class="pages-list__one-page-link-box one-page-link-box">
          <router-link
            tag="div"
            :to="pageLink.path"
            class="one-page-link-box__one-page-link one-page-link"
          >
            <div class="one-page-link__icon-box">
              <i :class="pageLink.icon"></i>
            </div>
            {{ pageLink.name }}
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FixedLeftPagesList',
  data() {
    return {
      showProfileBoxSmallMenu: false,
      pagesList: [
        {
          name: 'My friends',
          icon: 'fas fa-user-friends',
          path: '/friends',
        },
        {
          name: 'My dialogs',
          icon: 'fas fa-envelope',
          path: '/dialogs',
        },
        {
          name: 'My notes',
          icon: 'fas fa-sticky-note',
          path: '/notes',
        },
        {
          name: 'My music',
          icon: 'fas fa-music',
          path: '/music',
        },
        {
          name: 'Groups',
          icon: 'fas fa-users',
          path: '/groups',
        },
        {
          name: 'Notifications',
          icon: 'fas fa-bell',
          path: '/notifications',
        },
        {
          name: 'Note-news',
          icon: 'fas fa-newspaper', // 'fas fa-th-list',
          path: '/note-news',
        },
        {
          name: 'Settings',
          icon: 'fas fa-wrench',
          path: '/settings',
        },
        {
          name: 'Help',
          icon: 'fas fa-question-circle',
          path: '/help',
        },
      ],
    };
  },
};
</script>

<style
  lang="stylus"
        scoped>
  .pages-list-box__pages-list
    display flex
    justify-content center
    mrgin 2px 0
  .pages-list__one-page-link-box
    width 130px
    display flex
    margin 0 0 2px 0
    user-select none
    -moz-user-select none
    -ms-user-select none
    -webkit-user-select none
  .one-page-link-box__one-page-link:not(:hover)
    transition 0.6s
  .one-page-link-box__one-page-link:hover
    transition 0.2s
    background-color: orange
  .one-page-link-box__one-page-link
    display flex
    cursor pointer
    border-radius 10px
    padding 3px 5px
    /*font-size 15px*/
  .one-page-link__icon-box
    width 25px
    display flex
    justify-content center
    align-items center
</style>
