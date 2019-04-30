<template>
  <div id="account-dialogs-list">
    <div class="dialogs__list">
      <template v-if="user.dialogs.length">
        <OneAccountDialog
          v-for="(dio, key) in showDialogsList"
          :key="key"
          :dialog="dio"
        />
      </template>
      <div
        v-if="!user.dialogs.length"
        class="empty-list-box"
      >
        <b>Your dialogs list is empty</b>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import OneAccountDialog from './OneAccountDialog';

export default {
  name: 'AccountMessagesList',
  components: {
    OneAccountDialog,
  },
  props: {
    showonlyunread: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    ...mapGetters([
      'user',
    ]),
    showDialogsList() {
      const userDialogs = this.user.dialogs.concat();
      const filteredUserDialogs = userDialogs.filter(d => d.messages.some(m => m.state === 'sent' && m.author.id !== this.user.id));
      return this.showonlyunread ? filteredUserDialogs : this.user.dialogs;
    },
  },
};
</script>

<style
  lang="stylus"
        scoped>
  #account-dialogs-list
    padding 5px
  .empty-list-box
    display flex
    flex-grow 1
    justify-content center
    align-items center
</style>
