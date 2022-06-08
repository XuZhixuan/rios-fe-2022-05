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
  font-size: 14px;
  font-family: 'Roboto Slab', 'Noto Serif SC';
  h1 h2 h3 h4 h5 h6 {
    font-family: 'Noto Sans SC';
  }

  a {
    color: inherit;
  }

  ul {
    padding-left: 1rem;
    list-style: none;
  }

  li {
    margin-bottom: 0.5rem;
    text-align: justify;
  }
}
</style>
