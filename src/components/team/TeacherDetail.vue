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
        <h6>研究方向</h6>
        <p>{{ info.research }}</p>
        <h6>教育经历</h6>
        <ul class="edu-list">
          <li v-for="edu in education" :key="edu.id">{{ edu.content }}</li>
        </ul>
        <h6>联系信息</h6>
        <font-awesome-icon icon="envelope" /> <a :href="'mailto:' + email">Mailto:{{ email }}</a>
        <br />
        <font-awesome-icon icon="link" /> <a :href="link">{{ link }}</a>
      </b-col>
    </b-row>
    <div class="pubs">
      <h5>研究成果</h5>
      <b-list-group flush>
        <b-list-group-item v-for="pub in pubs" :key="pub.id">
          <span v-html="pub.content"></span>
        </b-list-group-item>
      </b-list-group>
    </div>
    <div class="awards">
      <h5>获得奖项</h5>
      <span v-html="awards"></span>
    </div>
    <!-- <b-row>
      <b-col md="4">
        <h6>联系信息</h6>
        <font-awesome-icon icon="envelope" /> <a :href="'mailto:' + email">Mailto:{{ email }}</a>
        <br />
        <font-awesome-icon icon="link" /> <a :href="link"> Homepage </a>
      </b-col>
      <b-col md="8">
      </b-col>
    </b-row> -->
  </div>
</template>

<script>
export default {
  name: 'TeacherDetail',
  props: ['id'],
  data() {
    return {
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
    };
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
