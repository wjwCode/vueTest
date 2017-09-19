<template>
  <div class="event">
    <el-row :gutter="10" class="grid-content">
      <template v-for="item in changeFlag">
        <el-col :span="6" class="grid-content">
          <div class="left-panel grid-content">
            <div class="today-event" v-show="item.todayShow">
              <div class="today-event-title">
                {{activetodayEvent}}
                <span v-show="!item.todayShow" class="el-icon-arrow-up icon-arrow-up"></span>
              </div>
              <div class="event-content">
                <div class="event-handle-group clearfix">
                  <template v-for="(item,index) in eventHandleList">
                    <div v-if="index<2" class="event-item ">
                      <div class="event-type-num" :style="{color:item.color}">{{item.num}}</div>
                      <div class="event-type-name">{{item.text}}</div>
                    </div>
                  </template>
                </div>
                <div class="event-stat-group">
                  <template v-for="item in eventStatList">
                    <div class="event-stat-item">
                      <div class="event-stat-itemTitle">{{item.title}}({{item.num}})</div>
                      <div class="left event-stat-item-pro">{{item.projectLable}}{{item.projectNum}}</div>
                      <div class="left event-stat-item-pro">{{item.deviceLabel}}{{item.deviceNum}}</div>
                      <div class="event-type-group clearfix">
                        <template v-for="eventType in item.eventTypeList">
                          <div class="event-type-item"
                               :style="{color:eventType.color,borderColor:eventType.color,boxShowColor:eventType.color}">
                            <div class="event-type-num">{{eventType.eventTypeNum}}</div>
                            <div class="event-type-name">{{eventType.eventTypeName}}</div>
                          </div>
                        </template>
                      </div>
                    </div>
                  </template>
                </div>
              </div>
            </div>
            <div class="historical-event" v-show="item.historyShow">
              <div class="historical-event-title">
                {{historicalEvent}}
                <span v-show="!item.historyShow" class="el-icon-arrow-up icon-arrow-up"></span>
              </div>
              <div class="event-content">
                <div class="historical-event-search line-bottom"><input class="search" type="text" placeholder="输入关键字以检索">
                </div>
                <div class="calendar line-bottom">
                  <DatePicker></DatePicker>
                </div>
                <div class="event-level line-bottom">
                  <template v-for="item in eventLevel">
                    <div class="event-level-title left">{{item.title}}</div>
                    <div class="checkbox-group clearfix">
                    <span class="checkbox float-left" v-for="level in item.eventLevelList">
                      <input class="float-left" type="checkbox" :checked="level.checkStatus">
                      <label class="float-left"
                             :style="{color:level.color,paddingLeft:0}">{{level.eventTypeName}}</label>
                    </span>
                    </div>
                  </template>
                </div>
                <div class="event-query">
                  <PicButton id="query" size="large" name="query"></PicButton>
                </div>
              </div>
            </div>
            <div class="change-tab" @click="changeEvent(item)">
              <span v-if="item.historyShow">{{activetodayEvent}}</span>
              <span v-if="!item.historyShow">{{historicalEvent}}</span>
              <span class="el-icon-arrow-up icon-arrow-up"></span>
            </div>
          </div>
        </el-col>
        <el-col :span="18" class="grid-content">
          <historical-events v-if="item.historyShow"></historical-events>
          <alarm-events v-if="item.todayShow"></alarm-events>
        </el-col>
      </template>
    </el-row>
  </div>
</template>

