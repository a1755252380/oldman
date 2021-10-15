<template>
  <div
    style=""
    class="camera_body"
  >
    <el-row
      :gutter="10"
      style="padding: 25px; position: relative"
    >
      <el-col :span="18">
        <img
          :src="Camera_img"
          alt=""
          style="width: 100%"
          class="Camera_img"
        />
        <div
          style=""
          class="Operation_div"
        >
          <div class="btn_div">
            <el-button
              type=""
              class="begin_btn"
              @click="openIdentify"
            >开始识别</el-button>
            <el-button
              type=""
              class="end_btn"
              @click="closeIdentify"
            >结束识别</el-button>
          </div>

          <div class="check_div">
            <el-checkbox
              v-model="Frame"
              class="check_choose"
              @change="showFrame"
            >显示边框</el-checkbox>
            <el-checkbox
              v-model="Dimension"
              class="check_choose"
              @change="showDimension"
            >显标标注</el-checkbox>
          </div>
        </div>
        <h4 style="font-weight: bold; font-size: 18px; line-height: 23px; color: #5d62a2">
          图像识别
        </h4>
        <recognitionVue :behavior2="behavior2" style="height:30%"></recognitionVue>
      </el-col>
      <el-col
        :span="6"
        style="height:100%"
      >
        <IdentifymodeVue></IdentifymodeVue>
        <h4 style="font-weight: bold; font-size: 18px; line-height: 23px; color: #5d62a2">
          识别时间
        </h4>
        <IdentifyresultVue :behavior="behavior" style="height：30%"></IdentifyresultVue>
        <CameraMasterVue style="height：30%"></CameraMasterVue>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import CameraMasterVue from './CameraMaster.vue'

import IdentifymodeVue from './Identifymode.vue'
import IdentifyresultVue from './Identifyresult.vue'
import recognitionVue from './recognition.vue'


export default {
  data () {
    return {

      //主图片数据
      Camera_img: require("../../assets/img/a.jpg"),
      //是否显示标注
      Dimension: false,

      //是否显示边框
      Frame: false,

      //camsewebstock
      camerawebstock: null,


      //行为识别
      behavior: { time: "00:00:00", mode: "行为异常", type: 1 },
      behavior2:{ 
        img: require("../../assets/img/a.jpg"), 
        time: "00:00:55", 
        Behavior: "行为正常" 
        }
    }
  },
  mounted () {
    if ('WebSocket' in window) {
      this.camerawebstock = new WebSocket("ws://127.0.0.1:8000/ws/video/wms/")
    } else {
      alert('该浏览器不支持websocket');
    }
 
    this.camerawebstock.onopen = function (ev) {
      console.log('camerawebstock建立连接');
    
    }
   
    this.camerawebstock.onmessage = this.cameraimgonmessage
  },
  destroyed () {
    this.camerawebstock.close();
    this.camerawebstock.onclose = function (ev) {
      console.log('camerawebstock连接关闭');
    }
  },
  methods: {
    //开启识别 type算法类型识别
    openIdentify (type) {
      console.log("开启识别！！" + type)
      this.camerawebstock.send("open")
    },
    closeIdentify () {
      console.log("关闭识别")
      // this.camerawebstock.send("close")
      this.camerawebstock.close();
      this.camerawebstock.onclose = function (ev) {
        console.log('camerawebstock连接关闭');
    }
     let close= new WebSocket("ws://127.0.0.1:8000/ws/video/close/")
     close.onopen = function (ev) {
      console.log('close建立连接');
    
    }
     close.send("close")
    },

    //显示边框
    showFrame () {
      if (this.Frame) {
        console.log("显示边框")
      } else {
        console.log("关闭显示边框")
      }

    },
    //显示标注
    showDimension () {
      if (this.Dimension) {
        console.log("显示标注！！")
      } else {
        console.log("显关闭示标注！！")
      }

    },

    //连接通信
    cameraimgonmessage (data) {

      console.log(data.data)
      console.log('收到消息----------');
      let data5=JSON.parse(data.data)
      this.Camera_img = data5.message
      let mode=""
      if(data5.type == 1){
        this.behavior={ time: data5.time, mode:data5.error, type: data5.type },
      this.behavior2={ 
        img: data5.message, 
        time: data5.time, 
        Behavior: data5.error 
        }
      }
      
      // console.log(data5)
      this.$forceUpdate();
    }
  },

  components: {
    recognitionVue,
    IdentifymodeVue,
    IdentifyresultVue,
    CameraMasterVue
  }
}
</script>
<style lang="scss" scoped>
.camera_body {
  width: 100%;
  height: 100%;
  position: relative;
  .Camera_img {
    border-radius: 15px;
    height: 30%;
  }

  //图片展示操作按钮
  .Operation_div {
    width: 100%;

    display: block;
    margin: 10px 0;
    .btn_div {
      display: inline-block;
      position: relative;
      left: 0;
      .begin_btn {
        background: #be357c;
        border-color: #be357c;
        border-radius: 10px;
        color: #fff;
        padding: 15px 40px;
      }
      .begin_btn:hover {
        background: #5d62a2;
        border-color: #5d62a2;
      }
      .end_btn {
        background: #fff;
        color: #be357c;
        border-color: #be357c;
        border-radius: 10px;
        padding: 15px 40px;
      }
      .end_btn:hover {
        background: #5d62a2;
        border-color: #5d62a2;
        color: #fff;
      }
    }
    .check_div {
      display: inline-block;
      float: right;
      text-align: center;
      padding-top: 13px;
      .check_choose {
        color: #a9acce;
        font-size: 14px;
        line-height: 18px;
        font-weight: 600;
      }
    }
  }
}
@media (min-width: 768px) and (max-width: 979px) {
  .begin_btn {
    background: #be357c;
    border-color: #be357c;
    border-radius: 10px;
    color: #fff;
    padding: 10px 30px;
  }
  .end_btn {
    background: #fff;
    color: #be357c;
    border-color: #be357c;
    border-radius: 10px;
    padding: 10px 30px;
  }
}
</style>