<template>
  <b-card no-body>
    <b-row>
      <b-col md="4">
        <b-card-img :src="img" alt="Image" style="width: 100%"></b-card-img>
      </b-col>
      <b-col md="8" align-self="center">
        <b-card-body :title="name">
          <b-card-sub-title style="font-weight: bold"> {{ info.level }} </b-card-sub-title>
          <b-card-text align="justify"> {{ info.brief }} </b-card-text>
          <b-card-sub-title>研究方向</b-card-sub-title>
          <b-card-text> {{ info.research }} </b-card-text>
          <b-card-sub-title>联系方式</b-card-sub-title>
          <b-card-text>
            <a :href="'mailto:' + email"><font-awesome-icon icon="envelope" /> {{ email }}</a>
          </b-card-text>
          <b-card-sub-title>个人主页</b-card-sub-title>
          <b-card-text>
            <a :href="link"><font-awesome-icon icon="link" /> {{ link }}</a>
          </b-card-text>
        </b-card-body>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
export default {
  name: 'TechCard',
  props: {
    name: String,
    info: Object,
    img: String,
    email: String,
    link: String,
    id: Number
  }
};
</script>
