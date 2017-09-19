<template>
  <div class="event-tab">
    <el-tabs v-model="activeName2" type="card" @tab-click="handleClick" class="event-tab-content">
      <el-tab-pane label="未处理" name="first" class="event-tab-content">
        <div class="event-tab-content1">
          <TableData :tableData1="unDealedData"></TableData>
        </div>
      </el-tab-pane>
      <el-tab-pane label="处理中" name="second" class="event-tab-content">
        <div class="event-tab-content1">
          <TableData :tableData1="dealedData"></TableData>
        </div>
      </el-tab-pane>
      <el-tab-pane label="今日已处理" name="third" class="event-tab-content">
        <div class="event-tab-content1">
          <TableData :tableData1="dealedDataToday"></TableData>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
  /**
   * create by wjw 20170907
   * */
  import TableData from './TableData.vue'
  import EventPagination from './EventPagination.vue'

  export default {
    name: 'EventsTabs',
    data () {
      return {
        activeName2: 'first',
        unDealedData: [{
          level: '事故',
          level_class: {accident: true},
          time: '2017-08-03 11:14:23',
          project: '光谷芯中心',
          switching_room: '#1 配电室',
          equipment: 'C101主变压器',
          type: '设备跳闸',
          status: '已处理',
          status_class: {did: true},
          details: 'details'
        }],
        dealedData: [{
          level: '事故',
          level_class: {accident: true},
          time: '2017-08-03 11:14:23',
          project: '光谷芯中心',
          switching_room: '#1 配电室',
          equipment: 'C101主变压器',
          type: '设备跳闸',
          status: '已处理',
          status_class: {did: true},
          details: 'details'
        }, {
          level: '事故',
          level_class: {accident: true},
          time: '2017-08-03 11:14:23',
          project: '光谷芯中心',
          switching_room: '#1 配电室',
          equipment: 'C101主变压器',
          type: '设备跳闸',
          status: '已处理',
          status_class: {did: true},
          details: 'details'
        }],
        dealedDataToday: [{
          level: '事故',
          level_class: {accident: true},
          time: '2017-08-03 11:14:23',
          project: '光谷芯中心',
          switching_room: '#1 配电室',
          equipment: 'C101主变压器',
          type: '设备跳闸',
          status: '已处理',
          status_class: {did: true},
          details: 'details'
        }, {
          level: '事故',
          level_class: {accident: true},
          time: '2017-08-03 11:14:23',
          project: '光谷芯中心',
          switching_room: '#1 配电室',
          equipment: 'C101主变压器',
          type: '设备跳闸',
          status: '已处理',
          status_class: {did: true},
          details: 'details'
        }, {
          level: '事故',
          level_class: {accident: true},
          time: '2017-08-03 11:14:23',
          project: '光谷芯中心',
          switching_room: '#1 配电室',
          equipment: 'C101主变压器',
          type: '设备跳闸',
          status: '已处理',
          status_class: {did: true},
          details: 'details'
        }]
      }
    },
    methods: {
      handleClick (tab, event) {
        console.log(tab, event)
      }
    },
    components: {
      TableData,
      EventPagination
    }
  }
</script>
<style scoped>
  .event-tab {
    width: 100%;
    height: 100%;
  }

  .event-tab-content {
    width: 100%;
    height: 100%;
  }

  .event-tab-content1 {
    width: calc(100% - 2px);
    height: calc(100% - 2px);
    overflow: hidden;
    background: #FFFFFF;
    border: 1px solid #ADADAD;
    border-top: none;
    -webkit-box-shadow: 0px 2px 10px #ADADAD;
    box-shadow: 0px 2px 10px #ADADAD;
  }
</style>
<style>
  .event-tab .el-tabs__content {
    width: 100%;
    height: calc(100% - 42px);
  }

  .event-tab-content.el-tabs.el-tabs--card {
    height: 100%;
    width: 100%;
  }

  .event .alarm-event .el-tabs__nav .el-tabs__item {
    margin: 0 10px 0 0;
  }

</style>
