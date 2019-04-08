<template>
  <div class="account-music">
    <audio controls>

      <source src="../../musicStore/Khalid_-_Self.mp3" type="audio/mpeg">
      Тег audio не поддерживается вашим браузером.
      <a href="../../musicStore/Khalid_feat_Billie_Eilish_-_Lovely.mp3">
        Скачайте музыку
      </a>
    </audio>
    <audio controls>
      <source src="../../musicStore/Khalid_-_My_bad.mp3" type="audio/ogg; codecs=vorbis">
      <a href="../../musicStore/Khalid_feat_Billie_Eilish_-_Lovely.mp3">
        Скачайте музыку
      </a>
    </audio>
  </div>
</template>

<script>
export default {
  name: 'AccountMusic',
};
</script>

<style
  lang="stylus"
        scoped>
  #account-music
    display flex
    flex-direction column
</style>
