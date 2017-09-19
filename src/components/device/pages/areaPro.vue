<template>
  <div class="area-project">
    <div class="area-head-container">
      <el-row type="flex">
        <el-col :span="24">
          <div class="area-project-header">
            <!--<li class="history"></li>-->
            <li>{{this.areaData2.label}}</li>
            <li class="row-detail" @click="queryArea(areaData2)"></li>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="area-project-main">
      <el-row type="flex">
        <el-col :span="24">
          <div>
            <el-table
              :data="this.areaData2.children"
              border
              stripe
              style="width: 100%">
              <el-table-column
                label="项目编号">
                <template scope="scope">
                  <div class="area-table-column">
                    {{scope.row.project_code}}
                  </div>
                </template>
              </el-table-column>
              <el-table-column
                label="项目名称">
                <template scope="scope">
                  <div class="area-table-column">
                    {{scope.row.project_name}}
                  </div>
                </template>
              </el-table-column>
              <el-table-column
                label="配电室数量">
                <template scope="scope">
                  <div class="area-table-column">
                    {{scope.row.pds_number}}
                  </div>
                </template>
              </el-table-column>
              <el-table-column
                label="设备数量">
                <template scope="scope">
                  <div class="area-table-column">
                    {{scope.row.device_number}}
                  </div>
                </template>
              </el-table-column>
              <el-table-column
                label="投运日期">
                <template scope="scope">
                  <div class="area-table-column">
                    {{scope.row.touyun_date}}
                  </div>
                </template>
              </el-table-column>
              <el-table-column
                label="所属公司">
                <template scope="scope">
                  <div class="area-table-column">
                    {{scope.row.company}}
                  </div>
                </template>
              </el-table-column>
              <el-table-column
                label="值班电话">
                <template scope="scope">
                  <div class="area-table-column">
                    {{scope.row.tel}}
                  </div>
                </template>
              </el-table-column>
              <el-table-column
                label="负责人">
                <template scope="scope">
                  <div class="area-table-column">
                    {{scope.row.charger}}
                  </div>
                </template>
              </el-table-column>
              <el-table-column
                label="详情">
                <template scope="scope">
                  <el-button
                    @click.native.prevent="rowDetail(scope.$index, areaData2.children)"
                    type="text"
                    size="small"
                    class="row-detail">
                  </el-button>
                </template>
              </el-table-column>
              <el-table-column
                label="下一级">
                <template scope="scope">
                  <el-button
                    @click.native.prevent="nextLevel(scope.$index, areaData2.children)"
                    type="text"
                    size="small"
                    class="row-next-level">
                  </el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="area-project-bottom">
      <el-row type="flex">
        <el-col :span="20">
          <span class="total-project">共{{this.areaData2.children.length}}个项目</span>
        </el-col>
        <el-col :span="4">
          <a class="create-project" @click="createProjectFunction(areaData2)"></a>
        </el-col>
      </el-row>
    </div>
    <el-dialog title="项目" :visible.sync="dialogTableVisible">
      <QueryProject :rowData1="rowData"></QueryProject>
    </el-dialog>
    <el-dialog title="区域" size="tiny" :visible.sync="queryAreaDialogVisible">
      <QueryArea :areaData1="areaData2"></QueryArea>
    </el-dialog>
    <el-dialog title="新建项目" size="small" :visible.sync="createProjectDialogVisible">
      <CreateProject :areaData1="areaData2"></CreateProject>
    </el-dialog>
  </div>
</template>
<script>
  import QueryProject from './project/Query.vue'
  import QueryArea from './area/Query.vue'
  import CreateProject from './project/Create.vue'

  export default {
    name: 'areaPro',
    props: ['areaData2'],
    data() {
      return {
        rowData: {},
        dialogTableVisible: false,
        queryAreaDialogVisible: false,
        createProjectDialogVisible:false
      };
    },
    methods: {
      createProjectFunction: function (areaParent) {
        console.log(areaParent)
        this.createProjectDialogVisible = true
      },
      queryArea(areaDetails) {
        console.log(areaDetails)
        this.queryAreaDialogVisible = true
      },
      handleNodeClick(data) {
        console.log(data)
      },
      rowDetail(index, row) {
        console.log(index)
        this.dialogTableVisible = true
        this.rowData = row[index]
        console.log(this.rowData)
      },
      nextLevel(index, row) {
        console.log(index)
        console.log(row)
      }
    },
    components: {
      QueryProject,
      QueryArea,
      CreateProject
    }

  };
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  ul, li {
    list-style: none;
  }

  .area-project {
    /*width: 99%;*/
    /*min-height: 100vh;*/
    /*background: #ffffff;*/
    /*margin: 5px;*/
    /*border: 1px solid #ACB1B1;*/
    height: 100%;
  }

  .area-project-header {
    padding-left: 15px;
    height: 30px;
    padding-top: 10px;
  }

  .area-project-header li {
    float: left;
    margin: 0 2.5px;
  }

  .area-output {
    display: block;
    float: right;
    width: 80px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    vertical-align: middle;
    color: #ffffff;
    background: #0000ff;
    border-radius: 5px;
    margin: 5px;
  }

  .area-head-container {
    background: #ffffff;
  }

  .area-project-main {
    height: calc(100% - 80px);
    overflow-x: hidden;
  }

  .area-project-bottom {
    width: 100%;
    min-height: 40px;
    background: #EEEFF0;
  }

  .create-project {
    display: block;
    width: 80px;
    height: 30px;
    line-height: 30px;
    vertical-align: middle;
    text-align: center;
    margin: 5px;
    background-image: url("../assets/create-project.png");
    background-size: 100% 100%;
    border-radius: 5px;
    color: #ffffff;
    float: right;
  }

  .area-table-column {
    white-space: nowrap;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .total-project {
    display: block;
    width: auto;
    height: 40px;
    /* background: red; */
    padding-left: 15px;
    line-height: 40px;
    vertical-align: middle;
  }

  .row-detail {
    display: block;
    width: 20px;
    height: 20px;
    background-image: url("../assets/details.png");
    background-size: 100% 100%;
    border-radius: 50%;
  }

  .row-next-level {
    display: block;
    width: 20px;
    height: 20px;
    background-image: url("../assets/next-level.png");
    background-size: 100% 100%;
    border-radius: 50%;
  }

  .history {
    display: block;
    width: 20px;
    height: 20px;
    background-image: url("../assets/history.png");
    background-size: 100% 100%;
    border-radius: 50%;
  }
</style>
<style>
  .area-project .el-table--border td,
  .area-project .el-table--border th {
    border: none;
  }

  .area-project .el-table td,
  .area-project .el-table th {
    height: 30px;
    min-width: 0;
    text-overflow: ellipsis;
    vertical-align: middle;
  }

  .area-project .cell {
    padding-right: 0 !important;
  }

  .area-project .el-table th > .cell {
    color: #8D8E8F;
    background: #EEEFF1;
    word-wrap: normal;
    text-overflow: ellipsis;
    line-height: 30px;
    width: 100%;
    box-sizing: border-box;
  }

  .area-project .el-dialog__body {
    margin: 0;
    padding: 0;
  }

</style>
