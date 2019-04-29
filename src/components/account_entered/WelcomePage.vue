<template>
  <div id="welcome-page">
    <div class="welcome-page">
      <v-jumbotron>
        <v-container fill-height>
          <v-layout align-center>
            <v-flex>
              <h3 class="display-3">Welcome to the NoteMePro</h3>

              <span class="subheading">
                It's a global note application, where you can to store your notes,<br>
                send there to your friends, do posts with notes, listen music, join to<br>
                different groups and do so more interesting things.</span>

              <v-divider class="my-3"></v-divider>

              <div class="title mb-3">Enjoy it now!</div>

              <v-btn
                class="mx-0"
                color="orange"
                large
                @click="$router.push(`/${user.username}`)"
              >
                Go to your profile
              </v-btn>
            </v-flex>
          </v-layout>
        </v-container>
      </v-jumbotron>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'WelcomePage',
  computed: {
    ...mapGetters([
      'user',
    ]),
  },
  created() {
    // this.$router.replace(`/${this.user.username}`);
  },
};
</script>

<style
  lang="stylus"
        scoped>

</style>
