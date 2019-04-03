<template>
  <div id="fixed-high-exit-btn">
    <div class="text-xs-center">
      <v-dialog
        v-model="dialog"
        width="500"
      >
        <template v-slot:activator="{ on }">
          <v-btn
            :color="changeBtnTheme ? 'yellow lighten-2' : 'black lighten-2'"
            dark
            flat
            @mouseenter="changeBtnTheme = true"
            @mouseleave="changeBtnTheme = false"
            v-on="on"
          >
            <i class="fas fa-sign-out-alt fa-2x"></i>
          </v-btn>
        </template>

        <v-card>
          <v-card-title
            class="headline grey lighten-2"
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
              color="primary"
              flat
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

</style>
