<template>
  <div class="account-music">
    <h1 style="margin: 15px">
      <i class="fas fa-cannabis"></i> Sorry, page in development
    </h1>
    <div>
      <div>
        <audio
          controls
          style="width: 100%;"
        >
          <source src="../../musicStore/Khalid_-_Self.mp3" type="audio/mpeg">
          Тег audio не поддерживается вашим браузером.
          <a href="../../musicStore/Khalid_feat_Billie_Eilish_-_Lovely.mp3">
            Скачайте музыку
          </a>
        </audio>
      </div>
      <div>
        <audio
          controls
          style="width: 100%;"
        >
          <source src="../../musicStore/Khalid_-_My_bad.mp3" type="audio/ogg; codecs=vorbis">
          <a href="../../musicStore/Khalid_feat_Billie_Eilish_-_Lovely.mp3">
            Скачайте музыку
          </a>
        </audio>
      </div>
    </div>
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
