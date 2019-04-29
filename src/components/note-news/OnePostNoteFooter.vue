<template>
  <div id="one-post_note-footer">
    <div class="one-post__note-footer">
      <div class="note-footer__comments-box comments-box">
        <div class="comments-box__view-comments-box view-comments-box">
          <div class="view-comments-box__view-comments">
            View {{ onenote.comments.length }} {{ onenote.comments.length !== 1
              ? 'comments' : 'comment' }}
          </div>
        </div>
        <div class="note-footer__fast-comment-box fast-comment-box">
          <div class="fast-comment-box__fast-comment">
            <v-text-field
              ref="knlk"
              label="Fast comment..."
              color="primary"
            ></v-text-field>
          </div>
        </div>
      </div>
      <div class="note-footer__republish-box republish-box">
        <div class="republish-box__republish-length-box republish-length-box">
          <div class="republish-length-box__republish-length">
            Re-published: {{ onenote.republish.length }}
          </div>
        </div>
        <div class="republish-box__republish-now-box republish-now-box">
          <button
            class="hvr-glow republish-now-box__republish-now"
            @click="$refs.knlk.focus()"
          >
            <i class="fas fa-bullhorn republish-icon"></i>
            <label
              style="margin: 0; padding: 0 5px"
            >Re-publish now</label>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OnePostNoteFooter',
  props: {
    onenote: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style
  lang="stylus"
        scoped>
  #one-post_note-footer
    padding 25px 25px 0 25px
  .one-post__note-footer
    display flex
    justify-content space-between
  .note-footer__republish-box
    display flex
    flex-direction column
    justify-content space-around
    align-items center
    padding 0 20px 7px 0
  .republish-now-box__republish-now:focus
    outline none
  .republish-now-box__republish-now
    display flex
    justify-content center
    align-items center
    padding 5px
</style>
