<template>
  <div>
    <div class="banner">
      <b-container>
        <h5>实验室教授与专家</h5>
        <p>我们是专业团队</p>
        <b-button pill variant="outline-light">测试</b-button>
      </b-container>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'TeamView'
};
</script>

<style lang="scss" scoped>
.banner {
  background: rgb(102, 8, 116);
  padding: 5rem 0;
  color: #fff;
  text-align: center;
}
</style>
