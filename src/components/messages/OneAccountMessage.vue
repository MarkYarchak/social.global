<template>
  <div id="one-account-message">
    <div class="one-account-message">
      <div class="one-account-message__avatar-box avatar-box">
        <div
          class="avatar-box__avatar"
          :style="{'background-image': `url(${dialog.author.avatar})`}"
        ></div>
      </div>
      <div class="one-account-message__title-box">
        <div class="title-box__username-box username-box">
          <div class="username-box__username">
            {{ dialog.author.username }}
          </div>
        </div>
        <div class="title-box__comment-box">
          <div class="comment-box__comment">
            {{ dialog.messages[1].text }}
          </div>
        </div>
      </div>
      <div class="one-account-message__count-inf"></div>
      <div class="one-account-message__slide-more"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OneAccountMessage',
  props: {
    dialog: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style
  lang="stylus"
        scoped>
  #one-account-message
    display flex
  .one-account-message
    display flex
  .avatar-box__avatar
    background center center/cover no-repeat yellow
</style>
