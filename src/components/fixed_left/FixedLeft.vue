<template>
  <div id="fixed-left">
    <div class="fixed-left">
      <div class="fixed-left__profile-box">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FixedLeft',
};
</script>

<style
  lang="stylus"
        scoped>
  #fixed-left
    position fixed
    left 0
    top 5%
    max-width 300px
    background-color: #e65700
    height 100%
    width 100%
</style>
