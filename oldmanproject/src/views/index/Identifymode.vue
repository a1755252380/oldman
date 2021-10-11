<template>
  <div class="Identifymode">
    <div class="Identifymode_title">全局识别</div>
    <el-row :gutter="10">
      <el-col :span="12">
        <div class="identifymodebtn">
          <div class="icondiv">
            <img
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
        <div class="identifymodebtn">
          <div class="icondiv">
            <img
              :src="iconimg[1]"
              alt=""
            >
          </div>
          <div class="iconwenzi">
            <p class="p1">障碍物识别</p>
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
        <div class="identifymodebtn">
          <div class="icondiv">
            <img
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
        <div class="identifymodebtn">
          <div class="icondiv">
            <img
              :src="iconimg[3]"
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
    };
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
    width: 50px;
    height: 50px;
    background: #eeefff;
    border-radius: 10px;
    display: inline-block;
  }
  .iconwenzi {
    display: inline-block;
    padding-left: 10px;
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
  }
}
</style>