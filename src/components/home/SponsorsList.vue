<template>
  <div class="sponsor-area">
    <b-container>
      <h5 style="text-align: center; margin-bottom: 3rem">{{ $t('home.sponsor.title') }}</h5>
      <b-row align-h="center">
        <b-col md="3" v-for="(sponsor, id) in sponsors" :key="id" class="sponsor-logo">
          <b-img :src="sponsor" style="max-width: 100%" />
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
        require('@/assets/pictures/logo_bd.png'),
        require('@/assets/pictures/logo_sc.png'),
        require('@/assets/pictures/logo_adi.png'),
        require('@/assets/pictures/logo_img.svg'),
        require('@/assets/pictures/logo_fw.png'),
        require('@/assets/pictures/logo_ansys.svg'),
        require('@/assets/pictures/logo_rivai.png')
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

.sponsor-logo {
  min-height: 10rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
