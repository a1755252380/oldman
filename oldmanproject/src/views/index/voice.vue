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
import Recorder from 'recorder-core/recorder.mp3.min'
import 'recorder-core/src/engine/wav'
export default {
  data () {
    return {
      titleshow: true,
      iconshow: true,
      rec: null,
      //判断是否有麦克风权限
      get: true,
      talkquestion: " ",
      talkanswer: " ",
      voiceWebSocket: null
    };
  },
  created () {

    this.rec = Recorder({ //本配置参数请参考下面的文档，有详细介绍
      type: "wav", sampleRate: 16000, bitRate: 16 //mp3格式，指定采样率hz、比特率kbps，其他参数使用默认配置；注意：是数字的参数必须提供数字，不要用字符串；需要使用的type类型，需提前把格式支持文件加载进来，比如使用wav格式需要提前加载wav.js编码引擎
      , onProcess: function (buffers, powerLevel, bufferDuration, bufferSampleRate, newBufferIdx, asyncEnd) {
        //录音实时回调，大约1秒调用12次本回调
        //可利用extensions/waveview.js扩展实时绘制波形
        //可利用extensions/sonic.js扩展实时变速变调，此扩展计算量巨大，onProcess需要返回true开启异步模式
      }
    });



  },
  mounted () {
    if ('WebSocket' in window) {
      this.voiceWebSocket = new WebSocket("ws://127.0.0.1:8000/ws/chat")
    } else {
      alert('该浏览器不支持websocket');
    }

    this.voiceWebSocket.onopen = function (ev) {
      console.log('voice建立连接');
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

      this.$forceUpdate()

      this.handleStart()

    },
    //鼠标松开
    btnout () {
      this.iconshow = true

      this.handlePause()


      if (this.get) {
        this.voiceWebSocket.onmessage = this.voiceimgonmessage
        var ele = document.getElementById('talk');
        ele.scrollTop = ele.scrollHeight;
      } else {
        return
      }

    },

    // 开始录音
    handleStart () {
      let that = this.rec
      this.rec.open(function () {//打开麦克风授权获得相关资源
        //dialog&&dialog.Cancel(); 如果开启了弹框，此处需要取消
        that.start() //此处可以立即开始录音，但不建议这样编写，因为open是一个延迟漫长的操作，通过两次用户操作来分别调用open和start是推荐的最佳流程
        console.log("开始录音了")
      }, function (msg, isUserNotAllow) {//用户拒绝未授权或不支持
        //dialog&&dialog.Cancel(); 如果开启了弹框，此处需要取消
        console.log((isUserNotAllow ? "UserNotAllow，" : "") + "无法录音:" + msg);
      });

    },

    //结束录音 并转码base64格式传递给后台进行语音识别
    handlePause () {
      let that = this.rec
      let stock = this.voiceWebSocket

      this.rec.stop(function (blob, duration) {

        let a = new FileReader();
        a.readAsDataURL(blob);
        a.onload = function () {
          // console.log(a.result)
          stock.send(a.result);
        }

        // console.log(blob, (window.URL || webkitURL).createObjectURL(blob), "时长:" + duration + "ms");
        that.close();//释放录音资源，当然可以不释放，后面可以连续调用start；但不释放时系统或浏览器会一直提示在录音，最佳操作是录完就close掉
        that = null;

        //已经拿到blob文件对象想干嘛就干嘛：立即播放、上传


      }, function (msg) {
        console.log("录音失败:" + msg);
        that.close();//可以通过stop方法的第3个参数来自动调用close
        that = null;
      });
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