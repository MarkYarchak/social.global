<template>
  <div id="note-news_one-note">
    <div class="note-news__one-post-note one-post-note">
      <div class="one-post-note__post-data">
        <OnePostNoteHeader :onenote="onenote" />
        <OnePostNoteContent :onenote="onenote" />
        <OnePostNoteFooter :onenote="onenote" />
      </div>
      <OnePostNoteRightPanel :onenote="onenote" />
<!--      {{ onenote }}-->
<!--      <br>-->
<!--      <br>-->
<!--      <br>-->
<!--      <i class="far fa-square"></i><i class="fas fa-check"></i><i class="far fa-check-square"></i>-->
<!--      <div-->
<!--        @click="haah"-->
<!--      >-->
<!--        <i-->
<!--          class="far fa-square fa-3x"-->
<!--          style="color: black"-->
<!--        ></i>-->
<!--        <span-->
<!--          v-if="lol"-->
<!--        >-->
<!--          <i-->
<!--            class="fas fa-check fa-4x"-->
<!--            data-fa-transform="left-12 up-1"-->
<!--          ></i>-->
<!--        </span>-->
<!--      </div>-->
    </div>
  </div>
</template>

<script>
import OnePostNoteHeader from './OnePostNoteHeader';
import OnePostNoteContent from './OnePostNoteContent';
import OnePostNoteFooter from './OnePostNoteFooter';
import OnePostNoteRightPanel from './OnePostNoteRightPanel';

export default {
  name: 'NoteNewsOneNote',
  components: {
    OnePostNoteHeader,
    OnePostNoteContent,
    OnePostNoteFooter,
    OnePostNoteRightPanel,
  },
  props: {
    onenote: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      lol: false,
    };
  },
  methods: {
    haah() {
      this.lol = !this.lol;
    },
  },
};
</script>

<style
  lang="stylus"
        scoped>
  #note-news_one-note
    padding 10px 30px 10px 20px
  .fa-square
    color black
  .note-news__one-post-note
    /*border 2px solid black*/
    box-shadow 0 0 10px 0 grey
    border-radius 15px
    display flex
  .one-post-note__post-data
    padding 10px
    width 100%
</style>
