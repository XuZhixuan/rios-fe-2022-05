<template>
  <div>
    <b-carousel id="news-carousel" controls indicators img-height="60rem" img-width="100%">
      <b-carousel-slide v-for="msg in news" :key="msg.id" :img-src="msg.img">
        <h1>{{ msg.title }}</h1>
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
          img: 'https://rioslab.org/files/image/20200415/20200415101412_98915.png',
          title: 'Another title',
          detail: 'Some detailed information here...',
          linkName: '查看详情',
          link: '/'
        },
        {
          id: 2,
          img: 'https://rioslab.org/files/image/20200427/20200427211729_44757.png',
          title: 'Yet Another title',
          detail: 'Some detailed information here...',
          linkName: '立即加入',
          link: '/'
        }
      ]
    };
  }
};
</script>
