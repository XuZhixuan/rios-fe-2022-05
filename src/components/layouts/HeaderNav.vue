<template>
  <div class="main-nav sticky-nav">
    <b-container>
      <b-navbar toggleable="lg">
        <b-navbar-brand href="/">
          <img src="@/assets/logos/logo.png" alt="RIOS-Lab" />
        </b-navbar-brand>
        <b-navbar-toggle class="ml-auto" target="header-nav">
          <template #default="{ expanded }">
            <font-awesome-icon v-if="expanded" icon="angle-up" />
            <font-awesome-icon v-else icon="angle-down" />
          </template>
        </b-navbar-toggle>
        <b-collapse id="header-nav" is-nav>
          <b-navbar-nav class="m-auto">
            <b-nav-item href="/">实验室概况</b-nav-item>
            <b-nav-item to="team">教育教学</b-nav-item>
            <b-nav-item href="/">科学研究</b-nav-item>
            <b-nav-item href="/">招生就业</b-nav-item>
            <b-nav-item href="/">合作交流</b-nav-item>
          </b-navbar-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item-dropdown text="语言" right>
              <b-dropdown-item href="#">中文-简体</b-dropdown-item>
              <b-dropdown-item href="#">English</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'HeaderNav'
};
</script>

<style lang="scss" scoped>
img {
  max-width: 12rem;
}

// .sticky-nav {
//   top: 0;
//   border: 0;
//   position: fixed;
// }

.main-nav {
  width: 100%;
  height: auto;
  box-shadow: 0 0 15px rgba(0, 0, 0, 30%);
}

.nav-link {
  color: #252525 !important;
}
</style>
