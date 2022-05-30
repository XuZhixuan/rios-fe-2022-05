<template>
  <div>
    <b-carousel
      id="news-carousel"
      v-model="news"
      controls
      indicators
    ></b-carousel>
  </div>
</template>

<script>
export default {
  name: 'NewsCarousel'
};
</script>
