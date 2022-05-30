<template>
  <footer class="footer-area footer-bg">
    <b-container>
      <b-row align-v="center">
        <b-col><img src="@/assets/logos/logo2.png" alt="" /></b-col>
        <b-col>
          <h4>网站地图</h4>
          <p><font-awesome-icon icon="angle-right" /> <a href="/">团队</a></p>
          <p><font-awesome-icon icon="angle-right" /> <a href="/">博客</a></p>
          <p><font-awesome-icon icon="angle-right" /> <a href="/">开放平台</a></p>
          <p><font-awesome-icon icon="angle-right" /> <a href="/">文档</a></p>
          <p><font-awesome-icon icon="angle-right" /> <a href="/">下载</a></p>
        </b-col>
        <b-col>
          <h4>联系方式</h4>
          <p><font-awesome-icon icon="house" /> 清华伯克利深圳学院，中国深圳市南山区西丽南山智园C3栋，邮编518055</p>
          <p><font-awesome-icon icon="house" /> 美国加利福尼亚州圣克拉拉市邦克希尔巷2933号205室，邮编95054</p>
          <p><font-awesome-icon icon="envelope" /> <a href="mailto:info@rioslab.org">mailto:info@rioslab.org</a></p>
        </b-col>
      </b-row>
      <p style="text-align: center">Copyright info ...</p>
    </b-container>
  </footer>
</template>

<script>
export default {
  name: 'FooterNav'
};
</script>

<style lang="scss" scoped>
footer {
  background-color: #070b3b;
  color: #fff;
}

a {
  color: inherit;
}
</style>
