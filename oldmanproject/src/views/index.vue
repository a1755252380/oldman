
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
        <CameraVue></CameraVue>
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


import CameraVue from './index/Camera.vue'
import voiceVue from './index/voice.vue'
export default {
  data () {
    return {




    }
  },

  methods: {


  },
  components: {
    CameraVue,
    voiceVue
  },
  mounted () {
    if ('WebSocket' in window) {
      // this.$store.commit('setwebstock', new WebSocket('ws://127.0.0.1:8000/ws/chat'));
    } else {
      alert('该浏览器不支持websocket');
    }
  },
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

.mode2 {
  height: 60%;
}
.mode3 {
  margin-top: 20px;
  height: 13%;
}
</style>
