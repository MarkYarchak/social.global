<template>
  <div id="fast-note-max">
    <div class="fast-note-box">
      <div class="fast-note-box__note-title-box note-title-box">
        <div class="note-title-box__note-title">
          <label
            for="fast-note"
            class="label_fast-note"
          ><i class="fas fa-rocket"></i> Fast note</label>
        </div>
        <div class="note-title-box__buttons-box">
          <button>Send</button>
        </div>
      </div>
      <div class="fast-note-box__fast-note-window fast-note-window">
        <div class="fast-note-window__fast-note">
          <textarea
            id="fast-note"
            v-model="fastNote"
          ></textarea>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FixedLeftFastNote',
  data() {
    return {
      fastNote: '',
    };
  },
};
</script>

<style
  lang="stylus"
        scoped>
  #fast-note-max
    display flex
    justify-content center
    margin-top 10px
    min-width 100%
    min-height 100%
  .fast-note-box
    min-width 100%
    min-height 100%
    border-radius 10px
  .fast-note-box__note-title-box
    display flex
    justify-content space-between
  .note-title-box__note-title
    font-weight bold
    flex-flow 1
  .label_fast-note
    margin 0
    min-width 100%
    padding 5px 0 5px 15px
    font-size 26px
  #fast-note:focus
    outline none
  #fast-note
    border 1px dotted red
    resize none
    overflow hidden
    padding 0 10px
</style>
