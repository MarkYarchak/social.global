<template>
  <div id="fixed-left">
    <div class="fixed-left">
      <FixedLeftUserBox />
      <FixedLeftPagesList />
    </div>
  </div>
</template>

<script>
import FixedLeftUserBox from './FixedLeftUserBox';
import FixedLeftPagesList from './FixedLeftPagesList';

export default {
  name: 'FixedLeft',
  components: {
    FixedLeftUserBox,
    FixedLeftPagesList,
  },
};
</script>

<style
  lang="stylus"
        scoped>
  #fixed-left
    z-index 2
    position fixed
    left 0
    top 67px
    max-width 300px
    background-color: #e65700
    height 100%
    width 100%
</style>
