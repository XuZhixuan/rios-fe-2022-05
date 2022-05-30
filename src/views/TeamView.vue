<template>
  <div class="team">
    <b-container>
      <tech-card
        v-for="teacher in team"
        :key="teacher.id"
        :id="teacher.id"
        :name="teacher.name"
        :img="teacher.img"
        :info="teacher.info"
        :email="teacher.email"
        :link="teacher.link"
      />
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
          id: 0,
          name: '大卫·帕特森',
          img: 'https://2018.wicwuzhen.cn/web18/news/speeches/201811/W020181107396809372839.png',
          info: { level: 'BOSS', brief: 'Super Boss of RIOS, control everything!', research: 'Risc ISA' },
          email: 'sxxuzhixuan@hotmail.com',
          link: 'https://github.com/XuZhixuan'
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.team {
  margin: 2rem 0;
}
</style>
