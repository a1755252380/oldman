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
      <el-image :src="icon"
                class="dialog-icon"></el-image>
    </div>
    <div style=" overflow: auto;">

      <div class="form_title">病例名称</div>
      <el-input v-model="messagedata.name"
                @change="changeinput()"
                :class="sucessinput?'input_sucess':''"></el-input>

      <div class="form_title">药品名称&nbsp;

      </div>
      <el-input v-model="Drugs">
        <el-button slot="append"
                   class="form_add"
                   @click="addDrugs"><i class="el-icon-plus"></i></el-button>
      </el-input>
      <div v-for="(item, index) in messagedata.Drugs"
           :key="index"
           class="Drug_add">
        {{item.Drugsname}}
        <div style=""
             class="num_div">
          <el-input-number size="mini"
                           v-model="item.Drugsnumber"
                           min="0"
                           step="0.5"></el-input-number>
          <!-- <span class="btn_num"><i class="el-icon-minus"></i></span>
          <input type="text "
                 v-model="item.Drugsnumber"
                 class="num">
          <span class="btn_num"><i class="el-icon-plus"></i></span> -->
        </div>

      </div>
      <div class="form_title">用药时间</div>
      <el-date-picker v-model="messagedata.time"
                      type="datetime"
                      placeholder="请选择时间..."
                      @change="changetime()"
                      :class="timechang?'input_sucess':''">
      </el-date-picker>

      <div class="form_title">注意事项</div>
      <el-input v-model="dange">
        <el-button slot="append"
                   class="form_add"
                   @click="addMatters"><i class="el-icon-plus"></i></el-button>
      </el-input>
      <div v-for="(item, index) in messagedata.Matters"
           :key="index"
           class="Drug_add">
        {{item}}

      </div>
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
  props: ['Medication'],
  data () {
    return {
      icon: require("../../../../assets/img/icon/remind1.png"),
      sucessinput: false,
      timechang: false,

      Drugs: "",
      dange: "",
      // 提醒的数据
      messagedata: {
        name: "",
        Drugs: [{
          Drugsname: "aaa",
          Drugsnumber: 10.0
        }],
        time: "",
        Matters: ["aaaaa",]
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
    //添加药品
    addDrugs () {
      let Dr = { Drugsname: this.Drugs, Drugsnumber: 0 }
      this.Drugs = ""
      this.messagedata.Drugs.push(Dr)
      this.$forceUpdate();
    },
    //添加注意事项
    addMatters () {
      this.messagedata.Matters.push(this.dange)
      this.dange = ""

      this.$forceUpdate();
    }
  },
  computed: {
    centerDialogVisible: {
      set (value) {
        this.$emit('getMedication', value);
      },
      get () {
        return this.Medication
      }
    }
  }
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
  background: #e0e2ff;
  border-radius: 50%;
  padding: 7px;
  width: 70px;
  height: 70px;
  box-shadow: 0 0 0px 20px rgba(224, 226, 255, 0.5);
  top: -60px;
}
.dialog-title {
  position: relative;
  height: 10px;
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

/deep/.num_div {
  display: inline-block;

  margin: 2px;
  float: right;
  .el-input__inner {
    height: 25px;
    border: none;
  }
  .el-input-number__decrease,
  .el-input-number__increase {
    // height: 20px;
    background: #c3c7ff;
    color: #5d62a2;
  }
  .el-input__inner:focus {
    border: 0 !important;
  }
  .el-input__inner:hover {
    border: 0 !important;
  }
  .el-input__inner:visited {
    border: 0 !important;
  }
}
</style>