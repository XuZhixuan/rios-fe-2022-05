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
            <b-nav-item to="/">{{ $t('navbar.intro') }}</b-nav-item>
            <b-nav-item to="team">{{ $t('navbar.education') }}</b-nav-item>
            <b-nav-item to="/">{{ $t('navbar.research') }}</b-nav-item>
            <b-nav-item to="/">{{ $t('navbar.admission') }}</b-nav-item>
            <b-nav-item to="/">{{ $t('navbar.cooperate') }}</b-nav-item>
          </b-navbar-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item-dropdown :text="$t('navbar.lang')" right>
              <b-dropdown-item @click="changeLocale('zh')">中文-简体</b-dropdown-item>
              <b-dropdown-item @click="changeLocale('en')">English</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'HeaderNav',
  methods: {
    changeLocale(locale) {
      this.$root.$i18n.locale = locale;
    }
  }
};
</script>

<style lang="scss" scoped>
img {
  max-width: 12rem;
}
.main-nav {
  width: 100%;
  height: auto;
  box-shadow: 0 0 15px rgba(0, 0, 0, 30%);
}

.nav-link {
  color: #252525 !important;
}
</style>
