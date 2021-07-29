<template>
  <el-dialog :visible.sync="dialogVisible"
             width="20%"
             :close-on-click-modal="false"
             :close-on-press-escape="false"
             :show-close="false"
             class="message">
    <div class="wrapper">

      <div class="bell"
           id="bell-1">
        <div class="anchor material-icons layer-1">notifications_active</div>
        <div class="anchor material-icons layer-2">notifications</div>
        <div class="anchor material-icons layer-3">notifications</div>
      </div>

    </div>
    <div class="message_title">11:00 出门买菜</div>
    <div class="message_wenzi">清单：xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</div>
    <span slot="footer"
          class="dialog-footer">
      <el-button type="success"
                 round
                 style="width:100%"
                 @click="dialogVisible = false ">完 成 提 醒</el-button>

    </span>
  </el-dialog>
</template>

<script>
export default {
  props: ['checked'],
  data () {
    return {

    };
  },
  computed: {
    dialogVisible: {
      set (value) {
        this.$emit('messagechange', value);
      },
      get () {
        return this.checked
      }
    }
  }
};
</script>
<style lang="scss" scoped>
@import url("../../../../assets/css/icon.css");
/deep/.el-dialog {
  border-radius: 20px;
}
.dialog-footer {
  button {
    font-size: 18px;
    font-weight: 600;
  }
}
.message_title {
  font-size: 35px;
  color: #5d62a2;
  text-align: center;
  padding: 10px;
}
.message_wenzi {
  font-size: 14px;
  color: #5d62a2;
  padding: 10px;
}
</style>