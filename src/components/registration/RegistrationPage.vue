<template>
  <div id="registration-page">
    <div class="main_header-box">
      <h1 class="main_header">
        <i class="fas fa-cannabis"></i> NoteMePro
      </h1>
    </div>
    <div class="title__some-text">
      Who will be the next Noter?
    </div>
    <v-stepper v-model="e1">
      <v-stepper-header>
        <v-stepper-step
          :complete="e1 > 1"
          step="1"
        >
          Name and phone
        </v-stepper-step>
        <v-divider />
        <v-stepper-step
          :complete="e1 > 2"
          step="2"
        >
          Password
        </v-stepper-step>
        <v-divider />
        <v-stepper-step step="3">
          Confirmation
        </v-stepper-step>
      </v-stepper-header>

      <v-stepper-items>
        <v-stepper-content step="1">
          <v-card
            class="mb-5"
            :color="firstName.length > 2 && lastName.length > 2 && !$v.phoneNumber.$error
              && username.length > 2 ? 'orange darken-1' : 'grey lighten-2'"
            height="200px"
            style="display: flex; align-items: center; flex-direction: column;
             justify-content: center"
          >
            <div
              style="display: flex"
              class="input_name-box"
            >
              <div class="sign-up_box__name">
                <label for="first_name">First name</label>
                <input
                  id="first_name"
                  v-model="firstName"
                  type="text"
                  class="form-control"
                  placeholder="First name"
                  @keypress.48.49.50.51.52.53.54.55.56.57="$v.firstName.$error"
                > <!--  -->
              </div>
              <div class="sign-up_box__surname">
                <label for="last_name">Last name</label>
                <input
                  id="last_name"
                  v-model="lastName"
                  type="text"
                  class="form-control"
                  placeholder="Last name"
                >
              </div>
            </div>
            <div class="sign-up_box__username">
              <label for="create_username">Think up your <b>username</b></label>
              <input
                id="create_username"
                v-model="username"
                type="text"
                class="form-control"
                placeholder="Your username"
              >
            </div>
          </v-card>

          <v-btn
            color="primary"
            @click="e1 = 2"
          >
<!--            @click="firstName.length > 2 && lastName.length > 2 && !$v.phoneNumber.$error &&-->
<!--            phoneNumber.length > 9 ? e1 = 2 : false"-->
            Continue
          </v-btn>
          <v-btn
            class="cancel_btn"
            flat
          >
            Cancel
          </v-btn>
        </v-stepper-content>

        <v-stepper-content step="2">
          <v-card
            class="mb-5"
            :color="writePass.length > 5 && confirmPass.length > 5 && writePass === confirmPass
              ? 'orange darken-1' : 'grey lighten-2'"
            height="200px"
            style="display: flex; align-items: center; flex-direction: column;
             justify-content: center"
          >
            <div
              style="display: flex; align-items: center; flex-direction: column;
                justify-content: center"
              class="box-passwords"
            >
              <div class="sign-up_box__pass">
                <label for="password_input">Write password</label>
                <input
                  id="password_input"
                  v-model="writePass"
                  :type="checkShowPass ? 'text' : 'password'"
                  class="form-control"
                  placeholder="At least 6 charters"
                >
              </div>
              <div class="sign-up_box__confirm-pass">
                <label for="confirm-password_input">Confirm password</label>
                <input
                  id="confirm-password_input"
                  v-model="confirmPass"
                  :type="checkShowPass ? 'text' : 'password'"
                  class="form-control"
                  placeholder="Confirm your password"
                >
              </div>
              <div
                style="display: flex; align-items: center; align-self: flex-start;
                 margin-left: 25px"
                class="check-show_pass-box"
              >
                <input
                  id="check-chow_pass"
                  v-model="checkShowPass"
                  class="custom-control-input"
                  type="checkbox"
                >
                <label
                  for="check-chow_pass"
                  class="custom-control-label"
                >Show passwords</label>
              </div>
            </div>
          </v-card>

          <v-btn
            color="primary"
            @click="e1 = 3"
          >
            Continue
          </v-btn>
          <v-btn
            class="cancel_btn"
            flat
            @click="e1 = 1"
          >
            Cancel
          </v-btn>
        </v-stepper-content>

        <v-stepper-content step="3">
          <v-card
            class="mb-5"
            color="grey lighten-2"
            height="200px"
            style="display: flex; justify-content: center; flex-direction: column;
              align-items: center"
          >
            <div class="confirm__phone">
              <label for="phone_number_input">Phone number</label>
              <input
                id="phone_number_input"
                v-model="phoneNumber"
                type="tel"
                class="form-control"
                placeholder="Phone number"
                @keypress=""
                @input="$v.phoneNumber.$touch()"
              >
              <small
                id="emailHelp"
                class="form-text text-muted"
              >Please, write only right phone number</small>
            </div>
            <div class="sign-up_box__agree-policy">
              <input
                id="check-privacy-policy"
                v-model="checkAgreePolicy"
                class="custom-control-input"
                type="checkbox"
              >
              <label
                for="check-privacy-policy"
                class="custom-control-label"
              >
                Agrees with the company's policy
              </label>
            </div>
          </v-card>

          <v-btn
            class="sign-up_btn"
            color="orange"
            @click="goSignUp"
          > <!-- phoneNumber.length > 9 -->
            Sign up
          </v-btn>
          <v-btn
            class="cancel_btn"
            flat
            @click="e1 = 2"
          >
            Cancel
          </v-btn>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
    <!--<b>{{ $v.firstName }}</b>-->
  </div>
</template>

<script>
import { required, numeric, minLength } from 'vuelidate/lib/validators';

export default {
  name: 'RegistrationPage',
  data() {
    return {
      e1: 0,
      checkShowPass: false,
      firstName: '',
      lastName: '',
      username: '',
      phoneNumber: null,
      writePass: '',
      confirmPass: '',
      objRegExp: null,
      checkAgreePolicy: false,
    };
  },
  validations: {
    phoneNumber: {
      required,
      numeric,
      minLength: minLength(10),
    },
    firstName: {
      required,
    },
  },
  methods: {
    goSignUp() {
      if (this.checkAgreePolicy) {
        this.$router.push('/');
      }
    },
  },
};
</script>

<style
  lang="stylus"
        scoped>
  #registration-page
    display flex
    flex-direction column
    align-items center
    height 100%
    /*background-color: #e65700*/
    background linear-gradient(to bottom, orange, #e65700)
  .main_header-box
    padding 30px 0 10px 0
  .main_header
    font-size 50px
    font-weight bold
  .title__some-text
    font-weight bold

  .sign-up_btn:focus
    outline none
  .cancel_btn:focus
    outline none
  label
    margin 0 0 0 3px
  .sign-up_box__name
    max-width 160px
    min-width 160px
    margin-right 10px
  .sign-up_box__surname
    max-width 160px
    min-width 160px
    margin-left 10px
  .sign-up_box__username
    margin-top 12px
    min-width 220px
  .sign-up_box__confirm-pass
    margin 10px 0
  .confirm__phone
    margin-bottom 12px
</style>
