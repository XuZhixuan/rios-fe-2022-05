<template>
  <div class="sponsor-area">
    <b-container>
      <h5 style="text-align: center">{{ $t('home.sponsor.title') }}</h5>
      <b-row>
        <b-col md="3" v-for="sponsor in sponsors" :key="sponsor.id">
          <b-img :src="sponsor.logo" style="width: 100%" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'SponsorsList',
  data() {
    return {
      sponsors: [
        { id: 0, logo: require('@/assets/logos/sponsor1.svg') },
        { id: 1, logo: require('@/assets/logos/sponsor1.svg') },
        { id: 2, logo: require('@/assets/logos/sponsor1.svg') },
        { id: 3, logo: require('@/assets/logos/sponsor1.svg') },
        { id: 4, logo: require('@/assets/logos/sponsor1.svg') },
        { id: 5, logo: require('@/assets/logos/sponsor1.svg') },
        { id: 6, logo: require('@/assets/logos/sponsor1.svg') },
        { id: 7, logo: require('@/assets/logos/sponsor1.svg') },
        { id: 8, logo: require('@/assets/logos/sponsor1.svg') },
        { id: 9, logo: require('@/assets/logos/sponsor1.svg') },
        { id: 10, logo: require('@/assets/logos/sponsor1.svg') },
        { id: 11, logo: require('@/assets/logos/sponsor1.svg') },
        { id: 12, logo: require('@/assets/logos/sponsor1.svg') }
      ]
    };
  }
};
</script>

<style>
.sponsor-area {
  padding: 5rem 0;
  background: url('@/assets/pictures/world-tour.svg') no-repeat, #070b3b;
  background-position: center;
  background-size: 100% auto;
  color: #fff;
}
</style>
