<template>
  <div id="note-news">
    <NoteNewsOneNote
      v-for="(item, key) in user.noteNews"
      :key="key"
      :onenote="item"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import NoteNewsOneNote from './NoteNewsOneNote';

export default {
  name: 'NoteNews',
  components: {
    NoteNewsOneNote,
  },
  computed: {
    ...mapGetters([
      'user',
    ]),
  },
};
</script>

<style
  lang="stylus"
        scoped>

</style>
