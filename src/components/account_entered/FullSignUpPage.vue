<template>
  <div id="full-sign-up-page">
    <div class="container-page">
      <FixedLeft />
      <FixedHigh />
      <div class="box-view_content">
        <router-view />
      </div>
    </div>
    <div
      style="min-width: 31.7%; min-height: 100%; position: fixed; right: 0"
    >
<!--      <FastNoteMax />-->
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import FixedHigh from '../fixed_high/FixedHigh';
import FixedLeft from '../fixed_left/FixedLeft';
import FastNoteMax from './FastNoteMax';

export default {
  name: 'FullSignUpPage',
  components: {
    FixedHigh,
    FixedLeft,
    FastNoteMax,
  },
  computed: {
    ...mapGetters([
      'user',
    ]),
  },
  beforeCreate() {
    if (this.$router.currentRoute.fullPath === '/') this.$router.push(`/${this.$store.state.user.username}`);
  },
};
</script>

<style
  lang="stylus"
        scoped>
  #full-sign-up-page
    display flex
  .container-page
    max-width 1300px
    min-width 1300px
  .box-view_content
    margin-left 300px


  @media (min-height: 700px) {
    #full-sign-up-page {
      min-height: 700px
      }
    }
  @media (min-height: 750px) {
    #full-sign-up-page {
      min-height: 750px
    }
  }
  @media (min-height: 800px) {
    #full-sign-up-page {
      min-height: 800px
    }
  }
  @media (min-height: 850px) {
    #full-sign-up-page {
      min-height: 850px
    }
  }
  @media (min-height: 900px) {
    #full-sign-up-page {
      min-height: 900px
    }
  }
  @media (min-height: 950px) {
    #full-sign-up-page {
      min-height: 950px
    }
  }
  @media (min-height: 1000px) {
    #full-sign-up-page {
      min-height: 1000px
    }
  }
  @media (min-height: 1008px) {
    #full-sign-up-page {
      min-height: 1008px
    }
  }
  @media (min-height: 1020px) {
    #full-sign-up-page {
      min-height: 1050px
    }
  }
</style>
