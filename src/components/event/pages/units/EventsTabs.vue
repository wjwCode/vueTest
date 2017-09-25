<template>
  <div class="event-tab">
    <el-tabs type="card" @tab-click="handleClick">
      <el-tab-pane>
        <span slot="label"><span class="event-tab-undealed">{{this.eventNum.undealed}}</span> 未处理</span>
          <TableData :tableData1="unDealedData"></TableData>
      </el-tab-pane>
      <el-tab-pane>
        <span slot="label"><span class="event-tab-dealed">{{this.eventNum.dealed}}</span> 处理中</span>
          <TableData :tableData1="dealedData"></TableData>
      </el-tab-pane>
      <el-tab-pane>
        <span slot="label"><span class="event-tab-dealedToday">{{this.eventNum.dealedToday}}</span> 今日已处理</span>
          <TableData :tableData1="dealedDataToday"></TableData>
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
          eventNum:{
            undealed:3,
            dealed:7,
            dealedToday:21
          },
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
  .event-tab-undealed {
      font-size: 30px;
      line-height: 40px;
      color: rgb(255, 60, 28);
  }
  .event-tab-dealed {
      font-size: 30px;
      line-height: 40px;
      color: rgb(255, 186, 0);
  }
  .event-tab-dealedToday {
      font-size: 30px;
      line-height: 40px;
      color: #70B931;
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
<style lang="scss">
  .event-tab .el-tabs__content {
    width: 100%;
    height: calc(100% - 42px);
  }
  .event-tab>.el-tabs.el-tabs--card {
      width: 100%;
      height: 100%;
  }
  .event-tab>.el-tabs.el-tabs--card>.el-tabs__header{
      height: 40px;
  }
  .event-tab>.el-tabs.el-tabs--card>.el-tabs__content>.el-tab-pane {
      width: 100%;
      height: 100%;
  }
  .event-tab-content.el-tabs.el-tabs--card {
    height: 100%;
    width: 100%;
  }

  .event .alarm-event .el-tabs__nav .el-tabs__item {
    margin: 0 10px 0 0;
  }

</style>
