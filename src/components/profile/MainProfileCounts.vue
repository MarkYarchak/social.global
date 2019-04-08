<template>
  <div id="main-profile_counts">
    <div class="main-profile__counts">
      <div class="counts__count-inf-box count-inf-box">
        <div class="count-inf-box__count-friends-box count-friends-box">
          <div class="count-friends-box__count-friends">
            {{ user.followers.length }} readers
          </div>
        </div>
      </div>
      <div class="counts__count-inf-box count-inf-box">
        <div class="count-inf-box__count-friends-box count-friends-box">
          <div class="count-friends-box__count-friends">
            {{ user.unfollowers.length }} readers
          </div>
        </div>
      </div>
      <div class="counts__count-inf-box count-inf-box">
        <div class="count-inf-box__count-friends-box count-friends-box">
          <div class="count-friends-box__count-friends">
            {{ user.followers.length }} readers
          </div>
        </div>
      </div>
      <div class="counts__count-inf-box count-inf-box">
        <div class="count-inf-box__count-friends-box count-friends-box">
          <div class="count-friends-box__count-friends">
            {{ user.followers.length }} readers
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'MainProfileCounts',
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
  .main-profile__counts
    padding 15px 0
    display flex
    justify-content space-around
</style>
