<template>
  <div>
    <div class="banner">
      <b-container>
        <h5>{{ $t('team.title') }}</h5>
        <p>{{ $t('team.subtitle') }}</p>
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
