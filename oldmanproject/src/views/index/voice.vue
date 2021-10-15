<template>
  <div style="height:100%">
    <p
      class="wenzi_microphone"
      v-show="titleshow"
    >hi，我是语音助手</p>
    <div
      class="talk"
      id="talk"
      v-show="!titleshow"
    >
      <div id="Chat_interface">

      </div>
    </div>
    <button
      class="btn_microphone button2 b-pink rot-135"
      @mousedown="btnclick"
      @mouseup="btnout"
    >
      <svg
        v-show="!iconshow"
        class="pl"
        width="240"
        height="240"
        viewBox="0 0 240 240"
      >
        <circle
          class="pl__ring pl__ring--a"
          cx="120"
          cy="120"
          r="105"
          fill="none"
          stroke="#000"
          stroke-width="20"
          stroke-dasharray="0 660"
          stroke-dashoffset="-330"
          stroke-linecap="round"
        />
        <circle
          class="pl__ring pl__ring--b"
          cx="120"
          cy="120"
          r="35"
          fill="none"
          stroke="#000"
          stroke-width="20"
          stroke-dasharray="0 220"
          stroke-dashoffset="-110"
          stroke-linecap="round"
        />
        <circle
          class="pl__ring pl__ring--c"
          cx="85"
          cy="120"
          r="70"
          fill="none"
          stroke="#000"
          stroke-width="20"
          stroke-dasharray="0 440"
          stroke-linecap="round"
        />
        <circle
          class="pl__ring pl__ring--d"
          cx="155"
          cy="120"
          r="70"
          fill="none"
          stroke="#000"
          stroke-width="20"
          stroke-dasharray="0 440"
          stroke-linecap="round"
        />
      </svg>

      <i
        class="el-icon-microphone"
        v-show="iconshow"
      ></i>
    </button>
  </div>
</template>
<script>

import { answer, Question } from "../../assets/js/index"
import "https://cdn.jsdelivr.net/gh/xiangyuecn/Recorder@latest/src/recorder-core.js"
export default {
  data () {
    return {
      titleshow: true,
      iconshow: true,
      recorder: null,
      playTime: 0,
      timer: null,
      src: null,
      voiceWebSocket: null,
      //判断是否有麦克风权限
      get: true,
      talkquestion: " ",
      talkanswer: " ",
    };
  },
  created () {

    this.recorder = new Recorder({
      sampleBits: 16,                 // 采样位数，支持 8 或 16，默认是16
      sampleRate: 16000,              // 采样率，支持 11025、16000、22050、24000、44100、48000，根据浏览器默认值，我的chrome是48000
      numChannels: 1,                 // 声道，支持 1 或 2， 默认是1
      compiling: false,//(0.x版本中生效, 1.x增加中)  // 是否边录边转换，默认是false
    });

  },
  mounted () {
    if ('WebSocket' in window) {
      this.voiceWebSocket = new WebSocket('ws://127.0.0.1:8000/ws/chat');
    } else {
      alert('该浏览器不支持websocket');
    }
    this.voiceWebSocket.onopen = function (ev) {
      console.log('建立连接');
    }
  },
  beforeDestroy () {
    this.voiceWebSocket.close();
    this.voiceWebSocket.onclose = function (ev) {
      console.log('连接关闭');
    }
  },
  methods: {
    //语音助手点击
    btnclick () {
      console.log("按下了")
      this.titleshow = false
      this.iconshow = false

      this.$forceUpdate();
      //   let s1 = setInterval(() => {

      //     clearInterval(s1)

      //   }, 2000);

      this.handleStart()

    },
    //鼠标松开
    btnout () {
      this.iconshow = true
      //   let s2 = setInterval(() => {
      this.handlePause()


      if (this.get) {
        this.voiceWebSocket.onmessage = this.voiceimgonmessage
        var ele = document.getElementById('talk');
        ele.scrollTop = ele.scrollHeight;
      } else {
        return
      }
      //     clearInterval(s2)
      //   }, 2000);

    },

    // 开始录音
    handleStart () {

      this.recorder.getPermission().then(() => {
        console.log('开始录音')
        this.recorder.start() // 开始录音
      }, (error) => {
        this.$message({
          message: '请先连接麦克风',
          type: 'info'
        })
        this.get = false
        console.log(`${error.name} : ${error.message}`)

      })
    },
    handlePause () {
      console.log('暂停录音')
      this.recorder.pause() // 暂停录音
      const blob = this.recorder.getWAVBlob()// 获取wav格式音频数据
      // 此处获取到blob对象后需要设置fileName满足当前项目上传需求，其它项目可直接传把blob作为file塞入formData

      this.recorder.downloadWAV("a")
      const newbolb = new Blob([blob], { type: 'audio/wav' })

      const fileOfBlob = new File([newbolb], new Date().getTime() + '.wav')
      let reader = new FileReader()
      reader.readAsDataURL(blob)
      reader.onload = () => {
        this.voiceWebSocket.send(0)
        // console.log(e.target.result)
        this.voiceWebSocket.send(reader.result)
      }



    },
    //结束识别
    voicedestroy () {
      this.voiceWebSocket.close();
      this.voiceWebSocket.onclose = function (ev) {
        console.log('连接关闭');
      }

    },

    //开始识别
    voicegetImg (fileOfBlob) {
      console.log("开始通信");
      this.voiceWebSocket.send(fileOfBlob)



    },
    voiceimgonmessage (data) {

      let data1 = JSON.parse(data.data);
      console.log('收到消息----------');
      console.log(data1.recon_txt)
      this.talkquestion = data1.recon_txt
      this.talkanswer = data1.ret_answer

      if (this.talkquestion === "") {
        Question("...")
      } else {
        console.log(this.talkquestion)
        Question(this.talkquestion)
        this.talkquestion = ""
      }



      setTimeout(() => {
        answer(this.talkanswer)
        this.talkanswer = ""
      }, 500);

      this.$forceUpdate();
      return;
    }

  },
}
</script>
<style lang="scss" scoped>
@import url("../../assets/css/index.css");
//语音助手

