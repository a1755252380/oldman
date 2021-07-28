<template>
  <el-dialog :visible.sync="dialogVisible"
             width="30%">
    <span>这是一段信息</span>
    <span slot="footer"
          class="dialog-footer">
      <el-button @click="dialogVisible = false ">取 消</el-button>
      <el-button type="primary"
                 @click="dialogVisible = false">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  props: ['checked'],
  data () {
    return {

    };
  },
  computed: {
    dialogVisible: {
      set (value) {
        this.$emit('messagechange', value);
      },
      get () {
        return this.checked
      }
    }
  }
};
</script>
<style lang="scss" scoped>
</style>