<template>
  <b-container>
    <teacher-detail :id="id" />
  </b-container>
</template>

<script>
import TeacherDetail from '@/components/team/TeacherDetail';

export default {
  components: { TeacherDetail },
  name: 'TeacherShow',
  props: ['id'],
  component: {
    TeacherDetail
  }
};
</script>
