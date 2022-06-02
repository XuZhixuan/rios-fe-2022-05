<template>
  <b-container>
    <div class="intro-area">
      <b-row>
        <b-col lg>
          <h5 style="align: center">{{ $t('home.intro.title') }}</h5>
          <p style="text-indent: 2rem; text-align: adjust">
            {{ $t('home.intro.content') }}
          </p>
          <b-row>
            <b-col align="center">
              <img class="seal" src="@/assets/logos/tsinghua.svg" alt="清华校标组合" />
            </b-col>
            <b-col align="center">
              <img class="seal" src="@/assets/logos/berkeley.svg" alt="伯克利校标组合" />
            </b-col>
          </b-row>
        </b-col>
        <b-col lg>
          <div class="pic">
            <b-img rounded src="@/assets/pictures/temp_intro.png" fluid></b-img>
          </div>
        </b-col>
      </b-row>
    </div>
  </b-container>
</template>

<script>
export default {
  name: 'LabIntro'
};
</script>

<style lang="scss" scoped>
.intro-area {
  margin: 5rem 0;
}
.seal {
  height: 8rem;
}
.pic {
  margin-top: 2rem;
}
</style>
