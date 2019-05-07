<template>
  <div id="one-account-dialog">
    <div class="one-account-dialog">
      <div class="dialog_left-part">
        <div class="one-account-dialog__avatar-box avatar-box">
          <div
            class="avatar-box__avatar"
            :style="{'background-image': `url(${dialog.interlocutor.avatar})`}"
          ></div>
        </div>
        <div class="one-account-dialog__title-box">
          <div class="title-box__name-box name-box">
            <div class="name-box__name">
              <b>{{ dialog.interlocutor.firstName }} {{ dialog.interlocutor.lastName }}
                <i
                  class="fas fa-check-circle fa-sm"
                ></i> {{ dialog.interlocutor.username }}</b>
            </div>
          </div>
          <div class="title-box__last-message-box">
            <div
              ref="dialogLastMessageText"
              :class="showOneDialogItems ?
                'last-message-box__last-message--full'
                : 'last-message-box__last-message'"
            >
              {{ dialog.messages[0].text }}
            </div>
          </div>
        </div>
      </div>
      <div class="dialog_right-part">
        <div class="one-account-dialog__count-inf count-inf">
          <div class="count-inf__time-box time-box">
            <div class="time-box__time">
              {{ getLastMessageCreateTime }}
            </div>
          </div>
          <div class="count-inf__unread-messages-box">
            <div
              v-if="unreadMessagesCounter !== 0"
              class="incoming-messages-box__unread-messages"
            >
              <span>+ {{ unreadMessagesCounter }}</span>
            </div>
          </div>
        </div>
        <div class="one-account-dialog__slide-more-box slide-more-box">
          <div
            class="slide-more-box__slide-more"
            @click="switchSlideMore"
          >
            <i
              :class="['fas fa-lg', !showOneDialogItems
                ? 'fa-chevron-down' : 'fa-chevron-up']"
            ></i>
          </div>
        </div>
      </div>
    </div>
    <OneDialogItems
      v-if="showOneDialogItems"
    />
  </div>
</template>

<script>
import moment from 'moment';
import { mapGetters } from 'vuex';
import OneDialogItems from './OneDialogItems';

export default {
  name: 'OneAccountMessage',
  components: {
    OneDialogItems,
  },
  props: {
    dialog: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      showOneDialogItems: false,
    };
  },
  computed: {
    getLastMessageCreateTime() {
      return moment(this.dialog.messages[0].createdDate).fromNow(true);
    },
    unreadMessagesCounter() {
      return this.dialog.messages.filter(m => m.state === 'sent' && m.author.id !== this.user.id).length;
    },
    ...mapGetters([
      'user',
    ]),
  },
  methods: {
    switchSlideMore() {
      this.showOneDialogItems = !this.showOneDialogItems;
    },
  },
};
</script>

<style
  lang="stylus"
        scoped>
  @import url('https://fonts.googleapis.com/css?family=Heebo|Noto+Sans+KR');
  #one-account-dialog
    border-bottom 1px solid #ffb329
  #one-account-dialog:hover
    background-color: #ffb329
    cursor pointer
  .one-account-dialog
    display flex
    padding 7px 5px 7px 13px
    flex-grow 1
    justify-content space-between
  .one-account-dialog:not(:hover)
    transition 0.1s
  .dialog_left-part
    display flex
    flex-grow 1
    max-width 822px
  .dialog_right-part
    display flex
  .one-account-dialog__avatar-box
    padding 0 5px
  .avatar-box__avatar
    width 50px
    height 50px
    background center center/cover no-repeat yellow
    // border-radius 50%
  .one-account-dialog__title-box
    display flex
    flex-direction column
    justify-content space-around
  .name-box__name
    font-size 16px
    line-height 16px
    padding 5px
  .title-box__last-message-box
    padding 0 10px
  .last-message-box__last-message
    white-space nowrap
    overflow hidden
    text-overflow: ellipsis;
    max-width 705px
    transition 0.7s
  .last-message-box__last-message--full
    transition 0.7s
  .one-account-dialog__count-inf
    display flex
    flex-direction column
    align-items center
    font-family: 'Noto Sans KR', sans-serif;
  .count-inf__time-box
    width 100px
    justify-content center
    display flex
    letter-spacing -0.2px
    user-select none
    -webkit-user-select none
    -moz-user-select none
    -ms-user-select none
  .count-inf__unread-messages-box
    width 100px
    display flex
    justify-content center
  .incoming-messages-box__unread-messages
    background linear-gradient(to bottom, #ffb329, orange)
    box-shadow 0 0 7px 3px white
    border-radius 10px
    /*background-color: #fe2f54*/
    color black
    padding 3px 7px
    margin 2px
    font-family: 'Heebo', sans-serif;
    font-weight bold
    user-select none
    -webkit-user-select none
    -moz-user-select none
    -ms-user-select none
  .one-account-dialog__slide-more-box
    flex-grow 1
    display flex
    justify-content center
    flex-direction column
    width 70px
    align-items center
    align-self flex-start
  .slide-more-box__slide-more
    cursor pointer
    width 45px
    height 45px
    display flex
    justify-content center
    align-items center
</style>
