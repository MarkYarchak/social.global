<template>
  <div id="account-messages">
    <AccountMessagesTopString />
    <AccountMessagesList />
  </div>
</template>

<script>
import AccountMessagesTopString from './AccountMessagesTopString';
import AccountMessagesList from './AccountMessagesList';

export default {
  name: 'AccountMessages',
  components: {
    AccountMessagesTopString,
    AccountMessagesList,
  },
};
</script>

<style
  lang="stylus"
        scoped>

</style>
