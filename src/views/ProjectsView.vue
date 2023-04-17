<template>
  <div>
    <div class="banner">
      <b-container>
        <h5>{{ $t('projects.title') }}</h5>
        <p>{{ $t('projects.subtitle') }}</p>
      </b-container>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'ProjectsView'
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
