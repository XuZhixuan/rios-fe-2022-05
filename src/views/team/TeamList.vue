<template>
  <b-container>
    <tech-card
      class="teacher-card"
      v-for="teacher in team"
      :key="teacher.id"
      :id="teacher.id"
      :name="teacher.name"
      :img="teacher.img"
      :info="teacher.info"
    />
  </b-container>
</template>

<script>
import axios from 'axios';
import TechCard from '@/components/team/TeacherIntro';

export default {
  name: 'TeamList',
  components: {
    TechCard
  },
  data() {
    return {
      team: []
    };
  },
  methods: {
    getData() {
      let vm = this;
      axios
        .get('/api/teachers')
        .then((res) => {
          res.data.data.forEach((e) => {
            vm.team.push({
              id: e.id,
              name: e.name,
              img: '/photos/team/avatar' + e.id + '.jpeg',
              info: e.info
            });
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.getData();
  }
};
</script>

<style lang="scss" scoped>
.teacher-card {
  margin: 1rem 0;
}
</style>
