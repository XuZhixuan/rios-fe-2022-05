<template>
  <div class="home">
    <news-carousel />
  </div>
</template>

<script>
import NewsCarousel from '@/components/home/NewsCarousel';

export default {
  name: 'HomeView',
  components: {
    NewsCarousel
  }
};
</script>
