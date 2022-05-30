<template>
  <b-container>
    <div class="intro-area">
      <b-row>
        <b-col lg>
          <h5 style="align: center">RISC-V 国际开源实验室</h5>
          <p style="text-indent: 2rem">
            RISC-V 国际开源实验室 (RIOS实验室)
            创立于2019年。作为清华-伯克利深圳研究院不可或缺的组成部分，RIOS踏上创新之路，把加州大学伯克利分校研发的RISC-V开源指令集CPU及其软硬件生态体系延伸到世界各地。肩负RISC-V基金会主要成员的使命，我们旨在帮助开发者缩短设计时间和降低芯片成本从而展示对开源平台的承诺。
          </p>
          <b-row>
            <b-col align="center">
              <img class="seal" src="@/assets/logos/tsinghua.svg" alt="清华校标组合" />
            </b-col>
            <b-col align="center">
              <img class="seal" src="@/assets/logos/berkeley.svg" alt="伯克利校标组合" />
            </b-col>
          </b-row>
        </b-col>
        <b-col lg>
          <div class="pic">
            <b-img src="@/assets/pictures/temp_intro.png" fluid></b-img>
          </div>
        </b-col>
      </b-row>
    </div>
  </b-container>
</template>

<script>
export default {
  name: 'LabIntro'
};
</script>

<style lang="scss" scoped>
.intro-area {
  margin: 5rem 0;
}
.seal {
  height: 10rem;
}
.pic {
  margin-top: 2rem;
}
</style>
