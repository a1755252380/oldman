<template>
  <el-row :gutter="0"
          class="Dailygoot_body">

    <el-col :span="6"
            class="Dailygoot_tag">1</el-col>
    <el-col :span="2">&nbsp;</el-col>
    <el-col :span="6"
            class="Dailygoot_tag">2</el-col>
    <el-col :span="2">&nbsp;</el-col>
    <el-col :span="6"
            class="Dailygoot_tag">3</el-col>
  </el-row>
</template>
<script>
export default {

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
  }
}
</style>
