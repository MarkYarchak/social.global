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
          <i class="fas fa-plus-square fa-3x"></i>
          <div class="add-to-notes__text">
            To my notes
          </div>
        </div>
      </div>
      <div class="note-right-panel__checking-box checking-box">
        <div
          class="checking-box__check-box"
          @click="tickOf"
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
  methods: {
    tickOf() {
      this.checked = !this.checked;
    },
  },
};
</script>

<style
  lang="stylus"
        scoped>
  /*#one-post_note-right-panel:not(:hover)*/
  /*  transition 1s*/
  /*#one-post_note-right-panel:hover*/
  /*  transition 1s*/
  #one-post_note-right-panel
    min-width 100px
    max-width 100px
    padding 10px 0
    /*background-color: orange*/
    border-radius 0 15px 15px 0
    /*box-shadow inset 0 0 756px 1px #eaeaea*/
    border-left 1px solid #c4c4ff
    /*border-left 4px solid #5168ff*/
    /*border 4px solid #9fa3ff*/
    /*box-shadow inset 0 0 7px 1px #d2d2d2*/
    flex-grow 1
    display flex
    flex-direction column
    user-select none
    -ms-user-select none
    -moz-user-select none
    -webkit-user-select none
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
  .checking-box__check-box
    cursor pointer
  .note-right-panel__add-to-notes-box
    text-align center
  .thumb-up-box__thumb-up-text
    text-align center
    margin-bottom 10px
</style>
