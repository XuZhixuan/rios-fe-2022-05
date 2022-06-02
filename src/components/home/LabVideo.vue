<template>
  <div class="video-area">
    <b-container>
      <b-row align-v="center">
        <b-col>
          <p>{{ $t('home.video.subtitle') }}</p>
          <h3>{{ $t('home.video.title') }}</h3>
        </b-col>
        <b-col style="text-align: right">
          <b-button pill variant="outline-light">{{ $t('home.video.button') }}</b-button>
        </b-col>
      </b-row>
      <b-embed type="video" aspect="16by9" controls>
        <source src="@/assets/movies/temp_intro.mp4" type="video/mp4" />
      </b-embed>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'LabVideo'
};
</script>

<style lang="scss" scoped>
.video-area {
  padding-top: 5rem;
  padding-bottom: 3rem;
  background: url('@/assets/pictures/background1.svg');
  background-repeat: repeat-x;
  background-position-y: top;
  background-size: auto 50%;
  color: #fff;
}
</style>
