<template>
  <div id="one-dialog-items">
    <v-snackbar
      v-model="snackbar"
      :bottom="y === 'bottom'"
      :left="x === 'left'"
      :multi-line="mode === 'multi-line'"
      :right="x === 'right'"
      :timeout="timeout"
      :top="y === 'top'"
      :vertical="mode === 'vertical'"
    >
      {{ text }}
      <v-btn
        color="red"
        flat
        class="no-outline-focus"
        @click="snackbar = false"
      >
        Delete
      </v-btn>
    </v-snackbar>
    <div class="one-dialog-items">
      <div class="one-dialog-items__fast-answer-box fast-answer-box">
        <div class="fast-answer-box__avatar-box">
          <div
            :style="{'background-image': `url(${user.avatar})`}"
            class="avatar-box__avatar"
          ></div>
        </div>
        <div class="fast-answer-box__title-plus-fast-answer-box">
          <div class="title-plus-fast-answer-box__name-box name-box">
            <div class="name-box__name">
              <b>{{ user.firstName }} {{ user.lastName }}
                <i
                  class="fas fa-check-circle fa-sm"
                ></i> {{ user.username }}</b>
            </div>
          </div>
          <div class="title-plus-fast-answer-box__send-message-box">
            <div class="fast-answer-box__fast-answer fast-answer">
              <input
                type="text"
                class="fast-answer__input"
                placeholder="Fast answer..."
              >
            </div>
            <div class="fast-answer-box__bnt-send-box">
              <button
                class="bnt-send-box__bnt-send"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="one-dialog-items__some-items-box some-items-box">
        <div class="some-items-box__some-items">
          <v-btn
            class="no-outline-focus"
            outline
            fab
            color="red"
            small
            @click="snackbar = true"
          >
            <i class="fas fa-trash fa-lg"></i>
          </v-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'OneDialogItems',
  data() {
    return {
      snackbar: false,
      y: 'top',
      x: null,
      mode: '',
      timeout: 4500,
      text: 'Are you sure, delete this dialog?',
    };
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
  #one-dialog-items
    transition 0.4s
    display flex
    flex-grow 1
    padding 7px 5px 7px 13px
  .one-dialog-items
    display flex
    justify-content space-between
    flex-grow 1
  .one-dialog-items__fast-answer-box
    display flex
    align-items flex-end
  .fast-answer-box__avatar-box
    padding 0 5px
  .avatar-box__avatar
    width 50px
    height 50px
    background center center/cover no-repeat yellow
  .fast-answer-box__fast-answer
    padding 0 10px
  .fast-answer-box__title-plus-fast-answer-box
    display flex
    flex-direction column
    justify-content space-around
  .title-plus-fast-answer-box__send-message-box
    display flex
  .name-box__name
    font-size 16px
    line-height 16px
    padding 5px
    user-select none
    -webkit-user-select none
    -moz-user-select none
    -ms-user-select none
  .fast-answer__input
    border-bottom 2px solid transparent
    transition 0.7s
    width 400px
    color black
    border-bottom 2px solid #10490a
  .fast-answer__input:focus
    transition 0.7s
    outline none
  .fast-answer__input::placeholder
    color #494949
    user-select none
    -webkit-user-select none
    -moz-user-select none
    -ms-user-select none
  .bnt-send-box__bnt-send
    background-color: #10490a
    color white
    padding 4px 12px
    border-radius 10px
    user-select none
    -webkit-user-select none
    -moz-user-select none
    -ms-user-select none
  .bnt-send-box__bnt-send:not(:active)
    transition 0.8s
  .bnt-send-box__bnt-send:active
    box-shadow 0 0 15px 2px
  .bnt-send-box__bnt-send:focus
    outline none
  .one-dialog-items__some-items-box
    width 70px
  .some-items-box__some-items
    cursor pointer
    display flex
    flex-direction column
    align-items center
  .no-outline-focus:focus
    outline none
</style>
