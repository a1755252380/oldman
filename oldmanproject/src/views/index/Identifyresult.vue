<template>
  <div class="identifyresult">
    <ul>
      <li
        v-for="(item, index) in videdata"
        :key="index"
      >
        <span class="time">{{ item.time }}</span>&nbsp;&nbsp;<span :class="{ mode: item.type === 1, danger: item.type === 2 }">{{
          item.mode
        }}</span>
      </li>
    </ul>
  </div>
</template>
<script>

export default {
  props: ["innerheight"],
  data () {
    return {
      videdata: [
        { time: "00:00:35", mode: "行为正常", type: 1 },
        { time: "00:00:35", mode: "行为正常", type: 2 },
        { time: "00:00:35", mode: "行为正常", type: 1 },
        { time: "00:00:35", mode: "行为正常", type: 1 },
        { time: "00:00:35", mode: "行为正常", type: 1 },
        { time: "00:00:35", mode: "行为正常", type: 1 },
        { time: "00:00:35", mode: "行为正常", type: 1 },
        { time: "00:00:35", mode: "行为正常", type: 1 },
        { time: "00:00:35", mode: "行为正常", type: 1 },
        { time: "00:00:35", mode: "行为正常", type: 1 },
        { time: "00:00:35", mode: "行为正常", type: 1 },
        { time: "00:00:35", mode: "行为正常", type: 1 },
        { time: "00:00:35", mode: "行为正常", type: 1 },
        { time: "00:00:35", mode: "行为正常", type: 1 },
        { time: "00:00:35", mode: "行为正常", type: 1 },
        { time: "00:00:35", mode: "行为正常", type: 1 },
        { time: "00:00:35", mode: "行为正常", type: 2 },
        { time: "00:00:35", mode: "行为正常", type: 2 },
        { time: "00:00:35", mode: "行为正常", type: 2 },
        { time: "00:00:35", mode: "行为正常", type: 2 },
        { time: "00:00:35", mode: "行为正常", type: 2 },
        { time: "00:00:35", mode: "行为正常", type: 2 },
        { time: "00:00:35", mode: "行为正常", type: 2 },
        { time: "00:00:35", mode: "行为正常", type: 2 },
        { time: "00:00:35", mode: "行为正常", type: 2 }
      ]
    }
  },
  mounted () { },
  computed: {}
}
</script>
<style lang="scss" scoped>
li {
  list-style: none;
}
.identifyresult {
  border-radius: 10px;
  padding: 2px 0px;
  background: #fff;
  ul {
    height: 230px;

    overflow-y: auto;
  }
  li {
    padding: 3px 0px;
  }
  .time {
    font-family: Microsoft YaHei UI;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;

    color: #5d62a2;
  }
  .mode {
    font-family: Microsoft YaHei UI;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 15px;

    color: #5d62a2;
  }
  .danger {
    font-family: Microsoft YaHei UI;
    font-style: normal;
    font-weight: 800;
    font-size: 15px;
    line-height: 15px;

    color: #be357c;
  }
}
</style>