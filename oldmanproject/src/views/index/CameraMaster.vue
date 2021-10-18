<template>
  <div class="Master">
    <span
      :class="{'Master_btn':true,Master_btn_active:titleindex===index}"
      @click="clickmaster(index)"
      v-for="(item, index) in name"
      :key="index"
    >{{item}}</span>

    <div
      class="Master_div"
      v-loading="loading"
    >
      <div
        v-for="(item, index) in data"
        :key="index"
        :class='{"Master_choose":true,Master_choose_active:choose===index}'
        @click="changechoose(index)"
      ><i class="el-icon-video-play"></i> {{item}}</div>
    </div>
  </div>
</template>
<script>
export default {

  data () {
    return {
      icon: require('../../assets/img/icon/Vector.png'),
      choose: 0,
      name: ['监控通道', '本地视频'],
      titleindex: 0,

      //监控通道数据

      //监控视频数据源
      Monitordata: ['监控1', '监控1', '监控1', '监控1', '监控1', '监控1', '监控1', '监控1', '监控1', '监控1', '监控1', '监控1', '监控1', '监控1'],
      //本地视频数据源
      Localdata: ['本地1', '本地2', '本地3', '本地4', '本地5', '本地6', '本地7'],
      data: [],
      //加载
      loading: false
    };
  },
  mounted () {
    this.data = this.Monitordata
  },
  methods: {
    changechoose (index) {
      this.choose = index
    },

    clickmaster (index) {
      console.log(index)
      this.loading = true
      this.titleindex = index
      setTimeout(() => {
        if (index === 0) {
          this.data = this.Monitordata
        } else {
          this.data = this.Localdata
        }
        this.loading = false
      }, 1000);
    }
  },
}
</script>
<style lang="scss" scoped>
.Master {
  height: 100%;
  .Master_btn_active {
    font-weight: bold !important;
    font-size: 18px !important;
    line-height: 23px !important;
    /* identical to box height */

    margin-right: 8px !important;
    color: #5d62a2 !important;
  }
  .Master_btn {
    display: inline-block;
    font-family: Microsoft YaHei UI;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 18px;
    /* identical to box height */
    padding: 15px 0px;
    margin-right: 8px;
    color: #8f94c8;
    z-index: 9999;
  }
  .Master_div {
    height: 300px;
    overflow-y: scroll;
    background: #fff;
    .Master_choose {
      padding: 16px 0px 16px 20px;
      font-style: normal;
      font-weight: 700;
      font-size: 15px;
      line-height: 15px;

      color: #5d62a2;
      border-radius: 10px;
    }
    .Master_choose_active {
      background: #5d62a2;
      color: #fff;
    }
  }
}
</style>