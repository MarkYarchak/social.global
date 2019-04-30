<template>
  <div id="account-dialogs">
    <AccountDialogsTopString
      @show-only-unread-mess="switchOnlyUnreadMessages"
    />
    <AccountDialogsList
      :showonlyunread="showOnlyUnreadMessages"
    />
  </div>
</template>

<script>
import AccountDialogsTopString from './AccountDialogsTopString';
import AccountDialogsList from './AccountDialogsList';

export default {
  name: 'AccountDialogs',
  components: {
    AccountDialogsTopString,
    AccountDialogsList,
  },
  data() {
    return {
      showOnlyUnreadMessages: false,
    };
  },
  methods: {
    switchOnlyUnreadMessages(showOnlyUnread) {
      this.showOnlyUnreadMessages = showOnlyUnread;
    },
  },
};
</script>

<style
  lang="stylus"
        scoped>
  #account-dialogs
    // background-color: #fff
</style>
