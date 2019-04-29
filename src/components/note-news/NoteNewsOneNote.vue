<template>
  <div id="note-news_one-note">
    <div class="note-news__one-post-note one-post-note">
      <div class="one-post-note__post-data">
        <OnePostNoteHeader :onenote="onenote" />
        <OnePostNoteContent :onenote="onenote" />
        <OnePostNoteFooter :onenote="onenote" />
      </div>
      <OnePostNoteRightPanel :onenote="onenote" />
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
    box-shadow inset 0 0 40px 0 #c9c9c9
    border 1px solid #dbd2b9
    border-radius 15px
    background-color: #f8f8f8
    display flex
  .one-post-note__post-data
    flex-grow 1
    display flex
    flex-direction column
    justify-content space-between
</style>
