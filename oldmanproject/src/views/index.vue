
<template>
  <el-row :gutter="0"
          class="index_body">
    <el-col :span="19"
            style="height:100%">
      <div class="projectbody">
        <div style=" padding: 30px 30px 10px 30px">
          <el-input placeholder="请输入内容"
                    v-model="searchinput"
                    class="input-with-select"
                    v-if="searchshow">

            <el-button type="primary"
                       slot="append"
                       icon="el-icon-search"></el-button>
            <el-button type="primary"
                       slot="append"
                       icon="el-icon-close"
                       @click="changsearch"></el-button>

          </el-input>
          <div v-else>
            <el-button type="text"
                       @click="changsearch"><i class="el-icon-search"></i></el-button>
            <span class="tag">aaa</span>

          </div>

          <p class="title">早上好！小明，新的一天又开始了</p>
        </div>
        <div class="mode2">
          <DailyreminderVue></DailyreminderVue>
        </div>
        <div class="mode3">
          <DailyfootVue></DailyfootVue>
        </div>

      </div>
    </el-col>
    <el-col :span="5"
            style="height:100%"
            class="zhushoubody">
      <p class="wenzi_microphone"
         v-show="titleshow">hi，我是语音助手</p>
      <div class="talk"
           v-show="!titleshow">
        <div id="Chat_interface">

        </div>
      </div>
      <button class="btn_microphone button2 b-pink rot-135">
        <svg v-show="!iconshow"
             class="pl"
             width="240"
             height="240"
             viewBox="0 0 240 240">
          <circle class="pl__ring pl__ring--a"
                  cx="120"
                  cy="120"
                  r="105"
                  fill="none"
                  stroke="#000"
                  stroke-width="20"
                  stroke-dasharray="0 660"
                  stroke-dashoffset="-330"
                  stroke-linecap="round" />
          <circle class="pl__ring pl__ring--b"
                  cx="120"
                  cy="120"
                  r="35"
                  fill="none"
                  stroke="#000"
                  stroke-width="20"
                  stroke-dasharray="0 220"
                  stroke-dashoffset="-110"
                  stroke-linecap="round" />
          <circle class="pl__ring pl__ring--c"
                  cx="85"
                  cy="120"
                  r="70"
                  fill="none"
                  stroke="#000"
                  stroke-width="20"
                  stroke-dasharray="0 440"
                  stroke-linecap="round" />
          <circle class="pl__ring pl__ring--d"
                  cx="155"
                  cy="120"
                  r="70"
                  fill="none"
                  stroke="#000"
                  stroke-width="20"
                  stroke-dasharray="0 440"
                  stroke-linecap="round" />
        </svg>

        <i class="el-icon-microphone"
           v-show="iconshow"
           @click="btnclick"></i>
      </button>
    </el-col>
  </el-row>

</template>
<script>
import DailyreminderVue from './index/Daily_reminder.vue'
import DailyfootVue from './index/Daily_reminder_foot/Dailyfoot.vue'
import { answer, Question } from "../assets/js/index"
export default {
  data () {
    return {
      searchinput: '',
      searchshow: false,
      titleshow: true,
      iconshow: true
    }
  },
  methods: {
    changsearch () {
      this.searchshow = !this.searchshow
    },

    //语音助手点击
    btnclick () {
      this.titleshow = false
      this.iconshow = false

      this.$forceUpdate();
      let s1 = setInterval(() => {
        Question("你好！")
        clearInterval(s1)
        this.iconshow = true
        let s2 = setInterval(() => {

          answer("你好！")
          this.$forceUpdate();

          clearInterval(s2)
        }, 2000);
      }, 2000);



    }
  },
  components: {
    DailyreminderVue,
    DailyfootVue
  }
}
</script>
<style lang="scss" scoped>
@import url("../assets/css/index.css");
.index_body {
  border-top-left-radius: 40px;
  border-bottom-left-radius: 40px;
  background: #161925;
  height: 100%;
  border: none;
}
.zhushoubody {
  position: relative;
  height: 100%;
  text-align: center !important;
  color: #ffffff;
}
.projectbody {
  height: 100%;
  background-color: #f5f6fb;
  border-radius: 37px;
}

.mode2 {
  height: 60%;
}
.mode3 {
  margin-top: 20px;
  height: 13%;
}
//搜索框
.el-icon-search {
  font-size: 23px;
  font-weight: 600;
  color: #6c73c3;
}
.tag {
  padding: 5px 15px 5px 15px;
  border-radius: 30px;
  background: #ffffff;
  margin-left: 30px;
  color: #d2d5e1;
}
.title {
  margin: 8px;
  font-size: 40px;
  font-weight: 700;
  color: #5d62a2;
}

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
