<template>
  <div class="alarm-event">
    <EventsTabs></EventsTabs>
  </div>
</template>

<script>
  /**
   * create by wjw 20170906
   * 事件 - 报警事件
   */
  import EventsTabs from './units/EventsTabs.vue'

  export default {
    name: 'alarmEvents',
    components: {
      EventsTabs
    }
  }
</script>

<style scoped>
  .alarm-event {
    width: calc(100% - 12px);
    height: 100%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    margin: 0 5px;
    padding: 0;
    position: relative;
    overflow: hidden;
    /*border: 1px solid #ADADAD;*/
    /*-webkit-box-shadow: 0px 2px 10px #ADADAD;*/
    /*box-shadow: 0px 2px 10px #ADADAD;*/
  }
</style>
<style>
  .alarm-event .el-tabs__nav .el-tabs__item {
    background: #ffffff;
    border: 1px solid #cccccc !important;
    margin: 0 2px;
  }

  .alarm-event .el-tabs__header {
    margin: 0;
  }
</style>
