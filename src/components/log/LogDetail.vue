<template>
  <div class="log-detail">
    <div class="log-detail-head clearfix">
      <span class="query-time float-left">正在查询：{{queryDate}}</span>
      <span class="export-btn float-right">
        <template v-for="item in buttonInfo">
            <pic-button class="pic-button" :size="item.path" :name='item.btnName' @click="handleDateChange(item)"
                        :disabled=item.disabled></pic-button>
        </template>
        <pic-button class="pic-button" size="small" name="export"></pic-button>
      </span>
    </div>
    <el-table :data="filterData" stripe style="width: 100%" :default-sort="{prop:'number',order:'ascending'}">
      <el-table-column prop="number" sortable label="序号" width="120">
      </el-table-column>
      <el-table-column prop="date" label="时间" width="180">
      </el-table-column>
      <el-table-column prop="type" label="类型" width="150">
      </el-table-column>
      <el-table-column prop="operater" label="操作人" width="150">
      </el-table-column>
      <el-table-column prop="describe" label="操作描述">
      </el-table-column>
      <el-table-column prop="remark" label="备注" width="100">
        <template scope="scope">
          <el-button @click="handleEdit" type="text" size="small">——</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="log-detail-footer">
      <template>
        <div class="block">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="[10, 20, 30, 40]"
            :page-size="pageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="filterData.length">
          </el-pagination>
        </div>
      </template>
    </div>
  </div>
</template>
<script>
  import PicButton from '../utils/PicButton.vue'

  export default {
    name: 'log-detail',
    watch: {
      queryDate: function (val, oldVal) {
        if (oldVal) {
          // 初始化各时段按钮都可用
          this.initButton()
        }
      }
    },
    props: ['queryDate', 'filterData'],
    data () {
      return {
        tableData: [],
        // 默认每页数据量
        pageSize: 10,
        // 当前页码
        currentPage: 1,
        // 查询页码
        start: 1,
        // 默认数据总数
        totalCount: 1000,
        // 改变当前时段
        difPeriods: '',
        buttonInfo: [
          {id: 1, path: 'small', btnName: 'preperiod', clickEvent: 'previousPeriods', disabled: false},
          {id: 2, path: 'small', btnName: 'current', clickEvent: 'currentPeriods', disabled: false},
          {id: 3, path: 'small', btnName: 'nextperiod', clickEvent: 'afterPeriods', disabled: false}
        ]
      }
    },
    methods: {
      handleSizeChange (val) {
      },
      handleCurrentChange (val) {
      },
      handleEdit (event) {
        let e = event || window.event
        let target = e.target || e.srcElement
        this.$prompt('请输入内容', {
          confirmButtonText: '确定',
          cancelButtonText: '取消'
        }).then(({value}) => {
          target.innerText = value
        }).catch(() => {
        })
      },
      // 不同时段的点击事件
      handleDateChange (item) {
        let dateItem, dayMonth
        this.initButton()
        // 当前点击按钮不可用
        item.disabled = true
        if (this.queryDate) {
          dateItem = this.queryDate.split('-')
          dayMonth = dateItem[dateItem.length - 1]
          if (item.id === 2) { // 当前时段查询
            this.difPeriods = this.queryDate
          } else { // 前一时段与后一时段查询
            item.id === 1 ? dayMonth-- : dayMonth++
            if (dateItem.length > 2) {
              this.difPeriods = dateItem[0] + '-' + dateItem[1] + '-' + dayMonth
            } else {
              this.difPeriods = dateItem[0] + '-' + dayMonth
            }
          }
          this.$emit('date-change', this.difPeriods)
        }
      },
      initButton () {
        // 让各时段按钮都可用
        for (let i = 0; i < this.buttonInfo.length; i++) {
          this.buttonInfo[i].disabled = false
        }
      }
    },
    components: {
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

  .float-right {
    float: right;
  }

  .log-detail {
    background: #FFF;
    border: 1px solid #ADADAD;
    box-shadow: 0px 2px 10px #ADADAD;
    height: 100%;
    width: 100%;
    overflow: hidden;
    position: relative;
  }

  .log-detail .log-detail-head {
    padding: 12px;
    line-height: 38px;
  }

  .pic-button {
    float: left;
    margin-left: 5px;
  }

  .log-detail-footer {
    position: absolute;
    bottom: 0;
    background: #EFEFEF;
    border-top: 1px solid #C1C1C1;
    width: 100%;
    padding: 10px 0;
  }

  .block {
    display: inline-block;
  }

</style>
