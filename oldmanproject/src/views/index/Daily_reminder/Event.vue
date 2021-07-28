<template>
  <div>

    <div class="Event_body"
         ref="event">
      <p class="event_title"
         ref="event_title">每 日 提 醒</p>
      <div ref="choose_btn_list"
           class="choose_btn_list">
        <el-button type="text"
                   class="btn_day"
                   @click="choose_btn($event)"
                   id="yesterday">昨天</el-button>
        <el-button type="text"
                   class="btn_day btn_active"
                   @click="choose_btn($event)"
                   id="now">今天</el-button>
        <el-button type="text"
                   class="btn_day"
                   @click="choose_btn($event)"
                   id="tomorrow">明天</el-button>
        <el-button type="text"
                   class="btn_day"
                   @click="choose_btn($event)"
                   id="aftertomorrow">后天</el-button>
      </div>
      <div class="block"
           :style="{'height':this.cardheight
             ,'padding':'5px'}">
        <el-timeline>
          <el-timeline-item v-for="(activity, index) in daydata"
                            :key="index"
                            :icon="activity.icon"
                            :type="activity.type"
                            :color="activity.color"
                            :size="activity.size">
            <el-card :class="activity.Complete?'Eventcard cardchecked':'Eventcard '">
              <el-row :gutter="10">
                <el-col :span="21">
                  <p class="time">{{activity.timestamp}}</p>
                  <p class="event">{{activity.content}}</p>
                </el-col>
                <el-col :span="3"
                        style="position: relative;">
                  <!-- <input type="checkbox"
                       class="Complete_checkbox"
                       v-model="activity.Complete"
                       @change="checkchange(index)"
                       id="checked">
                <label for="checked"
                       class="label"></label> -->
                  <div class="Complete_checkbox">
                    <el-checkbox v-model="activity.Complete"
                                 @change="checkchange(index)"></el-checkbox>
                  </div>

                </el-col>
              </el-row>

            </el-card>
          </el-timeline-item>
        </el-timeline>
      </div>

    </div>
    <MessageVue :checked="checked"
                @messagechange="messagechange"></MessageVue>
  </div>

</template>
<script>
import MessageVue from './Dialog/Message.vue'

export default {
  components: {
    MessageVue
  },
  data () {
    return {
      activeName: 'first',
      cardheight: '',

      //提醒弹窗
      checked: true,

      //事件数据
      daydata: [{
        content: '支持使用图标',
        timestamp: '2018-04-12 20:46',

        Complete: false
      }, {
        content: '支持自定义颜色',
        timestamp: '2018-04-03 20:46',
        size: 'large',
        Complete: true
      }, {
        content: '支持自定义尺寸',
        timestamp: '2018-04-03 20:46',
        size: 'large',
        Complete: false
      }, {
        content: '默认样式的节点',
        timestamp: '2018-04-03 20:46',
        Complete: true
      }]

    }
  },
  methods: {

    choose_btn (event) {
      let ss = event.srcElement.parentNode.id
      if (ss === '') {
        return
      }
      document.getElementsByClassName('btn_active')[0].classList.remove('btn_active')
      document.getElementById(event.srcElement.parentNode.id).classList.add('btn_active')
    },
    checkchange (index) {
      console.log(index)
    },

    //接收提醒是否关闭
    messagechange (value) {
      this.checked = value
    }
  },
  mounted () {
    var height = parseInt(this.$refs.event.offsetHeight) - parseInt(this.$refs.event_title.offsetHeight) - parseInt(this.$refs.choose_btn_list.offsetHeight) - 200
    this.cardheight = height + 'px'
    console.log(this.cardheight)
    console.log(parseInt(this.$refs.event_title.offsetHeight))
  }
}
</script>
<style lang="scss" scoped>
.Event_body {
  padding: 5px 15px 0px 25px;
  height: 98%;
  .event_title {
    font-size: 28px;
    font-weight: 600;
    margin: 0px 0px 0 15px;
    color: #5d62a2;
  }
  ul {
    padding-inline-start: 20px;
  }
}
.block {
  overflow: auto;
}

.cardchecked {
  box-shadow: none;
  background: #f7f7f7;
}
//时间线线段修改
/deep/.el-timeline-item__tail {
  left: 3px;
  border-left: 4px solid #cacdde;
}
/deep/.el-timeline-item__node--large {
  left: -9px;
  width: 20px;
  height: 20px;
  border: 4px solid #ffcabb;
  background: #ffedd3 !important;
}
/deep/.el-timeline-item__node {
  background: #5d62a2;
}
//选中框
.Complete_checkbox {
  position: absolute;
  top: 25px;
}

// .Complete_checkbox {
//   width: 25px;
//   height: 25px;
//   visibility: hidden;
// }
.label {
  display: block;
  width: 20px;
  height: 20px;
  line-height: 20px;
  cursor: pointer;
  border-radius: 7px;
  border: 2px solid #5d62a2; /*改变复选框的边框颜色也可以不要边框*/
}

/* checked 预先选定复选框或单选按钮。*/
.Complete_checkbox:checked + label:before {
  display: block;

  content: "\2665";

  text-align: center;

  font-size: 20px;

  color: red;

  background: blue;
}

//时间线卡片修改
.Eventcard {
  border-radius: 15px;
  margin: 0 5px 0 15px;
}

//tab标签卡样式修改
.btn_day {
  color: #b0b4ca;
  font-size: 16px;
  font-weight: 600;
  padding: 0 10px;
}
.btn_active {
  color: #5961ba;
}
.choose_btn_list {
  padding: 15px;
}

.time {
  font-size: 16px;
  color: #b0b4ca;
  margin: 5px;
}
.event {
  font-size: 16px;
  color: #5d62a2;
  font-weight: 600;
  margin: 5px;
}
</style>
