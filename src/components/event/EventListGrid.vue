<template>
  <div>
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="date" label="日期" width="180">
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="180">
      </el-table-column>
      <el-table-column prop="address" label="地址">
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template scope="scope">
                <el-button @click="handleClick" type="text" size="small">查看</el-button>
                <el-button @click="handleClick1"type="text" size="small">编辑</el-button>
</template>
      </el-table-column>
    </el-table>
    <EventDetail :dialogVisible.sync="dialogVisible1"></EventDetail>
  </div>
</template>

<script>
  import EventDetail from './EventDetail'
  export default {
    name: 'eventlistgrid',
    methods: {
      handleClick () {
        this.dialogVisible1 = true
      },
      handleClick1 () {
        this.dialogVisible1 = false
      }
    },
    data () {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙ceshi'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
        dialogVisible1: false
      }
    },
    components: {
      EventDetail
    }
  }
</script>
