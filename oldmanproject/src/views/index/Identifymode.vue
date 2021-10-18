<template>
  <div class="Identifymode">
    <div class="Identifymode_title">全局识别</div>
    <el-row :gutter="10">
      <el-col :span="12">
        <div
          :class="{identifymodebtn:true,identifymodebtn_active:Behaviorshow}"
          title="行为识别"
          @click="Behaviorshowclick"
        >
          <div class="icondiv">
            <img
              class="icon"
              :src="iconimg[0]"
              alt=""
            >
          </div>
          <div class="iconwenzi">
            <p class="p1">行为识别</p>
            <p class="p2">危险行为识别</p>
          </div>
        </div>
      </el-col>

      <el-col :span="12">
        <div
          :class="{identifymodebtn:true,identifymodebtn_active:Obstacleshow}"
          title="障碍物识别"
          @click="Obstacleshowclick"
        >
          <div class="icondiv">
            <img
              class="icon"
              :src="iconimg[1]"
              alt=""
            >
          </div>
          <div class="iconwenzi">
            <p class="p1">障碍识别</p>
            <p class="p2">防止道路障碍</p>
          </div>
        </div>

      </el-col>
    </el-row>
    <el-row
      :gutter="10"
      style="margin-top:10px"
    >
      <el-col :span="12">
        <div
          :class="{identifymodebtn:true,identifymodebtn_active:vegetablesshow}"
          title="果蔬识别"
          @click="vegetablesshowclick"
        >
          <div class="icondiv">
            <img
              class="icon"
              :src="iconimg[2]"
              alt=""
            >
          </div>
          <div class="iconwenzi">
            <p class="p1">果蔬识别</p>
            <p class="p2">果蔬危险识别</p>
          </div>
        </div>
      </el-col>

      <el-col :span="12">
        <div
          :class="{identifymodebtn:true,identifymodebtn_active:Dishesshow}"
          title="菜品识别"
          @click="Dishesshowclick"
        >
          <div class="icondiv">
            <img
              :src="iconimg[3]"
              class="icon"
              alt=""
            >

          </div>
          <div class="iconwenzi">
            <p class="p1">菜品识别</p>
            <p class="p2">防止食物中毒</p>
          </div>
        </div>

      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data () {
    return {
      iconimg: [require('../../assets/img/icon/index1.png'), require('../../assets/img/icon/index2.png'), require('../../assets/img/icon/index3.png'), require('../../assets/img/icon/index4.png')]
      ,

      //是否调用行为识别
      Behaviorshow: true,
      //是否调用障碍识别
      Obstacleshow: false,
      //是否调用果蔬识别
      vegetablesshow: false,
      //是否调用菜品识别
      Dishesshow: false
    };
  },
  methods: {
    Behaviorshowclick () {
      this.Behaviorshow = !this.Behaviorshow
    },
    Obstacleshowclick () {

      this.Obstacleshow = !this.Obstacleshow
    },
    vegetablesshowclick () {
      this.vegetablesshow = !this.vegetablesshow
    },
    Dishesshowclick () {
      this.Dishesshow = !this.Dishesshow
    }
  },
}
</script>
<style lang="scss" scoped>
.Identifymode {
  width: 100%;
  .Identifymode_title {
    width: 100%;
    border-radius: 10px;
    height: 33px;
    font-weight: bold;
    font-size: 26px;
    line-height: 33px;
    /* identical to box height */
    text-align: center;
    background: #fff;
    padding: 18px 0px;
    color: #5d62a2;
    margin-bottom: 10px;
  }
  .icondiv {
    border-radius: 10px;
    display: inline-block;
    .icon {
      padding-top: 5px;
      width: 40px;
      height: 40px;
    }
  }
  .iconwenzi {
    display: inline-block;
    padding-left: 5px;
    .p1 {
      font-weight: 700;
      font-size: 14px;
      line-height: 15px;

      color: #5d62a2;
    }
    .p2 {
      font-family: Microsoft YaHei UI;
      font-style: normal;
      font-weight: normal;
      font-size: 6px;
      line-height: 8px;
      /* identical to box height */

      color: #999999;
    }
  }
  .identifymodebtn {
    background: #fff;
    padding: 10px;
    border-radius: 10px;
    overflow: hidden;
  }
  .identifymodebtn:hover {
    background: #d4cece;
  }
  .identifymodebtn_active {
    background: #5d62a2;
    .p1 {
      color: #fff;
    }
    .p2 {
      color: rgb(209, 202, 202);
    }
  }
}
@media (min-width: 768px) and (max-width: 1024px) {
  // .p1 {
  //   display: none;
  // }
  // .p2 {
  //   display: none;
  // }
  // .identifymodebtn {
  //   display: flex;
  //   justify-content: center;
  //   align-items: center;
  // }
  .icondiv {
    display: none;
  }
  .icon {
    display: none;
  }
  .p1 {
    font-size: 10px !important;
  }
  .p2 {
    display: none;
  }
  .iconwenzi {
    text-align: center;
  }
}
@media (min-width: 1024px) and (max-width: 1440px) {
  // .p1 {
  //   display: none;
  // }
  // .p2 {
  //   display: none;
  // }
  // .identifymodebtn {
  //   display: flex;
  //   justify-content: center;
  //   align-items: center;
  // }
  .icondiv {
    display: none;
  }
  .icon {
    display: none;
  }
}
@media (max-width: 767px) {
}
@import url("../../assets/css/idebtifymodde.css");
</style>