<template>
  <div id="main-profile-header">
    <div class="main-profile-header">
      <MainProfileTopMenu />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import MainProfileTopMenu from './MainProfileTopMenu';

export default {
  name: 'MainProfileHeader',
  components: {
    MainProfileTopMenu,
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
