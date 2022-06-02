<template>
  <div class="teacher-detail">
    <b-row>
      <b-col md="4">
        <b-img :src="img" alt="Avatar" style="width: 100%; margin-bottom: 1rem" />
      </b-col>
      <b-col md="8">
        <h3>{{ name }}</h3>
        <h6>{{ info.position }}</h6>
        <hr />
        <p>{{ info.brief }}</p>
        <h6>{{ $t('team.detail.research') }}</h6>
        <p>{{ info.research }}</p>
        <h6>{{ $t('team.detail.education') }}</h6>
        <ul class="edu-list">
          <li v-for="edu in education" :key="edu.id">{{ edu.content }}</li>
        </ul>
        <h6>{{ $t('team.detail.contact') }}</h6>
        <font-awesome-icon icon="envelope" /> <a :href="'mailto:' + email">Mailto:{{ email }}</a>
        <br />
        <font-awesome-icon icon="link" /> <a :href="link">{{ link }}</a>
      </b-col>
    </b-row>
    <div class="pubs">
      <h5>{{ $t('team.detail.pubs') }}</h5>
      <b-list-group flush>
        <b-list-group-item v-for="pub in pubs" :key="pub.id">
          <span v-html="pub.content"></span>
        </b-list-group-item>
      </b-list-group>
    </div>
    <div class="awards">
      <h5>{{ $t('team.detail.awards') }}</h5>
      <span v-html="awards"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TeacherDetail',
  props: ['id'],
  data() {
    return {
      name: null,
      img: null,
      email: null,
      link: null,
      info: {
        position: null,
        brief: null,
        research: null
      },
      education: [],
      pubs: [],
      awards: []
    };
  },
  methods: {
    getData() {
      let dataset = [
        {
          name: '大卫·帕特森',
          img: 'https://2018.wicwuzhen.cn/web18/news/speeches/201811/W020181107396809372839.png',
          info: {
            position: '实验室主任',
            brief:
              '大卫·帕特森（David Patterson）自1976年加州大学洛杉矶分校博士毕业后加入加大伯克利分校计算机系，担任该校巴地计算机科学荣誉教授。帕特森教授在2016年以杰出工程师加入谷歌， 同时担任RISC-V基金会董事会副主席。帕特森教授于过去44年职业生涯里在研究，教学，和服务领域共获颁奖项约40个，其中包括：A.M 图灵奖，C&C奖，IEEE约翰.冯.罗伊曼奖章，并当选为AAAS学会，美国国家工程院，美国国家科学院，硅谷工程名人堂，以及计算机历史博物馆的院士。帕特森教授也曾担任加州大学伯克利分校计算机科学系主任，计算研究协会主席和ACM主席。2019年，他作为发起人之一，出任清华大学清华-伯克利深圳学院大卫帕特森RISC-V国际开源实验室主任。',
            research: 'RISC，计算机体系结构，计算机网络'
          },
          education: [
            { id: 0, content: '1976, PhD, Computer Science, UCLA' },
            { id: 0, content: '1970, MS, Computer Science, UCLA' },
            { id: 0, content: '1969, AB, Mathematics, UCLA' }
          ],
          pubs: [
            {
              id: 0,
              content:
                'N. P. Jouppi, D. Yoon, G. Kurian, S. Li, N. Patil, J. Laudon, C. Young, and D. A. Patterson, "A Domain-Specific Supercomputer for Training Deep Neural Networks," <em>Communications of the ACM</em>, vol. 63, no. in press, 2020.'
            },
            {
              id: 1,
              content:
                'J. L. Hennessy and D. A. Patterson, "<a href="https://cacm.acm.org/magazines/2019/2/234352-a-new-golden-age-for-computer-architecture/fulltext">A new golden age for computer architecture.</a>," <em>Commun. ACM</em>, vol. 62, no. 2, pp. 48--60, Feb. 2019.'
            },
            {
              id: 3,
              content:
                'N. P. Jouppi, C. Young, N. Patil, D. A. Patterson, G. Agrawal, R. Bajwa, S. Bates, S. Bhatia, N. Boden, A. Borchers, and  et al, "In-datacenter performance analysis of a tensor processing unit," in <em>2017 ACM/IEEE 44th Annual International Symposium on Computer Architecture (ISCA)</em>, 2017, pp. 1--12.'
            }
          ],
          awards:
            '\
      <ul>\
        <li>\
          <a href="/Faculty/Awards/government.html#594">NAI Charles Stark Draper Prize for Engineering</a>, 2022\
        </li>\
        <li>\
          <a href="/Faculty/Awards/other.html#227">Frontiers of Knowledge Award in Information and Communication Technologies</a>, 2020\
        </li>\
        <li>\
          <a href="/Faculty/Awards/society.html#513">Textbook Excellence Award ("Texty")</a>, 2019\
         </li>\
      </ul>',
          email: 'pattrsn@cs.berkeley.edu',
          link: 'https://www2.eecs.berkeley.edu/Faculty/Homepages/patterson.html'
        },
        {
          name: '谭章熹',
          img: 'https://rioslab.org/files/image/20200512/20200512172047_60250.png',
          info: {
            position: '实验室常任主任兼委员会主席',
            brief:
              '谭章熹博士是清华-伯克利深圳学院下RIOS图灵奖实验室联合主任，身兼该学院的兼职教授，专长为计算机系统结构和 VLSI设计。在任聘以上职位前，谭章熹博士曾就职于Pure Storage，并成功领导团队交付了获奖产品 （2017 AIconics AI硬件最佳发明奖）- FlashBladeTM，使其从初期成长为带动数亿美元年收入的产品。主要客户包括 Tesla, 奔驰一级方程式赛车车队, 以及Riot Games。谭章熹博士在闪存和硬件加速器研发方面已拥有20多项美国专利，他也是开源SPARC处理器 (RAMP Gold) 的研发人。谭博士拥有清华大学电子工程系学士和硕士学位，加州大学伯克利分校计算机科学硕士和博士学位，师从以研发精简指令集计算机授勋2017年度图灵奖的大卫·帕特森教授。',
            research: 'RISC，计算机体系结构'
          },
          education: [
            { id: 0, content: '2013, Computer Science Division, University of California, Berkeley, CA 94720' },
            { id: 1, content: '2013, PhD, Computer Science Division, University of California, Berkeley, CA 94720' },
            { id: 2, content: '2005, MS, Department of Computer Science and Technology,Tsinghua University, China' },
            { id: 3, content: '2002, AB, Department of Electronic Engineering,Tsinghua University, China' }
          ],
          pubs: [
            {
              id: 0,
              content:
                'Zhangxi Tan, Zhenghao Qian, Xi Chen, Krste Asanovic, David Patterson, "DIABLO: A Warehouse-Scale Computer Network Simulator using FPGAs", 20th International Conference on Architectural Support for Programming Languages and Operating Systems (ASPLOS-2015), Istanbul, Turkey, March 2015'
            },
            {
              id: 1,
              content:
                'Zhangxi Tan, Andrew Waterman, Henry Cook, Sarah Bird, Krste Asanovic, David Patterson, "A Case for FAME: FPGA Architecture Model Execution", International Symposium on Computer Architecture (ISCA-2010), Saint-Malo, France, June 2010'
            },
            {
              id: 3,
              content:
                'Zhangxi Tan, Andrew Waterman, Rimas Avizienis, Yunsup Lee, Henry Cook, David Patterson, Krste Asanovic, "RAMP Gold: An FPGA-based Architecture Simulator for Multiprocessors", in 47th Design Automation Conference (DAC\'10), Anaheim, CA, June 2010'
            }
          ],
          awards:
            '\
      <ul>\
        <li>\
          <a href="/Faculty/Awards/government.html#594">NAI Charles Stark Draper Prize for Engineering</a>, 2022\
        </li>\
        <li>\
          <a href="/Faculty/Awards/other.html#227">Frontiers of Knowledge Award in Information and Communication Technologies</a>, 2020\
        </li>\
        <li>\
          <a href="/Faculty/Awards/society.html#513">Textbook Excellence Award ("Texty")</a>, 2019\
         </li>\
      </ul>',
          email: 'pattrsn@cs.berkeley.edu',
          link: 'https://www2.eecs.berkeley.edu/Faculty/Homepages/patterson.html'
        }
      ];

      let data = dataset[this.id > 0 ? 1 : 0];

      this.name = data.name;
      this.img = data.img;
      this.email = data.email;
      this.link = data.link;
      this.info.position = data.info.position;
      this.info.brief = data.info.brief;
      this.info.research = data.info.research;
      this.education = data.education;
      this.pubs = data.pubs;
      this.awards = data.awards;
    }
  },
  mounted() {
    this.getData();
  }
};
</script>

<style lang="scss" scoped>
.teacher-detail {
  margin: 5rem 0;
}

.edu-list {
  list-style: none;
  padding-left: 2rem;
}

.pubs,
.awards {
  margin-top: 1.5rem;
}

p {
  text-indent: 2rem;
  text-align: justify;
  line-height: 1.5rem;
}
</style>
