<template>
  <div class="teacher-detail">
    <b-row>
      <b-col md="4">
        <b-img :src="img" alt="Avatar" style="width: 100%; margin-bottom: 1rem" />
      </b-col>
      <b-col md="8">
        <h3>{{ name }}</h3>
        <h6>{{ info.position }}</h6>
        <hr />
        <p>{{ info.brief }}</p>
        <h6>{{ $t('team.detail.research') }}</h6>
        <p>{{ info.research }}</p>
        <h6>{{ $t('team.detail.contact') }}</h6>
        <font-awesome-icon icon="envelope" /> <a :href="'mailto:' + email">Mailto:{{ email }}</a>
        <br />
        <font-awesome-icon v-if="link" icon="link" /> <a :href="link">{{ link }}</a>
      </b-col>
    </b-row>
    <div class="custom-area">
      <h5>{{ $t('team.detail.education') }}</h5>
      <hr />
      <ul class="edu-list">
        <li v-for="(edu, i) in education" :key="i">{{ edu }}</li>
      </ul>
      <div v-for="(blk, i) in extra" :key="i">
        <h5>{{ blk.title }}</h5>
        <hr />
        <ul v-if="blk.type == 'list'">
          <li v-for="(item, j) in blk.content" :key="j">
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'TeacherDetail',
  props: ['id'],
  data() {
    return {
      name: null,
      img: null,
      email: null,
      link: null,
      info: {
        position: null,
        brief: null,
        research: null
      },
      education: [],
      extra: null
    };
  },
  methods: {
    getData() {
      let vm = this;
      axios
        .get('/api/teachers/' + this.id)
        .then((res) => {
          vm.name = res.data.data.name;
          vm.img = '/photos/team/team' + this.id + '.jpeg';
          vm.email = res.data.data.email;
          vm.link = res.data.data.link;
          vm.info.position = res.data.data.info.position;
          vm.info.brief = res.data.data.info.brief;
          vm.info.research = res.data.data.info.research;
          vm.education = res.data.data.education;
          vm.extra = res.data.data.extra;
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
.teacher-detail {
  margin: 5rem 0;
}

.edu-list {
  list-style: none;
  padding-left: 1rem;
}

p {
  text-align: justify;
  line-height: 1.5rem;
}

.custom-area {
  margin-top: 3rem;
}
</style>
