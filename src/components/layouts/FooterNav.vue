<template>
  <footer>
    <b-container>
      <b-row>
        <b-col align-self="center" class="blacking" xl><img src="@/assets/logos/logo2.png" alt="" /></b-col>
        <b-col class="blacking" md>
          <h5>网站地图</h5>
          <ul class="unstyle">
            <li>
              <a href="/"><font-awesome-icon icon="angle-right" /> 团队</a>
            </li>
            <li>
              <a href="/"><font-awesome-icon icon="angle-right" /> 博客</a>
            </li>
            <li>
              <a href="/"><font-awesome-icon icon="angle-right" /> 开放平台</a>
            </li>
            <li>
              <a href="/"><font-awesome-icon icon="angle-right" /> 文档</a>
            </li>
            <li>
              <a href="/"><font-awesome-icon icon="angle-right" /> 下载</a>
            </li>
          </ul>
        </b-col>
        <b-col class="blacking" lg>
          <h5>联系方式</h5>
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
  padding-top: 1rem;
  background-color: #070b3b;
  color: #fff;
}

.blacking {
  margin-top: 1rem;
}

.unstyle {
  padding-left: 0;
  list-style: none;
}

li {
  margin-top: 0.25rem;
}
</style>
