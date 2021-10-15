<template>
  <el-row
    :gutter="10"
    style="height:100%;"
  >
    <el-col
      :span="4"
      style="height:100%"
    >
      <div class="Scene">
        <div
          v-for="(item, index) in 12"
          :key="index"
          :class="{recognition_choose_active:clickindex===index,recognition_choose:true}"
          @click="changerecognition(index)"
        >场景{{item}}</div>
      </div>
    </el-col>
    <el-col :span="20">
      <waterfall
        class="Scene"
        :col="col"
        :width="180"
        :gutterWidth="gutterWidth"
        :data="data"
        @loadmore="loadmore"
        @scroll="scroll"
      >
        <template>
          <div
            class="cell-item"
            v-for="(item,index) in data "
            :key="index"
          >
            <div
              :style="{'background':'url('+item.img+') repeat 100% 100%',backgroundSize: '100%'}"
              class="item-img"
            ></div>
            <div class="item-body">
              <div class="item-desc">{{item.time}}</div>
              <div class="item-desc-2">{{item.Behavior}}</div>
            </div>
          </div>
        </template>
      </waterfall>
    </el-col>
  </el-row>
</template>
<script>
const a = { img: require("../../assets/img/a.jpg"), time: "00:00:55", Behavior: "行为正常" };
export default {

  data () {
    return {
      col: 4,
      data: new Array(16).fill(a),
      Camera_img: require("../../assets/img/a.jpg"),
      clickindex: 0
    }
  },
  components: {
  },
  computed: {
    itemWidth () {
      return (138 * 0.5 * (document.documentElement.clientWidth / 375))  //rem布局 计算宽度
    },
    gutterWidth () {
      return (9 * 0.5 * (document.documentElement.clientWidth / 375))	//rem布局 计算x轴方向margin(y轴方向的margin自定义在css中即可)
    }
  },
  methods: {
    //点击切换摄像头场景
    changerecognition (index) {
      this.clickindex = index
    },

    scroll (scrollData) {
      console.log(scrollData)
    },
    switchCol (col) {
      this.col = col
      console.log(this.col)
    },
    loadmore (index) {
      this.data = this.data.concat(this.data)
    }
  }
}
</script>
<style lang="scss" scoped>
.recognition_choose {
  width: 100%;
  height: 40px;
  text-align: center;
  color: #5d62a2;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  line-height: 15px;
  border-radius: 10px;
}
.recognition_choose_active {
  background: #5d62a2;

  color: #fff;
}
.Scene {
  height: 300px;
  overflow: auto;
}
.item-img {
  border-radius: 10px;
  width: 196px;
  height: 109px;
}
.item-body {
  text-align: center;
  padding: 5px;
  .item-desc {
    font-size: 14px;
    font-weight: 400;
    color: #5d62a2;
  }
  .item-desc-2 {
    font-size: 14px;
    font-weight: 700;
    color: #5d62a2;
  }
}
@media (min-width: 768px) and (max-width: 979px) {
  .identifyresult {
    border-radius: 10px;
    padding: 2px 0px;
    background: #fff;
    ul {
      height: 170px;

      overflow-y: auto;
    }
  }
}
</style>