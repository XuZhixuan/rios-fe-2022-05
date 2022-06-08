<template>
  <b-container>
    <tech-card
      class="teacher-card"
      v-for="teacher in team"
      :key="teacher.id"
      :id="teacher.id"
      :name="teacher.name"
      :img="teacher.img"
      :info="teacher.info"
    />
  </b-container>
</template>

<script>
import TechCard from '@/components/team/TeacherIntro';

export default {
  name: 'TeamList',
  components: {
    TechCard
  },
  data() {
    return {
      team: [
        {
          id: 0,
          name: 'David Passterson',
          img: require('@/assets/pictures/team0.jpeg'),
          info: {
            position: 'Director',
            brief:
              'David Patterson is the Pardee Professor of Computer Science, Emeritus at the University of California at Berkeley, which he joined after graduating from UCLA in 1976. He joined Google in 2016. He is currently Vice-Chair of the Board of Directors of the RISC-V Foundation. Professor Patterson has received about 40 awards in the fields of research, teaching, and service in the past 40 years, including: A.M. Turing Award, C&C Award, IEEE John von Reumann Medal. He was also elected to both AAAS societies, the National Academy of Engineering, the National Academy of Sciences, the Silicon Valley Engineering Hall of Fame, and to be a Fellow of the Computer History Museum. In 2019, as one of the initiators, he served as the director of the David Patterson RISC-V International Open Source Laboratory of Tsinghua-Berkeley Shenzhen Institude of Tsinghua University.',
            research:
              'Computer Architecture & Engineering (ARC), Computer Architecture and Systems: performance, security, RISC-V'
          }
        },
        {
          id: 1,
          name: 'Zhangxi Tan',
          img: require('@/assets/pictures/team1.jpeg'),
          info: {
            position: 'Co-Director',
            brief: '',
            research: ''
          }
        },
        {
          id: 2,
          name: 'Weiwei Chen',
          img: require('@/assets/pictures/team2.jpeg'),
          info: {
            position: 'Professor, Engineer',
            brief:
              'Associate professor, supervisor of postgraduate, former member of Youth Innovation Promotion Association of Chinese Academy of Sciences Senior member of the Optical Engineering Society of China,expert of the Zhongguancun Cloud Computing Industry Alliance Former chief scientist of artificial intelligence company (CTO level), and former first leader of the 3D NAND chip design team of China. 20+ years of IC industry experience, 7+ years of AI industry experience, led the team to complete 30+ chip/IP core design, served as the technical leader of 5+ National Major Projects, and supervised 30+ students. 70+ Patents(CN and US), software copyrights and articles.',
            research:
              'Main research interests for computing in memory chip architecture and design technology, AI chip design nano-memory IC design methodology, and EDA design methodology'
          }
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.teacher-card {
  margin: 1rem 0;
}
</style>
