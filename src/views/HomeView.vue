<template>
  <div class="home">
    <news-carousel />
    <lab-intro />
    <teachers-brief />
    <lab-video />
  </div>
</template>

<script>
import NewsCarousel from '@/components/home/NewsCarousel';
import LabIntro from '@/components/home/LabIntro';
import TeachersBrief from '@/components/home/TeachersBrief';
import LabVideo from '@/components/home/LabVideo';

export default {
  name: 'HomeView',
  components: {
    NewsCarousel,
    LabIntro,
    TeachersBrief,
    LabVideo
  }
};
</script>
