<template>
  <div id="note-news_one-note">
    <div class="note-news__one-post-note one-post-note">
<!--      <OnePostNoteHeader />-->
<!--      <OnePostNoteContent />-->
<!--      <OnePostNote />-->
      {{ onenote }}
      <br>
      <br>
      <br>
      <i class="far fa-square"></i><i class="fas fa-check"></i><i class="far fa-check-square"></i>
      <div
        @click="haah"
      >
        <i
          class="far fa-square fa-3x"
          style="color: black"
        ></i>
        <span
          v-if="lol"
        >
          <i
            class="fas fa-check fa-4x"
            data-fa-transform="left-12 up-1"
          ></i>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NoteNewsOneNote',
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
  .fa-square
    color black
</style>
