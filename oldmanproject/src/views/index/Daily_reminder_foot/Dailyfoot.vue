<template>
  <div>
    <el-row :gutter="0"
            class="Dailygoot_body">

      <el-col :span="7"
              class="Dailygoot_tag">
        <el-row :gutter="0"
                class="Dailygoot_tag_wenzi">
          <el-col :span="6">
            <el-image class="icon"
                      :src="icon[0].icon"></el-image>

          </el-col>
          <el-col :span="18">
            <p class="reminder_english">Disease to remind</p>
            <div class="reminder">用药提醒

              <el-button class="reminder_btn"
                         size="mini"
                         circle
                         @click="addMedication()">
                <i class="el-icon-plus reminder_btn_i"></i>
              </el-button>
            </div>
            <p class="reminder_wenzi">最近+0提现继续保持下去哦</p>
          </el-col>

        </el-row>
      </el-col>
      <el-col :span="1">&nbsp;</el-col>
      <el-col :span="7"
              class="Dailygoot_tag">
        <el-row :gutter="0"
                class="Dailygoot_tag_wenzi">
          <el-col :span="6">
            <el-image class="icon"
                      :src="icon[1].icon"
                      style="background:#CFF8F9"></el-image>

          </el-col>
          <el-col :span="18">
            <p class="reminder_english">Life remind</p>
            <div class="reminder">生活提醒

            </div>
            <p class="reminder_wenzi">+12</p>
          </el-col>

        </el-row>
      </el-col>
      <el-col :span="1">&nbsp;</el-col>
      <el-col :span="7"
              class="Dailygoot_tag">
        <el-row :gutter="0"
                class="Dailygoot_tag_wenzi">
          <el-col :span="6">
            <el-image class="icon"
                      style="background:#FFEDD3"
                      :src="icon[2].icon"></el-image>

          </el-col>
          <el-col :span="18">
            <p class="reminder_english">custom remind</p>
            <div class="reminder">自定义提醒

              <el-button class="reminder_btn"
                         size="mini"
                         @click="addCustom"
                         circle>
                <i class="el-icon-plus reminder_btn_i"></i>
              </el-button>
            </div>
            <p class="reminder_wenzi">最近+0提现继续保持下去哦</p>
          </el-col>

        </el-row>
      </el-col>
    </el-row>
    <MedicationVue :Medication="Medication"
                   @getMedication="getMedication"></MedicationVue>
    <CustomVue :Custom="Custom"
               @getCustom="getCustom"></CustomVue>
  </div>
</template>
<script>
import CustomVue from './Dialog/Custom.vue'
import MedicationVue from './Dialog/Medication.vue'

export default {
  components: {
    MedicationVue,
    CustomVue
  },
  data () {
    return {
      icon: [{
        icon: require('../../../assets/img/icon/remind1.png')
      }, {
        icon: require('../../../assets/img/icon/remind2.png')
      }, {
        icon: require('../../../assets/img/icon/remind3.png')
      }],

      //添加用药提醒
      Medication: false,

      //添加自定义提醒
      Custom: false,

    }
  },
  methods: {

    //添加用药
    addMedication () {
      this.Medication = true
    },

    //添加自定义提醒
    addCustom () {
      this.Custom = true
    },

    //接收弹窗状态
    getMedication (value) {
      this.Medication = value
    },

    //接收自定义提醒弹窗状态
    getCustom (value) {
      this.Custom = value
    }
  }
}
</script>
<style lang="scss" scoped>
.Dailygoot_body {
  margin: 0px 30px 0px 30px;
  height: 100%;
  .Dailygoot_tag {
    background: #ffffff;
    height: 100%;
    border-radius: 16px;
    text-align: center;
  }
  .icon {
    width: 50px;
    height: 50px;
    background: #e0e2ff;
    border-radius: 10px;
    margin: 10px auto;
  }
  .reminder_english {
    font-size: 6px;
    margin: 2px;
    text-align: left;
    color: #5d62a2;
  }
  .reminder {
    font-size: 22px;
    margin: 2px;
    text-align: left;
    color: #5d62a2;
    font-weight: 600;
  }
  .reminder_wenzi {
    font-size: 10px;
    margin: 2px;
    text-align: left;
    color: #b0b4ca;
  }
  .reminder_btn {
    float: right;
    color: #52579c;
    border: 3px solid #52579c;
    background: #fff;
  }
  .Dailygoot_tag_wenzi {
    padding: 10px;
  }
}
/deep/.el-button {
}
</style>
