<template>
  <b-card bg-variant="dark" :title="name" :img-src="img" :img-alt="name + ' 照片'" img-top style="max-width: 20rem">
    <b-card-text>
      {{ detail }}
    </b-card-text>
    <b-button variant="outline-light" :to="'/team/' + id"> 详细了解 </b-button>
  </b-card>
</template>

<script>
export default {
  name: 'TeacherCard',
  props: {
    name: String,
    img: String,
    detail: String,
    id: Number
  }
};
</script>