<script>
  import DatePicker from './calendar/DatePicker.vue'
  import HistoricalEvents from './pages/HistoricalEvents.vue'
  import AlarmEvents from './pages/AlarmEvents.vue'
  import PicButton from '../utils/PicButton.vue'

  export default {
    name: 'event',
    data () {
      return {
        year: 0,
        month: 0,
        activetodayEvent: '当前活动的报警事件',
        historicalEvent: '历史事件查询',
        changeFlag: [{
          todayShow: true,
          historyShow: false
        }],
        datePickerShow: true,
        eventHandleList: [
          {num: 3, text: '未处理', color: '#ff3c1c'},
          {num: 7, text: '处理中', color: '#ffba00'},
          {num: 21, text: '已处理', color: '#70b000'}
        ],
        eventStatList: [
          {
            title: '今日报警事件',
            num: 21,
            projectLable: '涉及项目数：',
            projectNum: 4,
            deviceLabel: '涉及设备数：',
            deviceNum: 6,
            eventTypeList: [
              {eventTypeId: 1, eventTypeName: '事故', eventTypeNum: 2, color: '#ff3c1c'},
              {eventTypeId: 2, eventTypeName: '警报', eventTypeNum: 6, color: '#ffba00'},
              {eventTypeId: 3, eventTypeName: '预警', eventTypeNum: 4, color: '#FCC23C'},
              {eventTypeId: 4, eventTypeName: '一般', eventTypeNum: 12, color: '#218af4'},
              {eventTypeId: 5, eventTypeName: '其他', eventTypeNum: 5, color: '#919191'}
            ]
          },
          {
            title: '本月已发生报警事件',
            num: 305,
            projectLable: '涉及项目数：',
            projectNum: 4,
            deviceLabel: '涉及设备数：',
            deviceNum: 6,
            eventTypeList: [
              {eventTypeId: 1, eventTypeName: '事故', eventTypeNum: 2, color: '#ff3c1c'},
              {eventTypeId: 2, eventTypeName: '警报', eventTypeNum: 6, color: '#ffba00'},
              {eventTypeId: 3, eventTypeName: '预警', eventTypeNum: 4, color: '#FCC23C'},
              {eventTypeId: 4, eventTypeName: '一般', eventTypeNum: 12, color: '#218af4'},
              {eventTypeId: 5, eventTypeName: '其他', eventTypeNum: 5, color: '#919191'}
            ]
          }
        ],
        eventLevel: [
          {
            title: '等级',
            eventLevelList: [
              {eventTypeId: 1, eventTypeName: '事故', eventTypeNum: 2, color: '#ff3c1c', checkStatus: true},
              {eventTypeId: 2, eventTypeName: '警报', eventTypeNum: 6, color: '#ffba00', checkStatus: true},
              {eventTypeId: 3, eventTypeName: '预警', eventTypeNum: 4, color: '#FCC23C', checkStatus: true},
              {eventTypeId: 4, eventTypeName: '一般', eventTypeNum: 12, color: '#218af4', checkStatus: false},
              {eventTypeId: 5, eventTypeName: '其他', eventTypeNum: 5, color: '#919191', checkStatus: false}
            ]
          }
        ]
      }
    },
    mounted () {
      this.init()
    },
    methods: {
      init () {
        let now = new Date()
        // 初始化默认值
        this.year = now.getFullYear()
        this.month = now.getMonth()
      },
      changeEvent (item, event) {
        item.todayShow = !item.todayShow
        item.historyShow = !item.historyShow
      }
    },
    components: {
      DatePicker,
      HistoricalEvents,
      AlarmEvents,
      PicButton
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .clearfix:after {
    content: '';
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
  }

  .float-left {
    float: left;
  }

  .left-panel {
    text-align: center;
    position: relative;
    margin-left: 7px;
  }

  .left {
    text-align: left;
  }

  .event-type-item {
    float: left;
    height: 100%;
  }

  .event-handle-group {
    padding: 0 5px;
  }

  .event-handle-group .event-type-item {
    padding: 10px 0;
  }

  .event-handle-group {
    border-bottom: 1px solid #ebebeb;
  }

  .event-item {
    float: left;
    height: 100%;
    width: 50%;
  }

  .grid-content {
    height: 100%;
  }

  .line-bottom {
    border-bottom: 1px solid #ebebeb;
  }

  .event {
    width: 100%;
    font: normal normal 13px "Microsoft YaHei";
    color: #7a7a7a;
    height: 100%;
    overflow-x: hidden;
  }

  .event-stat-group .event-stat-item {
    border-bottom: 1px solid #ebebeb;
    padding: 15px 0;
  }

  .event-handle-group .event-item {
    padding: 10px 0;
  }

  .event-handle-group .event-item .event-type-num {
    font-size: 30px;
    line-height: 40px;
  }

  .event-type-group {
    display: inline-block;
  }

  .event-type-group .event-type-item {
    width: 50px;
    margin: 15px 3px 0 3px;
    padding: 5px 0;
    border: 1px solid yellow;
    box-sizing: border-box;
    box-shadow: inset 0px 0px 4px;
    border-radius: 4px;
  }

  .event-stat-itemTitle {
    font-weight: 900;
    margin-bottom: 10px;
  }

  .event-type-group .event-type-item .event-type-num {
    font-size: 20px;
    font-weight: 400;
  }

  .historical-event,
  .today-event {
    border: 1px solid #ADADAD;
    margin-bottom: 10px;
    box-shadow: 0px 2px 10px #ADADAD;
    overflow: hidden;
    width: 100%;
  }

  .change-tab {
    background: #EBEBEB;
    font-weight: 900;
    line-height: 36px;
    border: 1px solid #ADADAD;
    box-shadow: 0px 3px 10px #BEBEBE;
    overflow: hidden;
    width: 100%;
    position: relative;
  }

  .historical-event-title,
  .today-event-title {
    background: #EBEBEB;
    font-weight: 900;
    line-height: 38px;
  }

  .icon-arrow-up {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 3%
  }

  .event-content {
    background: #FFF;
  }

  .event-stat-item-pro {
    line-height: 28px;
    text-indent: 10px;
  }

  input.search {
    width: 94%;
    margin: 8px 3%;
    box-sizing: border-box;
    border: 1px solid #7A7A7A;
    border-radius: 20px;
    padding: 5px;
    text-indent: 2%;
  }

  .event-level-title {
    text-indent: 10px;
    line-height: 32px;
    padding-right: 18px;
  }

  .checkbox-group {
    display: inline-block;
    margin: 6px 0 22px 0;
  }

  .checkbox-group .checkbox {
    margin: 0 5px;
  }

  input[type="checkbox"] {
    border-radius: 0;
    border: 2px solid #8E8E8E;
  }

  .event-query {
    padding: 14px 0px 4px 0px;
  }

  #query {
    margin: 0 auto;
  }
</style>
