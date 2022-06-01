<template>
  <div class="home">
    <news-carousel />
    <lab-intro />
    <teachers-brief />
    <lab-video />
    <sponsors-list />
  </div>
</template>

<script>
import NewsCarousel from '@/components/home/NewsCarousel';
import LabIntro from '@/components/home/LabIntro';
import TeachersBrief from '@/components/home/TeachersBrief';
import LabVideo from '@/components/home/LabVideo';
import SponsorsList from '@/components/home/SponsorsList';

export default {
  name: 'HomeView',
  components: {
    NewsCarousel,
    LabIntro,
    TeachersBrief,
    LabVideo,
    SponsorsList
  }
};
</script>
