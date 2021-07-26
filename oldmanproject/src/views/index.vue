
<template>
  <el-row :gutter="0"
          class="index_body">
    <el-col :span="18"
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
    <el-col :span="6"
            style="height:100%"
            class="zhushoubody">
      aaa

    </el-col>
  </el-row>

</template>
<script>
import DailyreminderVue from './index/Daily_reminder.vue'
import DailyfootVue from './index/Daily_reminder_foot/Dailyfoot.vue'

export default {
  data () {
    return {
      searchinput: '',
      searchshow: false
    }
  },
  methods: {
    changsearch () {
      this.searchshow = !this.searchshow
    }
  },
  components: {
    DailyreminderVue,
    DailyfootVue
  }
}
</script>
<style lang="scss" scoped>
.index_body {
  border-top-left-radius: 40px;
  border-bottom-left-radius: 40px;
  background: #161925;
  height: 100%;
  border: none;
}
.zhushoubody {
  height: 100%;
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
</style>
