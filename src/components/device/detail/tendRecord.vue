<template>
  <div class="tend-record">
    <div class="record-table">
      <el-table
        :data="tableData"
        stripe
        style="width: 100%">
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
          prop="content"
          label="内容"
          width="180">
        </el-table-column>
        <el-table-column
          prop="creator"
          label="创建人">
        </el-table-column>
        <el-table-column
          prop="executor"
          label="执行人">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>

  export default {
    components: {},
    name: 'tendRecord',
    data() {
      return {
        tableData: [{
          time: '2016-05-02',
          type: '王小虎',
          content: '上海市普陀区金沙江路 1518 弄',
          creator: '2016-05-02',
          executor: '王小虎',
        }, {
          time: '2016-05-02',
          type: '王小虎',
          content: '上海市普陀区金沙江路 1518 弄',
          creator: '2016-05-02',
          executor: '王小虎',
        }, {
          time: '2016-05-02',
          type: '王小虎',
          content: '上海市普陀区金沙江路 1518 弄',
          creator: '2016-05-02',
          executor: '王小虎',
        }, {
          time: '2016-05-02',
          type: '王小虎',
          content: '上海市普陀区金沙江路 1518 弄',
          creator: '2016-05-02',
          executor: '王小虎',
        }]
      }
    }

  }
</script>
<style scoped>


</style>
