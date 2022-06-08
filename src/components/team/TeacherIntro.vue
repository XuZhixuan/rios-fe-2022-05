<template>
  <b-card no-body>
    <b-row>
      <b-col md="4">
        <b-card-img :src="img" alt="Image" style="width: 100%"></b-card-img>
      </b-col>
      <b-col md="8" align-self="center">
        <b-card-body :title="name">
          <b-card-sub-title style="font-weight: bold"> {{ info.position }} </b-card-sub-title>
          <b-card-text align="justify">
            <br />
            {{ info.brief }}
          </b-card-text>
          <b-card-sub-title>{{ $t('team.list.research') }}</b-card-sub-title>
          <b-card-text align="justify"> {{ info.research }} </b-card-text>
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
    id: Number
  }
};
</script>
