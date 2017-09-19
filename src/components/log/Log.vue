<template>
  <div class="log grid-content">
    <el-row :gutter="10" class="grid-content">
      <el-col :span="6" class="grid-content">
        <div class="left-panel grid-content">
          <div class="left-panel-container">
            <div class="left-panel-title">
              {{queryCriteria}}
            </div>
            <div class="left-panel-content">
              <div class="left-panel-search line-bottom">
                <input class="search" type="text" placeholder="输入关键字以检索">
              </div>
              <div class="calendar line-bottom">
                <DatePicker :month="0" @listenToChildEvent="showChildDate"></DatePicker>
              </div>
              <div class="left-panel-query-type line-bottom">
                <template v-for="item in queryType">
                  <div class="query-type-title left">{{item.title}}</div>
                  <div class="checkbox-group clearfix">
                    <span class="checkbox float-left" v-for="type in item.queryTypeList">
                      <input class="float-left" name="query-type-item" :id="type.queryTypeListId" type="checkbox"
                             @click="checkboxStatus">
                      <label class="float-left">{{type.queryTypeListName}}</label>
                    </span>
                  </div>
                </template>
              </div>
              <div class="log-query">
                <PicButton size="large" name="query" class="query-btn" @click="queryLogData"></PicButton>
              </div>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="18" class="grid-content">
        <log-detail class="right-panel grid-content" ref="logdetail" :queryDate="currentQueryTime" :filterData="selectData"
                    @date-change="dateChange">
        </log-detail>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import DatePicker from '../event/calendar/DatePicker.vue'
  import LogDetail from './LogDetail.vue'
  import PicButton from '../utils/PicButton.vue'

  export default {
    name: 'log',
    data () {
      return {
        currentQueryTime: '',
        currentDate: '',
        selectType: [],
        queryCriteria: '查询条件',
        datePickerShow: true,
        queryType: [
          {
            title: '类型',
            queryTypeList: [
              {queryTypeListId: 1, queryTypeListName: '用户管理'},
              {queryTypeListId: 2, queryTypeListName: '事件管理'},
              {queryTypeListId: 3, queryTypeListName: '工单管理'},
              {queryTypeListId: 4, queryTypeListName: '设备管理'}
            ]
          }
        ],
        selectData: [],
        tableData: [
          {
            number: '1',
            date: '2017-9-12 11:14:23',
            type: '用户管理',
            operater: '张三',
            describe: '#########################'

          }, {
            number: '2',
            date: '2017-9-11 11:14:23',
            type: '事件管理',
            operater: '张三',
            describe: '#########################'
          }, {
            number: '3',
            date: '2017-9-11 11:14:23',
            type: '用户管理',
            operater: '张三',
            describe: '#########################'
          }, {
            number: '4',
            date: '2017-9-11 11:14:23',
            type: '工单管理',
            operater: '张三',
            describe: '#########################'
          }, {
            number: '5',
            date: '2017-9-10 11:14:23',
            type: '设备管理',
            operater: '张三',
            describe: '#########################'
          }, {
            number: '6',
            date: '2017-9-11 11:14:23',
            type: '设备管理',
            operater: '张三',
            describe: '#########################'
          }, {
            number: '7',
            date: '2017-9-13 11:14:23',
            type: '设备管理',
            operater: '张三',
            describe: '#########################'
          }, {
            number: '8',
            date: '2017-9-10 10:14:23',
            type: '用户管理',
            operater: '张三',
            describe: '#########################'

          }, {
            number: '9',
            date: '2017-9-11 11:14:23',
            type: '事件管理',
            operater: '张三',
            describe: '#########################'
          }, {
            number: '10',
            date: '2017-9-11 11:14:23',
            type: '用户管理',
            operater: '张三',
            describe: '#########################'
          }, {
            number: '11',
            date: '2017-9-11 11:14:23',
            type: '工单管理',
            operater: '张三',
            describe: '#########################'
          }, {
            number: '12',
            date: '2017-9-10 11:14:23',
            type: '设备管理',
            operater: '张三',
            describe: '#########################'
          }, {
            number: '13',
            date: '2017-9-11 11:14:23',
            type: '设备管理',
            operater: '张三',
            describe: '#########################'
          }, {
            number: '14',
            date: '2017-9-13 11:14:23',
            type: '设备管理',
            operater: '张三',
            describe: '#########################'
          }, {
            number: '15',
            date: '2017-9-12 11:14:23',
            type: '用户管理',
            operater: '张三',
            describe: '#########################'

          }, {
            number: '16',
            date: '2017-9-11 11:14:23',
            type: '事件管理',
            operater: '张三',
            describe: '#########################'
          }, {
            number: '17',
            date: '2017-9-11 11:14:23',
            type: '用户管理',
            operater: '张三',
            describe: '#########################'
          }, {
            number: '18',
            date: '2017-9-11 11:14:23',
            type: '工单管理',
            operater: '张三',
            describe: '#########################'
          }, {
            number: '19',
            date: '2017-9-10 11:14:23',
            type: '设备管理',
            operater: '张三',
            describe: '#########################'
          }, {
            number: '20',
            date: '2017-9-11 11:14:23',
            type: '设备管理',
            operater: '张三',
            describe: '#########################'
          }, {
            number: '21',
            date: '2017-8-13 11:14:23',
            type: '设备管理',
            operater: '张三',
            describe: '#########################'
          }, {
            number: '22',
            date: '2017-7-11 11:14:23',
            type: '事件管理',
            operater: '张三',
            describe: '#########################'
          }, {
            number: '23',
            date: '2017-7-11 11:14:23',
            type: '用户管理',
            operater: '张三',
            describe: '#########################'
          }, {
            number: '24',
            date: '2017-7-11 11:14:23',
            type: '工单管理',
            operater: '张三',
            describe: '#########################'
          }, {
            number: '25',
            date: '2017-8-10 11:14:23',
            type: '设备管理',
            operater: '张三',
            describe: '#########################'
          }, {
            number: '26',
            date: '2017-7-11 11:14:23',
            type: '设备管理',
            operater: '张三',
            describe: '#########################'
          }, {
            number: '27',
            date: '2017-8-13 11:14:23',
            type: '设备管理',
            operater: '张三',
            describe: '#########################'
          }
        ]
      }
    },
    mounted () {
      this.init()
    },
    methods: {
      init () {
        // 初始化表格数据
        this.selectData = []
      },
      showChildDate (data) {
        this.currentDate = data
      },
      checkboxStatus (event) {
      },
      queryLogData () {
        this.$refs.logdetail.initButton()
        let queryTypeItems
        let i
        let date = this.currentDate
        let selectedType = []
        let tabledata = this.tableData
        // 将DatePicker组件日期传给父组件
        this.currentQueryTime = this.currentDate
        // 多选框的值
        queryTypeItems = document.getElementsByName('query-type-item')
        for (i = 0; i < queryTypeItems.length; i++) {
          if (queryTypeItems[i].checked) {
            selectedType.push(queryTypeItems[i].nextElementSibling.innerText)// 将选中类型的名称加入到数组中
          }
        }
        this.selectType = selectedType
        // 过滤表格数据
        this.selectData = this.filterTableData(selectedType, tabledata, date)
      },
      // 点击不同时段改变值的变化
      dateChange (val) {
        this.selectData = this.filterTableData(this.selectType, this.tableData, val)
      },
      filterTableData (filter, data, queryDate) {
        let queryData = []
        let i
        let j
        for (j = 0; j < filter.length; j++) {
          for (i = 0; i < data.length; i++) {
            let time = data[i].date.split(' ')[0]
            let tabledate = time.split('-')
            let yearMonth = tabledate[0] + '-' + tabledate[1]
            if ((data[i].type === filter[j]) && (time === queryDate || yearMonth === queryDate)) {
              queryData.push(data[i])
            }
          }
        }
        return queryData
      }
    },
    components: {
      DatePicker,
      LogDetail,
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

  .left {
    text-align: left;
  }

  .line-bottom {
    border-bottom: 1px solid #ebebeb;
  }

  .log {
    background-color: #E3E3E3;
    font: normal normal 13px "Microsoft YaHei";
    color: #7a7a7a;
  }

  .left-panel {
    text-align: center;
    position: relative;
    margin-left: 7px;
  }

  .grid-content {
    height: 100%;
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

  .left-panel-container {
    border: 1px solid #ADADAD;
    margin-bottom: 10px;
    box-shadow: 0px 2px 10px #ADADAD;
    overflow: hidden;
    width: 100%;
  }

  .left-panel-title {
    background: #EBEBEB;
    font-weight: 900;
    line-height: 38px;
  }

  .left-panel-content {
    background: #FFF;
  }

  .query-type-title {
    text-indent: 10px;
    line-height: 32px;
    padding-right: 18px;
  }

  .query-type-title {
    text-indent: 10px;
    line-height: 32px;
    padding-right: 18px;
  }

  .checkbox-group {
    display: inline-block;
    margin: 0px 0 22px 0;
    padding: 0 15%;
  }

  .checkbox-group .checkbox {
    width: 40%;
    margin-top: 10px;
  }

  .checkbox-group .checkbox:first-child {
    margin-right: 10%;
  }

  .checkbox-group .checkbox:nth-of-type(3) {
    margin-right: 10%;
  }

  .log-query {
    padding: 10px 0 10px 0;
    overflow: hidden;
  }

  .query-btn {
    margin: 0 auto;
  }


</style>
