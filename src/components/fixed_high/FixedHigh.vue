<template>
  <div id="fixed-high">
    <div class="fixed-high">
      <div class="fixed-high__logo-box">
        <h1 style="margin: 0">
          <i class="fas fa-cannabis"></i> NoteMePro
        </h1>
      </div>
      <div class="fixed-high__search-box">
        <v-text-field
          label="Search"
          color="yellow"
        ></v-text-field>
        <button class="box-search_icon">
          <i class="fas fa-search"></i>
        </button>
      </div>
      <v-spacer />
      <FixedHighExitBtn />
    </div>
  </div>
</template>

<script>
import FixedHighExitBtn from './FixedHighExitBtn';

export default {
  name: 'FixedHigh',
  components: {
    FixedHighExitBtn,
  },
};
</script>

<style
        lang="stylus"
        scoped>
  @import url('https://fonts.googleapis.com/css?family=Baloo+Chettan|Bree+Serif|Playfair+Display');
  #fixed-high
    z-index 5
    display flex
    align-items center
    position sticky
    top 0
    background linear-gradient(to bottom, #cd2a00, #FE8C00)
  /*box-shadow 0 1px 7px 5px #e77314*/
  .fixed-high
    width 100%
    display flex
    align-items center
  .fixed-high__logo-box
    font-family: 'Bree Serif', serif;
    width 300px
    display flex
    justify-content center
    user-select none
    -moz-user-select none
    -ms-user-select none
    -webkit-user-select none
  .fixed-high__search-box
    margin 0 20px
    display: flex
    align-items center
  .box-search_icon
    color black
    width 25px
  .box-search_icon:focus
    outline none
  .box-search_icon:not(:hover)
    transition 0.3s
  .box-search_icon:hover
    transition 0.2s
    color yellow
  .fixed-high__exit-box
    padding 0 20px
  .exit-box__exit
    cursor pointer
  .exit-box__exit:not(:hover)
    transition 0.3s
  .exit-box__exit:hover
    transition 0.2s
    color yellow
</style>
