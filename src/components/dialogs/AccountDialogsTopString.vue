<template>
  <div id="account-messages__top-string">
    <div class="top-string">
      <v-spacer />
      <div class="top-string__something-interesting-box something-interesting-box">
        <v-spacer />
<!--        <div class="something-interesting-box__something-interesting">-->
<!--          <i class="fas fa-magic"></i>-->
<!--        </div>-->
      </div>
      <v-spacer />
      <div class="top-string__search-box search-box">
        <div class="search-box__input-box input-box">
          <input
            v-model="searchMessageInput"
            :placeholder="`Search in ${$router.currentRoute.fullPath
              === '/dialogs' ? 'dialogs' : 'messages'}...`"
            class="input-box__search-messages"
          >
        </div>
      </div>
      <v-spacer />
      <div class="top-string__items-box items-box">
        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <div
              class="items-box__unread-messages one-item-box"
              :class="{'background-active-item-true': showOnlyUnreadMessages}"
              v-on="on"
              @click="switchOnlyUnreadMessages"
            >
              <i class="far fa-envelope"></i>
            </div>
          </template>
          <span class="item-tooltip">Unread messages</span>
        </v-tooltip>
        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <div
              class="items-box__laid-down-messages one-item-box"
              :class="{'background-active-item-true': showOnlyLaidDownMessages}"
              v-on="on"
            >
              <i class="far fa-bookmark"></i>
            </div>
          </template>
          <span class="item-tooltip">Marked messages</span>
        </v-tooltip>
        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <div
              class="items-box__add-dialog one-item-box"
              v-on="on"
            >
              <i class="fas fa-plus"></i>
            </div>
          </template>
          <span class="item-tooltip">Add dialog</span>
        </v-tooltip>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'AccountMessagesTopString',
  data() {
    return {
      searchMessageInput: '',
      showOnlyUnreadMessages: false,
      showOnlyLaidDownMessages: false,
    };
  },
  computed: {
    ...mapGetters([
      'user',
    ]),
  },
  methods: {
    switchOnlyUnreadMessages() {
      this.showOnlyUnreadMessages = !this.showOnlyUnreadMessages;
      this.$emit('show-only-unread-mess', this.showOnlyUnreadMessages);
    },
  },
};
</script>

<style
  lang="stylus"
        scoped>
  @import url('https://fonts.googleapis.com/css?family=Lato');

  .top-string
    display flex
    justify-content space-around
    align-items center
    background-color: #ffba3b
  .top-string__search-box
    display flex
    background-color: #fe7c00
    color black
    padding 6px
    border 1px solid black
  .input-box__search-messages::placeholder
    color black
  .input-box__search-messages
    width 270px
    padding 0 5px
  .input-box__search-messages:not(:focus)
    transition 0.4s
  .input-box__search-messages:focus
    outline none
    transition 0.4s
    width 340px
  .top-string__items-box
    display flex
    font-size 30px
    padding 3px
  .one-item-box
    margin 0 7px
    padding 0 13px
    cursor pointer
  .one-item-box:hover
    background-color: #ffac21
  .item-tooltip
    background-color: #ffac21
    padding 8px
    color black
    font-family: 'Lato', sans-serif;
    font-weight bold
    letter-spacing 0.1px
  .background-active-item-true
    background-color: #ffac21
  @media (max-width: 1300px) {
    .top-string {
      width: 988px
    }
    .top-string__items-box {
      margin-right 30px
    }
  }
</style>
