<template>
  <b-card>
    <b-row no-gutters>
      <b-col md="1">
        <b-card-img :src="img" alt="Project Avatar" class="rounded-0"></b-card-img>
      </b-col>
      <b-col>
        <b-card-body>
          <h2>{{ name }}</h2>
          <b-link :to="{ name: 'projectDetail', params: { id: id } }">
            <font-awesome-icon icon="angle-right" /> {{ $t('common.details') }}
          </b-link>
        </b-card-body>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
export default {
  name: 'ProjectItem',
  props: {
    name: String,
    img: String,
    id: Number
  }
};
</script>
