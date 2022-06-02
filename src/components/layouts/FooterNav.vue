<template>
  <footer>
    <b-container>
      <b-row>
        <b-col align-self="center" class="blacking" xl><img src="@/assets/logos/logo2.png" alt="" /></b-col>
        <b-col class="blacking" md>
          <h5>{{ $t('footer.sitemap.title') }}</h5>
          <ul class="unstyle">
            <li>
              <a href="/"><font-awesome-icon icon="angle-right" /> {{ $t('footer.sitemap.team') }}</a>
            </li>
            <li>
              <a href="/"><font-awesome-icon icon="angle-right" /> {{ $t('footer.sitemap.blog') }}</a>
            </li>
            <li>
              <a href="/"><font-awesome-icon icon="angle-right" /> {{ $t('footer.sitemap.platform') }}</a>
            </li>
            <li>
              <a href="/"><font-awesome-icon icon="angle-right" /> {{ $t('footer.sitemap.documents') }}</a>
            </li>
            <li>
              <a href="/"><font-awesome-icon icon="angle-right" /> {{ $t('footer.sitemap.download') }}</a>
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
