<template>
  <div class="brief-area">
    <b-container>
      <h5>{{ $t('home.team.title') }}</h5>
      <p>{{ $t('home.team.content') }}</p>
      <b-card-group deck style="text-align: center">
        <b-card
          v-for="teacher in teachers"
          :key="teacher.id"
          bg-variant="dark"
          :title="teacher.name"
          :img-src="imgs[teacher.id]"
          img-alt="照片"
          img-top
        >
          <b-card-text>
            {{ teacher.position }}
          </b-card-text>
          <b-button variant="outline-light" :to="{ name: 'teamDetail', params: { id: teacher.id } }">
            {{ $t('common.seemore') }}
          </b-button>
        </b-card>
      </b-card-group>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'TeachersBrief',
  data() {
    return {
      imgs: ['/photos/team/avatar0.jpeg', '/photos/team/avatar1.jpeg', '/photos/team/avatar2.jpeg']
    };
  },
  computed: {
    teachers() {
      let locale = this.$i18n.locale;
      return require('@/assets/langs/' + locale + '/team_brief.json');
    }
  }
};
</script>

<style lang="scss" scoped>
.brief-area {
  padding: 5rem 0;
  background: url('@/assets/pictures/shape1.png') no-repeat, #070b3b;
  background-position-x: right;
  background-position-y: top;
  background-size: auto 60%;
  color: #fff;
  text-align: center;
}
</style>
