<template>
  <div>
    <b-carousel id="news-carousel" controls indicators img-height="30rem" img-width="100%">
      <b-carousel-slide v-for="msg in news" :key="msg.id">
        <template #img>
          <div
            class="carousel-img"
            :style="'background: url(' + msg.img + '); background-size: cover; background-position: center'"
          >
            <!-- <img :src="msg.img" /> -->
          </div>
        </template>
        <h5>{{ msg.title }}</h5>
        <p>{{ msg.detail }}</p>
        <b-button variant="outline-light" :href="msg.link">{{ msg.linkName }}</b-button>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  name: 'NewsCarousel',
  data() {
    return {
      news: [
        {
          id: 0,
          img: 'https://rioslab.org/files/image/20200415/20200415101412_98915.png',
          title: 'A title',
          detail: 'Some detailed information here...',
          linkName: '让我康康',
          link: '/'
        },
        {
          id: 1,
          img: 'https://rioslab.org/files/image/20200508/20200508093828_68679.png',
          title: 'Another title',
          detail: 'Some detailed information here...',
          linkName: '查看详情',
          link: '/'
        },
        {
          id: 2,
          img: 'https://rioslab.org/files/image/20200427/20200427211729_44757.png',
          title: 'Yet another title',
          detail: 'Some detailed information here...',
          linkName: '立即加入',
          link: '/'
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.carousel-img {
  height: 32rem;
}
</style>
