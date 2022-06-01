<template>
  <div class="brief-area">
    <b-container>
      <h5>专家教授</h5>
      <p>我们拥有丰富的师资力量</p>
      <b-card-group deck>
        <teacher-card
          v-for="teacher in teachers"
          :name="teacher.name"
          :img="teacher.img"
          :detail="teacher.detail"
          :key="teacher.id"
          :id="teacher.id"
        />
      </b-card-group>
    </b-container>
  </div>
</template>

<script>
import TeacherCard from '@/components/home/TeacherCard';

export default {
  name: 'TeachersBrief',
  components: {
    TeacherCard
  },
  data() {
    return {
      teachers: [
        {
          name: '大卫·帕特森',
          img: 'https://2018.wicwuzhen.cn/web18/news/speeches/201811/W020181107396809372839.png',
          detail: '实验室主任',
          id: 0
        },
        {
          name: '谭章熹',
          img: 'https://rioslab.org/files/image/20200512/20200512172047_60250.png',
          detail: '实验室常任主任兼委员会主席',
          id: 1
        },
        {
          name: '谭章熹',
          img: 'https://rioslab.org/files/image/20200512/20200512172047_60250.png',
          detail: '实验室常任主任兼委员会主席',
          id: 2
        },
        {
          name: '谭章熹',
          img: 'https://rioslab.org/files/image/20200512/20200512172047_60250.png',
          detail: '实验室常任主任兼委员会主席',
          id: 3
        }
      ]
    };
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
