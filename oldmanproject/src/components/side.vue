<template>
  <el-aside style="position:relativ;max-width:200px;width:12%">
    <el-menu class="el-menu-vertical-demo"
             :router="true"
             :default-active="openindex"
             @select="handleOpen">

      <el-menu-item index="/index">

        首页
        <div id="sideopen"
             style="border-top-left-radius: 50px; border-bottom-left-radius: 50px; background: rgb(245, 246, 251); position: absolute; right: 0px; display: inline-block; width: 30px; height: 100%;">&lt;</div>
      </el-menu-item>
      <el-menu-item index="/talk">

        聊天
      </el-menu-item>
      <el-menu-item index="/Identify">

        识别
      </el-menu-item>
      <el-menu-item index="/Individual">
        个人
      </el-menu-item>
    </el-menu>
  </el-aside>
</template>
<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {

    }
  },
  methods: {
    handleOpen (key, keyPath, index) {
      console.log(index.$el)

      // 删除已经存在的箭头标签
      if (document.getElementById('sideopen') != null) {
        document.getElementById('sideopen').remove()
      }
      var frameDiv = document.createElement('div')
      frameDiv.innerText = '<'
      frameDiv.style.borderTopLeftRadius = '50px'
      frameDiv.style.borderBottomLeftRadius = '50px'
      frameDiv.style.background = '#F5F6FB'
      frameDiv.id = 'sideopen'
      frameDiv.style.position = 'absolute'
      frameDiv.style.right = '0'
      frameDiv.style.display = 'inline-block'
      // frameDiv.style.float = 'right'
      frameDiv.style.width = '30px'
      frameDiv.style.height = '100%'
      index.$el.append(frameDiv)
      this.$store.commit('setsideopen', index.index)
    }

  },
  computed: {
    ...mapState({
      openindex: (state) => state.index.sideopen
    })
  },
  mounted () {

  }
}
</script>
<style lang="scss" scoped>
/deep/.el-menu {
  text-align: center;
  border: none;
  padding-top: 40%;
  li {
    color: #5d62a2;
    font-size: 21px;
    line-height: 70px;
    font-weight: 700;
    height: 75px;
  }
}

//修改访问状态的默认样式
/deep/.el-menu-item:hover {
  outline: 0 !important;
  background: none !important;
  color: none !important;
}
/deep/.el-menu-item.is-active {
  color: none !important;
  background: none !important;
}
</style>
