<template>
  <div class="historical-events">
    <el-row class="historical-title-container">
      <el-col :xs="21" :sm="21" :md="21" :lg="21">
        <div class="historical-title">
          历史事件 2017年8月14日 关键字 ： “光谷芯中心” 类型 ”全部“
        </div>
      </el-col>
      <el-col :xs="3" :sm="3" :md="3" :lg="3" class="historical-btn-box">
        <PicButton size="small" name="export" class="historical-btn"></PicButton>
      </el-col>
    </el-row>
    <el-row class="historical-table-container">
      <el-col :xs="24" :sm="24" :md="24" :lg="24" class="historical-table-content-box">
        <div class="historical-table-content">
          <tableData :tableData1="historicalEventsData"></tableData>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  /**
   *create by wjw 20170906
   * 事件 - 历史事件
   */
  import tableData from './units/tableData.vue'
  import EventPagination from './units/EventPagination.vue'
  import PicButton from '../../utils/PicButton.vue'

  export default {
    name: 'historicalEvents',
    data() {
      return {
        historicalEventsData: [{
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
    components: {
      tableData,
      EventPagination,
      PicButton
    }
  }
</script>

<style scoped>
  .historical-title {
    padding-left: 15px;
    line-height: 36px;
    vertical-align: middle;
  }

  .historical-table-content {
    border-radius: 4px;
    height: 100%;

  }

  .historical-btn-box {
    padding: 2px 15px 0 0;
  }

  .historical-btn {
    float: right;
  }

  .historical-title-container {
    width: 100%;
    height: 40px;
  }

  .historical-table-content-box {
    height: 100%;
  }

  .historical-table-container {
    position: absolute;
    top: 40px;
    left: 0;
    width: 100%;
    height: calc(100% - 40px);
  }

  p {
    padding: 0;
    margin: 0;
  }

  .historical-events {
    width: calc(100% - 12px);
    height: 100%;
    background: #ffffff;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    margin: 0 5px;
    padding: 0;
    position: relative;
    overflow: hidden;
    border: 1px solid #ADADAD;
    -webkit-box-shadow: 0px 2px 10px #ADADAD;
    box-shadow: 0px 2px 10px #ADADAD;
  }

  .history-output {
    display: block;
    float: right;
    padding: 0;
    margin: 0;
    width: 80px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    vertical-align: middle;
    border-radius: 5px;
    background: url("../assets/history/output.png") no-repeat center center;
    background-size: contain;

  }

</style>

