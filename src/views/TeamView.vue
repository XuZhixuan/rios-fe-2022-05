<template>
  <div class="team">
    <b-container>
      <tech-card />
    </b-container>
  </div>
</template>

<script>
import TechCard from '@/components/team/TeacherIntro';

export default {
  name: 'TeamView',
  components: {
    TechCard
  },
  data() {
    return {
      team: [
        {
          name: 'XTAn'
        }
      ]
    };
  }
};
</script>
