<template>
  <el-row :gutter="0"
          class="DailyreminderVue_body">
    <el-col :span="12">
      <EventVue></EventVue>
    </el-col>
    <el-col :span="12"
            style="background:#5D62A2; border-radius: 30px;height:100%">
      <clendar></clendar>
    </el-col>
  </el-row>

</template>
<script>

import clendar from './Daily_reminder/calendar.vue'
import EventVue from './Daily_reminder/Event.vue'
export default {
  components: {
    clendar,
    EventVue
  }
}
</script>
<style lang="scss" scoped>
.DailyreminderVue_body {
  margin: 0px 30px 0px 30px;

  height: 100%;
  background: #eaecf8;
  border-radius: 30px;
}
</style>
