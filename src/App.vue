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
  },
  mounted: () => {
    let internal_post = '';
    if (process.env.NODE_ENV == 'development') {
      internal_post = '\u6b22\u8fce\u52a0\u5165 RIOS';
    } else {
      internal_post =
        '\uff40\u3000\u5feb\u3000\u3000\u3000\u5feb\u3000\u3000\u3000\u3000\u3000\u3000\u9003\u3000\u3000\u3000\u3000\u9003\u3000\u9003\n\u3000\u3000\u5feb\u3000\u5feb\u5feb\u5feb\u5feb\u5feb\u5feb\u3000\u3000\u3000\u3000\u9003\u3000\u9003\u3000\u9003\u3000\u9003\u3000\u9003\n\u5feb\u3000\u5feb\u3000\u3000\u3000\u5feb\u3000\u3000\u5feb\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u9003\u9003\u3000\u9003\u9003\n\u5feb\u3000\u5feb\u5feb\u3000\u3000\u5feb\u3000\u3000\u5feb\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u9003\u3000\u9003\n\u5feb\u3000\u5feb\u3000\u3000\u3000\u5feb\u3000\u3000\u5feb\u3000\u3000\u3000\u9003\u9003\u3000\u3000\u9003\u9003\u3000\u9003\u9003\n\u5feb\u3000\u5feb\u3000\u3000\u3000\u5feb\u3000\u3000\u5feb\u3000\u3000\u3000\u3000\u9003\u3000\u9003\u3000\u9003\u3000\u9003\u3000\u9003\n\u5feb\u3000\u5feb\u3000\u5feb\u5feb\u5feb\u5feb\u5feb\u5feb\u5feb\u3000\u3000\u3000\u9003\u3000\u3000\u3000\u9003\u3000\u9003\n\u3000\u3000\u5feb\u3000\u3000\u3000\u5feb\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u9003\u3000\u3000\u3000\u9003\u3000\u9003\u3000\u3000\u9003\n\u3000\u3000\u5feb\u3000\u3000\u5feb\u3000\u5feb\u3000\u3000\u3000\u3000\u3000\u3000\u9003\u3000\u9003\u9003\u3000\u3000\u9003\u9003\u9003\u9003\n\u3000\u3000\u5feb\u3000\u5feb\u3000\u3000\u3000\u5feb\u3000\u3000\u3000\u3000\u3000\u9003\n\u3000\u3000\u5feb\u5feb\u3000\u3000\u3000\u3000\u3000\u5feb\u5feb\u3000\u3000\u9003\u3000\u9003\u9003\u9003\u9003\u9003\u9003\u9003\u9003\u9003';
    }

    console.log(internal_post);
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
