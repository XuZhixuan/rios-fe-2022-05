<template>
  <b-container>
    <project-detail :id="id" />
  </b-container>
</template>

<script>
import ProjectDetail from '@/components/projects/ProjectDetail';

export default {
  name: 'ProjectShow',
  components: {
    ProjectDetail
  },
  props: ['id']
};
</script>
