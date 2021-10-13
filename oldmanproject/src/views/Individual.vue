<template>
  <el-row
    :gutter="0"
    class="index_body"
  >
    <el-col
      :span="19"
      style="height:100%"
    >
      <div class="projectbody">
      </div>
    </el-col>
    <el-col
      :span="5"
      style="height:100%"
      class="zhushoubody"
    >
      <voiceVue></voiceVue>
    </el-col>
  </el-row>
</template>
<script>
import voiceVue from './index/voice.vue'
export default {
  components: {
    voiceVue
  }
}
</script>
<style lang="scss" scoped>
.index_body {
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  background: #161925;

  height: 100%;
  border: none;
  overflow-y: hidden;
}
.zhushoubody {
  position: relative;
  height: 100%;
  text-align: center !important;
  color: #ffffff;
}
.projectbody {
  height: 100%;
  border-color: #f5f6fb;
  background-color: #f5f6fb;
  border-radius: 30px;
  z-index: 88;
}
</style>