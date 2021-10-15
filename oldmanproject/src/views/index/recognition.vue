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
    <el-col :span="20" id="recognition_img" >
        <el-row :gutter="10" id="recognition_img_div" >
           <el-col :xs="24" :sm="24" :md="12" :lg="6" :xl="6" :col="6"  v-for="(item,index) in data "
            :key="index">
              <div
              :style="{'background':'url('+item.img+') repeat 100% 100%',backgroundSize: '100%'}"
              class="item-img"
            ></div>
            <div class="item-body">
              <div class="item-desc">{{item.time}}</div>
              <div class="item-desc-2">{{item.Behavior}}</div>
            </div>
            </el-col>
      </el-row>
      
     
    </el-col>
  </el-row>
</template>
<script>

const a = { img: require("../../assets/img/a.jpg"), time: "00:00:55", Behavior: "行为正常" };
export default {
    props:['behavior2'],
  data () {
    return {
      col: 4,
      data: new Array(3).fill(a),
      Camera_img: require("../../assets/img/a.jpg"),
      clickindex: 0
    }
  },
  watch:{
    behavior2(newvalue){
      this.data.push(newvalue)
      
       this.$forceUpdate();
    }
  },
  components: {
  },
  mounted(){
    document.getElementById("recognition_img_div").addEventListener("DOMSubtreeModified",function(){
              document.getElementById("recognition_img_div").scrollTop=document.getElementById("recognition_img_div").scrollHeight
    },false)
 
  },
  computed: {
    
  },
  methods: {
    //点击切换摄像头场景
    changerecognition (index) {
      this.clickindex = index
    },

  
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
#recognition_img_div {
  height: 200px;
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