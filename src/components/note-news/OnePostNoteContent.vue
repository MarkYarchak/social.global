<template>
  <div id="one-post_note-content">
    <div class="one-post__note-content">
      <div
        v-if="onenote.image"
        :style="onenote.text ? false : 'justify-content: center; width: 100%'"
        class="note-content__image-box image-box"
      >
        <div
          class="image-box__image"
          :style="{'background-image': `url(${onenote.image})`}"
        ></div>
      </div>
      <div
        v-if="onenote.text"
        class="note-content__text-box text-box"
      >
        <div class="text-box__text">
          {{ onenote.text }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OnePostNoteContent',
  props: {
    onenote: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style
  lang="stylus"
        scoped>
  #one-post_note-content
    padding 15px
  .one-post__note-content
    display flex
  .image-box__image
    //border 2px solid rgba(26, 26, 26, 0.91)
    //box-shadow inset 0 0 10px 5px #bfbfbf
    height 400px
    width 400px
    background center center/cover no-repeat grey
  .note-content__image-box
    display flex
  .note-content__text-box
    margin 0 0 0 10px
    display flex
    flex-direction column
    justify-content center
  .text-box__text
    border-left: 2px solid grey
    border-right 2px solid grey
    padding 5px 10px
</style>
