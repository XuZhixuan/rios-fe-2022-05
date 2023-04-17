<template>
  <div>
    <div class="preamble">
      <h1 style="padding: 1rem 0">{{ title }}</h1>
      <div v-if="this.hasImage" style="margin: 1rem 0">
        <b-img v-for="(img, i) in this.images" :key="i" :src="img" style="max-width: 90%"></b-img>
      </div>
    </div>
    <div v-if="this.hasLink" class="link">
      <h5>{{ $t('projects.link') }}:</h5>
      <hr />
      <span v-for="(lnk, i) in this.link" :key="i">
        <b-link :to="lnk">{{ lnk }}</b-link>
        <br />
      </span>
    </div>
    <div v-for="(blk, i) in this.details" :key="i">
      <h5>{{ blk.title }}</h5>
      <hr />
      <div class="paras" v-if="blk.type == 'para'">
        <p v-for="(para, j) in blk.content" :key="j">{{ para }}</p>
      </div>
      <div class="lists" v-if="blk.type == 'list'">
        <ol>
          <li v-for="(item, k) in blk.content" :key="k">{{ item }}</li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'ProjectDetail',
  props: ['id'],
  data() {
    return {
      title: '',
      images: [],
      link: [],
      details: []
    };
  },
  computed: {
    hasImage() {
      return this.images.length > 0;
    },
    hasLink() {
      return this.link.length > 0;
    }
  },
  methods: {
    getData() {
      let vm = this;
      axios
        .get('/api/projects/' + this.id)
        .then((res) => {
          vm.title = res.data.name;
          vm.images = res.data.images;
          vm.link = res.data.link;
          vm.details = res.data.details;
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
.preamble {
  text-align: center;
}

.link {
  margin: 1rem, 0;
}
</style>
