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
            <b-nav-item href="https://rioslab.org">{{ $t('navbar.intro') }}</b-nav-item>
            <b-nav-item-dropdown :text="$t('navbar.education')">
              <b-nav-item to="team">{{ $t('navbar.faculty') }}</b-nav-item>
              <b-nav-item href="https://rioslab.org/students.php">{{ $t('navbar.retrate') }}</b-nav-item>
            </b-nav-item-dropdown>
            <b-nav-item href="https://rioslab.org/news.php">{{ $t('navbar.research') }}</b-nav-item>
            <b-nav-item href="https://www.sigs.tsinghua.edu.cn/zsjy/list.htm">{{ $t('navbar.admission') }}</b-nav-item>
            <b-nav-item href="https://rioslab.org/contact.php">{{ $t('navbar.cooperate') }}</b-nav-item>
          </b-navbar-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item-dropdown right>
              <template #button-content> <font-awesome-icon icon="language" /> {{ $t('navbar.lang') }} </template>
              <b-dropdown-item @click="changeLocale('zh')">简体中文</b-dropdown-item>
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
</style>
