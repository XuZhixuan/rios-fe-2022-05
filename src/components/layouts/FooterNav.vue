<template>
  <footer>
    <b-container>
      <b-row>
        <b-col align-self="center" class="blacking" xl><img src="@/assets/logos/logo2.png" alt="" /></b-col>
        <b-col class="blacking" md>
          <h5>{{ $t('footer.sitemap.title') }}</h5>
          <ul style="padding-left: 0">
            <li>
              <b-link to="/team"><font-awesome-icon icon="angle-right" /> {{ $t('footer.sitemap.team') }}</b-link>
            </li>
            <li>
              <b-link href="https://rioslab.org/blog.php">
                <font-awesome-icon icon="angle-right" /> {{ $t('footer.sitemap.blog') }}
              </b-link>
            </li>
            <li>
              <b-link to="/"><font-awesome-icon icon="angle-right" /> {{ $t('footer.sitemap.platform') }}</b-link>
            </li>
            <li>
              <b-link href="https://picorio-doc.readthedocs.io/en/latest/">
                <font-awesome-icon icon="angle-right" /> {{ $t('footer.sitemap.documents') }}
              </b-link>
            </li>
            <li>
              <b-link to="/"><font-awesome-icon icon="angle-right" /> {{ $t('footer.sitemap.download') }}</b-link>
            </li>
          </ul>
        </b-col>
        <b-col class="blacking" lg>
          <h5>{{ $t('footer.contact.title') }}</h5>
          <p><font-awesome-icon icon="house" /> {{ $t('footer.contact.address1') }}</p>
          <p><font-awesome-icon icon="house" /> {{ $t('footer.contact.address2') }}</p>
          <p><font-awesome-icon icon="envelope" /> <a href="mailto:info@rioslab.org">mailto:info@rioslab.org</a></p>
        </b-col>
      </b-row>
      <p class="copyright">
        <font-awesome-icon icon="copyright" />
        All rights reserved for this website. Content is licensed under
        <a href="https://creativecommons.org/licenses/by-sa/4.0/">
          <b-img src="@/assets/pictures/license.svg" style="height: 1rem" /> CC BY-SA 4.0 License</a
        >
        .
      </p>
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

li {
  margin-top: 0.25rem;
}

.copyright {
  text-align: center;
  margin: 0;
}
</style>
