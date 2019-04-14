<template>
  <div id="one-post_note-right-panel">
    <div class="one-post__note-right-panel">
      <div class="note-right-panel__menu-points-box menu-points-box">
        <div class="menu-points-box__menu-points">
          <i class="fas fa-ellipsis-h fa-2x"></i>
        </div>
      </div>
      <div class="note-right-panel__add-to-notes-box add-to-notes-box">
        <div class="add-to-notes-box__add-to-notes">
          <i class="fas fa-pen-square fa-3x"></i>
          <div class="add-to-notes__text">
            To my notes
          </div>
        </div>
      </div>
      <div class="note-right-panel__checking-box checking-box">
        <div
          class="checking-box__check-box"
          @click="checked = !checked"
        >
          <i
            v-if="!checked"
            class="far fa-square fa-3x"
          ></i>
          <i
            v-if="checked"
            class="far fa-check-square fa-3x"
          ></i>
          <div class="check-box__text">
            Tick of
          </div>
        </div>
      </div>
      <div class="note-right-panel__thumb-up-box thumb-up-box">
        <i class="fas fa-thumbs-up fa-2x"></i>
        <div class="thumb-up-box__thumb-up-text">
          {{ onenote.likes.length }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OnePostNoteRightPanel',
  props: {
    onenote: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      checked: false,
    };
  },
};
</script>

<style
  lang="stylus"
        scoped>
  #one-post_note-right-panel
    min-width 100px
    max-width 100px
    background-color: inherit
    border-radius 0 15px 15px 0
    border-left 2px groove black
    flex-grow 1
    display flex
    flex-direction column
  .one-post__note-right-panel
    font-weight bold
    justify-content space-between
    flex-grow 1
    display flex
    flex-direction column
    align-items center
  .note-right-panel__menu-points-box
    margin-top 10px
  .note-right-panel__checking-box
    text-align center
  .note-right-panel__add-to-notes-box
    text-align center
  .thumb-up-box__thumb-up-text
    text-align center
</style>
