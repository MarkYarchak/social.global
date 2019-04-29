<template>
  <div id="account-messages-list">
    <div class="messages__list">
      <template v-if="user.dialogs.length">
        <OneAccountMessage
          v-for="(dio, key) in user.dialogs"
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
import OneAccountMessage from './OneAccountMessage';

export default {
  name: 'AccountMessagesList',
  components: {
    OneAccountMessage,
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
  #account-messages-list
    padding 15px
  .empty-list-box
    display flex
    flex-grow 1
    justify-content center
    align-items center
</style>
