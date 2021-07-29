<template>
  <el-dialog :visible.sync="centerDialogVisible"
             width="30%"
             ref="dialog2"
             :close-on-click-modal="false"
             :close-on-press-escape="false"
             :show-close="false"
             center>
    <div slot="title"
         class="dialog-title"
         ref="dialog_title">
      <h1 style="  color: #5d62a2;margin:0 0 10px 0">自定义提醒添加</h1>
      <el-image :src="icon"
                class="dialog-icon"></el-image>

    </div>

    <div style=" overflow: auto;">

      <div class="form_title">提醒内容</div>
      <el-input v-model="messagedata.name"
                @change="changeinput()"
                :class="sucessinput?'input_sucess':''"></el-input>
      <div class="form_title">提醒时间</div>
      <el-date-picker v-model="messagedata.time"
                      type="datetime"
                      placeholder="请选择时间..."
                      @change="changetime()"
                      :class="timechang?'input_sucess':''">
      </el-date-picker>
      <div class="form_title">地点内容</div>
      <el-input v-model="messagedata.place"
                @change="changeplace()"
                :class="placechange?'input_sucess':''"></el-input>
      <div class="form_title">注意事项&nbsp;

      </div>
      <el-input v-model="Matters">
        <el-button slot="append"
                   class="form_add"
                   @click="addMatters"><i class="el-icon-plus"></i></el-button>
      </el-input>
      <div v-for="(item, index) in messagedata.Matters"
           :key="index"
           class="Drug_add">
        {{item}}

      </div>

      <div class="form_title">其他备注</div>
      <el-input v-model="messagedata.other"
                type="textarea"
                @change="changeother"
                :class="otherchange?'input_sucess':''">

      </el-input>

    </div>
    <span slot="footer"
          ref="dialog_footer"
          class="dialog-footer">
      <el-button @click="centerDialogVisible = false"
                 round>添 加 提 醒</el-button>

    </span>
  </el-dialog>
</template>
<script>
export default {
  props: ['Custom'],
  data () {
    return {
      icon: require("../../../../assets/img/icon/remind3.png"),
      sucessinput: false,
      timechang: false,
      placechange: false,
      otherchange: false,

      Matters: "",
      // 提醒的数据
      messagedata: {
        name: "",
        time: "",
        place: "",
        Matters: ["aaaaa",],
        other: "",
      }
    }
  },
  methods: {
    changeinput (value) {
      // console.log(value)
      if (value = "") {
        this.sucessinput = false
        return;
      } else {
        this.sucessinput = true
      }
    },
    changetime (value) {
      if (value = "") {
        this.timechang = false
        return;
      } else {
        this.timechang = true
      }
    },
    changeplace (value) {
      if (value = "") {
        this.placechange = false
        return;
      } else {
        this.placechange = true
      }
    },
    changeother (value) {
      if (value = "") {
        this.otherchange = false
        return;
      } else {
        this.otherchange = true
      }
    },

    //添加注意事项
    addMatters () {
      this.messagedata.Matters.push(this.Matters)
      this.Matters = ""
      this.$forceUpdate();
    }
  },
  computed: {
    centerDialogVisible: {
      set (value) {
        this.$emit('getCustom', value);
      },
      get () {
        return this.Custom
      }
    }
  },

  mounted () {
  },
}
</script>
<style lang="scss" scoped>
.dialog-footer {
  width: 100%;

  button {
    width: 100%;
    background: #5d62a2;
    color: #fff;
  }
}
//正确输入内容之后
.input_sucess {
  // background: #5d62a2 !important;
  /deep/.el-input__inner {
    background: #e0e2ff !important;
    color: #5d62a2;
  }
}
.form_add {
  border-radius: 15px;
  height: 30px;
  i {
    font-size: 18px;
    font-weight: 600;
    color: #5d62a2;
  }
}

/deep/.el-dialog__body {
  margin-top: 5%;
  height: 60%;
  overflow: auto;
}
/deep/.el-dialog {
  border-radius: 20px;
  height: 70%;
}
.dialog-icon {
  background: #ffedd3;
  border-radius: 50%;
  padding: 7px;
  width: 70px;
  height: 70px;
  box-shadow: 0 0 0px 20px rgba(255, 237, 211, 0.5);
  top: -60px;
}
.dialog-title {
  position: relative;
  height: 40px;
  h1 {
    position: absolute;
    left: 0;
    top: 30px;
  }
}

//修改表单样式
.form_title {
  padding: 0;
  margin: 5px;
  color: #5d62a2;
  font-size: 15px;
}
/deep/.el-form-item {
  padding: 0;
  margin: 0;
}
/deep/.el-input__inner {
  border-radius: 15px;
  height: 30px;
  width: 100%;
}
/deep/.el-input__prefix,
/deep/.el-input__suffix {
  top: -4px;
}
/deep/.el-date-editor.el-input,
/deep/.el-date-editor.el-input__inner {
  width: 100%;
}
/deep/.el-input-group__append,
/deep/.el-input-group__prepend {
  border-radius: 15px;
  background: #e0e2ff;
}

.Drug_add {
  -webkit-appearance: none;
  background-color: #fff;
  background-image: none;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  box-sizing: border-box;
  color: #606266;
  display: inline-block;
  font-size: inherit;
  height: 40px;
  line-height: 25px;
  outline: 0;
  padding: 0 15px;
  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  border-radius: 15px;
  height: 30px;
  width: 100%;
  margin: 5px 0 5px 0;
  background: #e0e2ff !important;
  color: #5d62a2;
  font-weight: 600;
}
</style>