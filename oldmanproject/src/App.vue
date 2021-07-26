<template>
  <div id="app">
    <el-container style="width:100%;height:100%">

      <side-vue class="side"></side-vue>

      <el-main class="main">
        <router-view />
      </el-main>
    </el-container>

  </div>
</template>
<script>
import sideVue from './components/side.vue'
export default {
  components: {
    sideVue

  }
}
</script>
<style lang="scss">
@import url("./assets/css/html.css");
.side {
  height: 100%;
}
.main {
  height: 100% !important;
  padding: 0px !important;
  border-top-left-radius: 37px;
  border-bottom-left-radius: 37px;
  background: #f5f6fb;
}
/deep/.el-main {
}
</style>
