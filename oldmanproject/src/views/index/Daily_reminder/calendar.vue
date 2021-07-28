<template>
  <div class="calendar_body">
    <div id="calendar"
         class="calendar"></div>
  </div>
</template>
<script>
import '../../../assets/js/calendar.js'
export default {

}
</script>
<style lang="scss" scoped>
@import url("../../../assets/css/calendar.css");
/deep/ul,
/deep/li {
  list-style: none !important;
}
/deep/ul {
  padding-inline-start: 20px;
}
/deep/a,
/deep/a:hover {
  color: #8689b9;
  text-decoration: none;
}
.calendar_body {
  padding: 10px;
}
</style>
