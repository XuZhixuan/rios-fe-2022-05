<template>
  <div id="app">
    <header-nav />
    <router-view />
    <footer-nav />
  </div>
</template>

<script>
import HeaderNav from '@/components/layouts/HeaderNav';
import FooterNav from '@/components/layouts/FooterNav';

export default {
  components: {
    HeaderNav,
    FooterNav
  }
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Noto+Serif+SC:200,300,400,500,600,700,900');
@import url('https://fonts.googleapis.com/css?family=Noto+Sans+SC:200,300,400,500,600,700,900');
@import url('https://fonts.googleapis.com/css?family=Roboto+Slab:200,300,400,500,600,700,900');

body {
  font-family: 'Roboto Slab', 'Noto Serif SC';
  h {
    font-family: 'Noto Sans SC';
  }
}
</style>
