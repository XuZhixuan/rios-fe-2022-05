<template>
  <b-container>
    <proj-card
      class="proj-card"
      v-for="proj in projects"
      :key="proj.id"
      :id="proj.id"
      :name="proj.name"
      :img="proj.img"
    />
  </b-container>
</template>

<script>
import axios from 'axios';
import ProjCard from '@/components/projects/ProjectItem';

export default {
  name: 'ProjectList',
  components: {
    ProjCard
  },
  data() {
    return {
      projects: []
    };
  },
  methods: {
    getData() {
      let vm = this;
      axios
        .get('/api/projects')
        .then((res) => {
          res.data.forEach((i) => {
            vm.projects.push({
              id: i.id,
              name: i.name,
              img: i.avatar ?? '/photos/projects/default.png'
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
.proj-card {
  margin: 1rem 0;
}
</style>
