<template>
  <div id="fixed-left">
    <div>
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
    position sticky
    top 68px
    min-width 300px
    background-color: #e65700
    height: calc(100vh - 68px);
</style>