//聊天界面
.talk {
  height: 70%;
  // background: red;
  overflow: auto;
}
.wenzi_microphone {
  margin: 50% auto;
  font-size: 25px;
  text-align: center;
}
.btn_microphone {
  color: #ffffff;
  border-radius: 50%;
  background: transparent;
  border: none;
  font-size: 25px;
  width: 70px;
  height: 70px;
  position: absolute;
  bottom: 13%;
  transition: all 0.9s;
  filter: hue-rotate(0deg);
  animation: ripple 0.9s linear infinite;
}
.rot-135:hover {
  filter: hue-rotate(135deg);
}
.b-pink,
.b-pink:before {
  background: rgba(231, 72, 234, 1);
  background: -moz-linear-gradient(45deg, rgba(231, 72, 234, 1) 0%, rgba(75, 26, 188, 1) 100%);
  background: -webkit-gradient(
    left bottom,
    right top,
    color-stop(0%, rgba(231, 72, 234, 1)),
    color-stop(100%, rgba(75, 26, 188, 1))
  );
  background: -webkit-linear-gradient(45deg, rgba(231, 72, 234, 1) 0%, rgba(75, 26, 188, 1) 100%);
  background: -o-linear-gradient(45deg, rgba(231, 72, 234, 1) 0%, rgba(75, 26, 188, 1) 100%);
  background: -ms-linear-gradient(45deg, rgba(231, 72, 234, 1) 0%, rgba(75, 26, 188, 1) 100%);
  background: linear-gradient(45deg, rgba(231, 72, 234, 1) 0%, rgba(75, 26, 188, 1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#e748ea', endColorstr='#4b1abc', GradientType=1 );
}
/* dalgalanma efekti */
@keyframes ripple {
  0% {
    box-shadow: 0 0 0 0 rgba(115, 38, 200, 0.2), 0 0 0 20px rgba(115, 38, 200, 0.2),
      0 0 0 40px rgba(115, 38, 200, 0.2), 0 0 0 60px rgba(115, 38, 200, 0.2);
  }
  100% {
    box-shadow: 0 0 0 20px rgba(115, 38, 200, 0.2), 0 0 0 40px rgba(115, 38, 200, 0.2),
      0 0 0 60px rgba(115, 38, 200, 0.2), 0 0 0 80px rgba(115, 38, 200, 0);
  }
}
</style>