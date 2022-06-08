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
        <h6>{{ $t('team.detail.contact') }}</h6>
        <font-awesome-icon icon="envelope" /> <a :href="'mailto:' + email">Mailto:{{ email }}</a>
        <br />
        <font-awesome-icon v-if="link" icon="link" /> <a :href="link">{{ link }}</a>
      </b-col>
    </b-row>
    <div class="custom-area">
      <h5>{{ $t('team.detail.education') }}</h5>
      <hr />
      <ul class="edu-list">
        <li v-for="(edu, i) in education" :key="i">{{ edu }}</li>
      </ul>
      <span v-html="custom"></span>
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
      custom: ''
    };
  },
  methods: {
    getData() {
      let dataset = [
        {
          name: 'David Patterson',
          img: require('@/assets/pictures/team0.jpeg'),
          info: {
            position: 'Director',
            brief:
              'David Patterson is the Pardee Professor of Computer Science, Emeritus at the University of California at Berkeley, which he joined after graduating from UCLA in 1976. He joined Google in 2016. He is currently Vice-Chair of the Board of Directors of the RISC-V Foundation. Professor Patterson has received about 40 awards in the fields of research, teaching, and service in the past 40 years, including: A.M. Turing Award, C&C Award, IEEE John von Reumann Medal. He was also elected to both AAAS societies, the National Academy of Engineering, the National Academy of Sciences, the Silicon Valley Engineering Hall of Fame, and to be a Fellow of the Computer History Museum. In 2019, as one of the initiators, he served as the director of the David Patterson RISC-V International Open Source Laboratory of Tsinghua-Berkeley Shenzhen Institude of Tsinghua University.',
            research:
              'Computer Architecture & Engineering, Computer Architecture and Systems: performance, security, RISC-V'
          },
          email: 'pattrsn@cs.berkeley.edu',
          link: 'https://www2.eecs.berkeley.edu/Faculty/Homepages/patterson.html',
          education: [
            '1976, PhD, Computer Science, UCLA',
            '1970, MS, Computer Science, UCLA',
            '1969, AB, Mathematics, UCLA'
          ],
          custom: require('@/assets/temp/0.json')
        },
        {
          name: 'Zhangxi Tan',
          img: require('@/assets/pictures/team1.jpeg'),
          info: {
            position: 'Co-Director',
            brief:
              "Dr. Tan studied computer architecture under the tutelage of Professor David Patterson, the founder of RISC and a Turing Award winner, and is the only student from mainland China who is engaged in computer architecture research.. As a member of the RISC-V original project team, Dr. Tan participated in the research and development and global promotion of the RISC-V instruction set standard throughout the process. During his academic research and practice, Dr. Tan has obtained dozens of US invention patents, and has more than 20 patents on hardware accelerators and flash memory alone. Dr. Tan is also the inventor of the open source SPARC processor (RAMP Gold), the predecessor of the Berkeley RISC-V project. Dr. Tan has published several papers on chip architecture in top academic journals and top conferences in the industry, and has been invited to give academic speeches at top conferences in the world for many times. After graduating from UCB, Dr. Tan joined Pure Storage Corporation (NYSE: PSTG) as a founding engineer, and was its first chip design engineer and the earliest principal design engineer of its key product FlashbladeTM. After that, Dr. Tan founded OURS Technology. In 2018, Dr. Tan turned the focus of chip technology teaching and enterprises back to China, taught at the TBSI and founded RiVAI in Shenzhen. He is committed to building a world-wide complete ecosystem of open source chips with Shenzhen as the center, realizing the independent control of China's chip technology and the incubation of local talents.",
            research:
              'Computer architecture and networks, Microprocessor designs, non-volatile memory systems, SW/HW co-design and implementation of computer system with Field Programmable Gate Array (FPGA) and ASIC'
          },
          email: 'xtan@rioslab.org',
          link: 'http://www.cs.berkeley.edu/~xtan',
          education: [
            '2013, Computer Science Division, University of California, Berkeley, CA 94720',
            '2013, PhD, Computer Science Division, University of California, Berkeley, CA 94720',
            '2005, MS, Department of Computer Science and Technology,Tsinghua University, China',
            '2002, AB, Department of Electronic Engineering,Tsinghua University, China'
          ],
          custom: require('@/assets/temp/1.json')
        },
        {
          name: 'Weiwei Chen',
          img: require('@/assets/pictures/team2.jpeg'),
          info: {
            position: 'Professor, Engineer',
            brief:
              'Associate professor, supervisor of postgraduate, former member of Youth Innovation Promotion Association of Chinese Academy of Sciences Senior member of the Optical Engineering Society of China,expert of the Zhongguancun Cloud Computing Industry Alliance Former chief scientist of artificial intelligence company (CTO level), and former first leader of the 3D NAND chip design team of China. 20+ years of IC industry experience, 7+ years of AI industry experience, led the team to complete 30+ chip/IP core design, served as the technical leader of 5+ National Major Projects, and supervised 30+ students. 70+ Patents(CN and US), software copyrights and articles.',
            research:
              'Main research interests for computing in memory chip architecture and design technology, AI chip design nano-memory IC design methodology, and EDA design methodology'
          },
          email: 'weiw.chen@rioslab.org',
          link: null,
          education: [
            'PhD in Microelectronics, University of Chinese Academy of Sciences, Institute of Microelectronics',
            'M.S. in Microelectronics, Tsinghua University, Institute of Microelectronics',
            'Bachelor of Electronic Science and Technology, Department of Electronics Engineering, Tsinghua University'
          ],
          custom: require('@/assets/temp/2.json')
        }
      ];

      let data = dataset[this.id];

      this.name = data.name;
      this.img = data.img;
      this.email = data.email;
      this.link = data.link;
      this.info.position = data.info.position;
      this.info.brief = data.info.brief;
      this.info.research = data.info.research;
      this.education = data.education;
      this.custom = data.custom;
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
  padding-left: 1rem;
}

p {
  text-align: justify;
  line-height: 1.5rem;
}

.custom-area {
  margin-top: 3rem;
}
</style>
