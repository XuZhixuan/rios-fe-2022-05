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
          title: "What's New!",
          detail: 'Something new is happening...',
          linkName: 'See More',
          link: 'https://rioslab.org/news.php'
        },
        {
          id: 1,
          img: 'https://rioslab.org/files/image/20200508/20200508093828_68679.png',
          title: 'Join Us Today!',
          detail: 'Welcome to RIOS, becoming a member today!',
          linkName: 'Details',
          link: 'https://rioslab.org/contact.php'
        },
        {
          id: 2,
          img: 'https://rioslab.org/files/image/20200427/20200427211729_44757.png',
          title: 'We Are Hiring!',
          detail: 'Contact us immediately.',
          linkName: 'Contact',
          link: 'https://rioslab.org/contact.php'
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
