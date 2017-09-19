<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="16" class="left-region">
        <el-table
          :data="tableData"
          stripe
          style="width: 100%">
          <el-table-column
            prop="rate"
            label="等级"
            width="180">
          </el-table-column>
          <el-table-column
            prop="time"
            label="时间"
            width="180">
          </el-table-column>
          <el-table-column
            prop="type"
            label="类型">
          </el-table-column>
          <el-table-column
            prop="state"
            label="状态">
          </el-table-column>
        </el-table>
      </el-col>
      <el-col :span="8" class="right-region">
        <div class="grid-content">
          <DatePicker></DatePicker>
        </div>

        <div class="event-stat-group">
          <div class="event-stat-item">
            <span>历史事件</span>
          <div class="event-type-group clearfix">

                <template v-for="eventType in eventTypeList">
                  <div class="event-type-item"
                       :style="{color:eventType.color,borderColor:eventType.color,boxShowColor:eventType.color}">
                    <div class="event-type-num">{{eventType.eventTypeNum}}</div>
                    <div class="event-type-name">{{eventType.eventTypeName}}</div>
                  </div>
                </template>
            </div>
          </div>
        </div>

      </el-col>
    </el-row>

  </div>
</template>

<script>
  import DatePicker from '../../event/calendar/DatePicker.vue'

  export default {
    components: {DatePicker},
    name: 'incident',
    data() {
      return {
        tableData: [{
          rate: '1',
          time: '王小虎',
          type: '2016-05-04',
          state: '王小虎',
        }, {
          rate: '1',
          time: '王小虎',
          type: '2016-05-04',
          state: '王小虎',
        }, {
          rate: '1',
          time: '王小虎',
          type: '2016-05-04',
          state: '王小虎',
        }, {
          rate: '1',
          time: '王小虎',
          type: '2016-05-04',
          state: '王小虎',
        }],
        eventTypeList: [
          {eventTypeId: 1, eventTypeName: '事故', eventTypeNum: 2, color: '#ff3c1c'},
          {eventTypeId: 2, eventTypeName: '警报', eventTypeNum: 6, color: '#ffba00'},
          {eventTypeId: 3, eventTypeName: '预警', eventTypeNum: 4, color: '#FCC23C'},
          {eventTypeId: 4, eventTypeName: '一般', eventTypeNum: 12, color: '#218af4'},
          {eventTypeId: 5, eventTypeName: '其他', eventTypeNum: 5, color: '#919191'}
        ],

      }
    }
  }
</script>
<style scoped>
  .left-region{
    border-right: #fff!important;
  }
  .right-region{
    padding: 0px!important;
    border-left: solid 1px #D4D4D4;
  }
  .event-type-item {
    float: left;
    height: 100%;
    text-align: center;
  }
  .event-stat-group{
    width: 300px;
    border-top: solid 1px #D4D4D4;
  }
  .event-stat-group .event-stat-item {
    border-bottom: 1px solid #ebebeb;
    padding: 15px 0;
  }

  .event-type-group{
    display:inline-block;
  }


  .event-type-group .event-type-item {
    width:50px;
    margin: 15px 3px 0 3px;
    padding: 5px 0;
    border: 1px solid yellow;
    box-sizing: border-box;
    box-shadow: inset 0px 0px 4px;
    border-radius: 4px;
  }
  .event-type-group .event-type-item .event-type-num {
    font-size: 20px;
    font-weight: 400;
  }

</style>
