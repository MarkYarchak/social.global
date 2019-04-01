<template>
  <div id="fixed-high">
    <div class="fixed-high">
      <div class="fixed-high__logo-box">
        <h1>Social Global</h1>
      </div>
      <div class="fixed-high__search-box">
        <form class="form-inline">
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FixedHigh',
};
</script>

<style
  lang="stylus"
        scoped>
  #fixed-high
    display flex
    align-items center
    position sticky
    top 0
    background linear-gradient(to bottom, #cd2a00, #FE8C00)
  .fixed-high
    width 100%
    display flex
    align-items center
</style>
