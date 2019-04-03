<template>
  <div id="main-profile_user-bloc">
    <div class="main-profile_user-bloc">
      <div class="main-profile-header__main-photo-box main-photo-box">
        <div
          :style="{'background-image': `url(${user.avatar})`}"
          class="main-photo-box__main-photo"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainProfileUserBloc',
};
</script>

<style
  lang="stylus"
        scoped>
  .main-photo-box__main-photo
    width 300px
    height 370px
    background center center/cover no-repeat coral
</style>
