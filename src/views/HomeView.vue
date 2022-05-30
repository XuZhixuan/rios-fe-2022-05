<template>
  <div class="home">
    <news-carousel />
    <lab-intro />
    <teachers-brief />
  </div>
</template>

<script>
import NewsCarousel from '@/components/home/NewsCarousel';
import LabIntro from '@/components/home/LabIntro';
import TeachersBrief from '@/components/home/TeachersBrief';

export default {
  name: 'HomeView',
  components: {
    NewsCarousel,
    LabIntro,
    TeachersBrief
  }
};
</script>
