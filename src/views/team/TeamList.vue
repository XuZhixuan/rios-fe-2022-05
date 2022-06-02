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
          name: '大卫·帕特森',
          img: 'https://2018.wicwuzhen.cn/web18/news/speeches/201811/W020181107396809372839.png',
          info: {
            position: '实验室主任',
            brief:
              '大卫·帕特森（David Patterson）自1976年加州大学洛杉矶分校博士毕业后加入加大伯克利分校计算机系，担任该校巴地计算机科学荣誉教授。帕特森教授在2016年以杰出工程师加入谷歌， 同时担任RISC-V基金会董事会副主席。帕特森教授于过去44年职业生涯里在研究，教学，和服务领域共获颁奖项约40个，其中包括：A.M 图灵奖，C&C奖，IEEE约翰.冯.罗伊曼奖章，并当选为AAAS学会，美国国家工程院，美国国家科学院，硅谷工程名人堂，以及计算机历史博物馆的院士。帕特森教授也曾担任加州大学伯克利分校计算机科学系主任，计算研究协会主席和ACM主席。2019年，他作为发起人之一，出任清华大学清华-伯克利深圳学院大卫帕特森RISC-V国际开源实验室主任。',
            research: 'RISC，计算机体系结构，计算机网络'
          }
        },
        {
          id: 1,
          name: '谭章熹',
          img: 'https://www.rioslab.org/files/image/20200516/20200516170903_21113.png',
          info: {
            position: '实验室联合主任兼执行主任',
            brief:
              '谭章熹博士是清华-伯克利深圳学院下RIOS图灵奖实验室联合主任，身兼该学院的兼职教授，专长为计算机系统结构和 VLSI设计。在任聘以上职位前，谭章熹博士曾就职于Pure Storage，并成功领导团队交付了获奖产品 （2017 AIconics AI硬件最佳发明奖）- FlashBladeTM，使其从初期成长为带动数亿美元年收入的产品。主要客户包括 Tesla, 奔驰一级方程式赛车车队, 以及Riot Games。谭章熹博士在闪存和硬件加速器研发方面已拥有20多项美国专利，他也是开源SPARC处理器 (RAMP Gold) 的研发人。谭博士拥有清华大学电子工程系学士和硕士学位，加州大学伯克利分校计算机科学硕士和博士学位，师从以研发精简指令集计算机授勋2017年度图灵奖的大卫·帕特森教授。',
            research: 'RISC，计算机体系结构。'
          }
        },
        {
          id: 2,
          name: '陈巍巍',
          img: 'http://www.ime.cas.cn/sourcedb_ime_cas/zw/zjrck/201611/P020201210374247385586.jpg',
          info: {
            position: '实验室教授，高级工程师',
            brief:
              '陈巍巍博士拥有清华大学电子工程系学士、清华大学电子学硕士和中科院博士学位，作为技术骨干参与并完成多项国家重大专项，拥有2项美国专利，和50多项国内发明专利。陈博士擅长纳米集成电路设计和高速存储器设计，并对EDA等领域颇有涉猎。',
            research: '集成电路设计，EDA,AI芯片'
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
