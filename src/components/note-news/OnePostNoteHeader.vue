<template>
  <div id="one-post_note-header">
    <div class="one-post_note-header">
      <div class="note-header__user-box">
        <div class="note-header__avatar-box avatar-box">
          <div
            :style="{'background-image': `url(${onenote.author.avatar})`}"
            class="avatar-box__avatar"
          ></div>
        </div>
        <div class="note-header__title-box title-box">
          <div class="title-box__main-name-box main-name-box">
            <div class="main-name-box__main-name">
              {{ onenote.author.firstName }} {{ onenote.author.lastName }}
            </div>
          </div>
          <div class="title-box__username-box username-box">
            <div class="username-box__username">
              {{ onenote.author.username }}
            </div>
          </div>
        </div>
      </div>
      <div class="note-header__date-box date-box">
        <div class="date-box__time-ago-box time-ago-box">
          <div class="time-ago-box__time-ago">
            {{ postDateAgo }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment';

// const sendEmail = require('../../../node_requires/sendToEmail');

export default {
  name: 'OnePostNoteHeader',
  props: {
    onenote: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    postDateAgo() {
      return moment(this.onenote.createDate).fromNow();
    },
  },
};
</script>

<style
  lang="stylus"
        scoped>
  @import url('https://fonts.googleapis.com/css?family=Roboto+Condensed|Rubik');
  #one-post_note-header
    padding 10px 15px 7px 7px
  .one-post_note-header
    display flex
    justify-content space-between
  .note-header__user-box
    display flex
  .main-name-box__main-name
    font-weight bold
    font-size 21px
    line-height 25px
  .username-box__username
    font-size 16px
    line-height 16px
  .avatar-box__avatar
    width 50px
    height 50px
    background center center/cover no-repeat grey
    border-radius 50%
  .note-header__title-box
    display flex
    flex-direction column
    justify-content center
    padding 0 12px
    font-family: 'Rubik', sans-serif;
</style>
