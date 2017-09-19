<template>
  <div class="tableData">
    <div class="tableData-content">
      <el-table
        :data="this.tableData1"
        stripe
        style="width:100%;height=100%">
        <el-table-column label="等级" width="100">
          <template scope="scope">
        <span v-bind:class="scope.row.level_class">
        </span>
          </template>
        </el-table-column>
        <el-table-column label="时间" width="200">
          <template scope="scope">
            <span>{{ scope.row.time }}</span>
          </template>
        </el-table-column>
        <el-table-column label="项目" width="120">
          <template scope="scope">
            <span>{{ scope.row.project }}</span>
          </template>
        </el-table-column>
        <el-table-column label="配电室" width="100">
          <template scope="scope">
            <span>{{ scope.row.switching_room }}</span>
          </template>
        </el-table-column>
        <el-table-column label="设备" width="140">
          <template scope="scope">
            <span>{{ scope.row.equipment }}</span>
          </template>
        </el-table-column>
        <el-table-column label="类型" width="100">
          <template scope="scope">
            <span>{{ scope.row.type }}</span>
          </template>
        </el-table-column>
        <el-table-column label="状态" width="100">
          <template scope="scope">
            <span v-bind:class="scope.row.status_class"></span>
          </template>
        </el-table-column>
        <el-table-column label="处理详情">
          <template scope="scope">
            <el-button @click="eventDetail(scope.$index, scope.row)">
              <div class="detailsImg"></div>
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <EventPagination></EventPagination>
    <el-dialog title="事件详情" :visible.sync="dialogTableVisible">
      <EventsDialog :rowData1="rowData"></EventsDialog>
    </el-dialog>
  </div>
</template>
<script>
  import EventsDialog from './EventsDialog.vue'
  import EventPagination from './EventPagination.vue'

  export default {
    props: ['tableData1'],
    data () {
      return {
        rowData: {},
        dialogTableVisible: false
      }
    },
    computed: {
      test: function () {
        return this.size.trim().toLowerCase()
      }
    },
    methods: {
      eventDetail (index, row) {
        console.log(index, row)
        this.dialogTableVisible = true
        this.rowData = row
      }
    },
    components: {
      EventsDialog,
      EventPagination
    }
  }
</script>
<style scoped>
  .tableData {
    width: 100%;
    height: 100%;
  }

  .tableData-content {
    width: 100%;
    height: calc(100% - 40px);
    overflow: auto;
  }

  .detailsImg {
    width: 30px;
    height: 30px;
    background: url('../../assets/jump.png') center center no-repeat;
  }

  /**
  *等级level_class
  */
  .accident {
    display: block;
    width: 100%;
    height: 25px;
    background: url("../../assets/alarm/accident.png") center center no-repeat;
    border-radius: 5px;
  }

  .alarm {
    display: block;
    width: 100%;
    height: 30px;
    background: url("../../assets/alarm/accident.png") center center no-repeat;
    border-radius: 5px;
  }

  .general {
    display: block;
    width: 100%;
    height: 30px;
    background: url("../../assets/alarm/general.png") center center no-repeat;
    border-radius: 5px;
  }

  .other {
    display: block;
    width: 100%;
    height: 30px;
    background: url("../../assets/alarm/other.png") center center no-repeat;

    border-radius: 5px;
  }

  .prealarm {
    display: block;
    width: 100%;
    height: 30px;
    background: url("../../assets/alarm/prealarm.png") center center no-repeat;

    border-radius: 5px;
  }

  /**
  *state
  */
  .accept {
    display: block;
    width: 100%;
    height: 30px;
    background: url("../../assets/state/accept.png") center center no-repeat;

    border-radius: 5px;
  }

  .did {
    display: block;
    width: 100%;
    height: 30px;
    background: url("../../assets/state/did.png") center center no-repeat;

    border-radius: 5px;
  }

  .done {
    display: block;
    width: 100%;
    height: 30px;
    background: url("../../assets/state/done.png") center center no-repeat;

    border-radius: 5px;
  }

  .underassess {
    display: block;
    width: 100px;
    height: 100px;
    background: url("../../assets/state/underassess.png") center center no-repeat;

    border-radius: 5px;
  }

  .underdeal {
    display: block;
    width: 100%;
    height: 30px;
    background: url("../../assets/state/underdeal.png") center center no-repeat;

    border-radius: 5px;
  }

  .underorder {
    display: block;
    width: 100%;
    height: 30px;
    background: url("../../assets/state/underorder.png") center center no-repeat;

    border-radius: 5px;
  }

  .undo {
    display: block;
    width: 100%;
    height: 30px;
    background: url("../../assets/state/undo.png") center center no-repeat;

    border-radius: 5px;
  }
</style>
<style>
  .tableData .el-dialog.el-dialog--small {
    width: 400px;
  }

  .tableData button.el-button.el-button--default {
    border: none;
    padding: 0;
    margin: 0;
    background: none;
  }

  .tableData td {
    border: none;
    height: auto !important;
  }

  .tableData .el-table .cell {
    line-height: normal;
    color: #797A7B;
  }
</style>
