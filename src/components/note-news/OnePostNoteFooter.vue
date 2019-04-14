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
              label="Fast comment..."
              color="primary"
            ></v-text-field>
          </div>
        </div>
      </div>
      <div class="note-footer__republish-box republish-box">
        <div class="republish-box__republish">
          re-published: {{ onenote.republish.length }}
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
  .one-post__note-footer
    display flex
    justify-content space-between

</style>
