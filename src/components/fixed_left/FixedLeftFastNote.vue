<template>
  <div id="fixed-left_fast-note">
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
  #fixed-left_fast-note
    display flex
    justify-content center
    margin-top 10px
  .fast-note-box
    width 264px
    height 230px
    background-color rgba(255,165,0,0.56)
    border-radius 10px
  .fast-note-box__note-title-box
    display flex
    justify-content space-between
  .note-title-box__note-title
    font-weight bold
    flex-flow 1
  .label_fast-note
    margin 0
    width 100%
    padding 5px 0 5px 15px
  #fast-note:focus
    outline none
  #fast-note
    width 264px
    height 200px
    resize none
    overflow hidden
    padding 0 10px
</style>
