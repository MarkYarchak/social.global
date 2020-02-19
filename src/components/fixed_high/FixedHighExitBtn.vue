<template>
  <div id="fixed-high-exit-btn">
    <div class="text-xs-center">
      <v-dialog
        v-model="dialog"
        width="500"
      >
        <template v-slot:activator="{ on }">
          <v-btn
            dark
            depressed
            fab
            text
            small
            class="logout-activator-btn"
            style="margin-right: 16px;"
            v-on="on"
          >
            <v-icon>input</v-icon>
          </v-btn>
        </template>

        <v-card>
          <v-card-title
            class="headline orange darken-1"
            primary-title
          >
            Sign out
          </v-card-title>

          <v-card-text>
            Are you really want to leave?
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="orange darken-2"
              flat
              class="button-to-exit"
              @click="$router.push('/registration')"
            >
              Yes
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FixedHighExitBtn',
  data() {
    return {
      dialog: false,
      changeBtnTheme: false,
    };
  },
};
</script>

<style
  lang="stylus"
        scoped>
  .logout-activator-btn:hover
    outline none
  .logout-activator-btn:active
    outline none
</style>
